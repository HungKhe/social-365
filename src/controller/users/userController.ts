import userModel from '../../model/users';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { generateToken, verifyToken } from '../../helper/auth/jwt.helper';

export class userController {
    tokenList: any = {};
    accessTokenLife: string = process.env.ACCESS_TOKEN_LIFE || "1h";
    accessTokenSecret: string = process.env.ACCESS_TOKEN_SECRET || "access-token-secret-365-app-@./.";
    refreshTokenLife: string = process.env.REFRESH_TOKEN_LIFE || "3650d";
    refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET || "refresh-token-secret-365-app-@./.";
    public onRegisterMember = async (req: Request, res: Response) => {
        const self = this;
        const { userName, userEmail, userPassword } = req.body;
        console.log("req: ", req.body)
        let userData: any = {
            user_name: unescape(userName),
            user_email: unescape(userEmail),
            user_password: bcrypt.hashSync(unescape(userPassword), 10)
        }
        const findUser = await userModel.find( {$or: [{ 'user_name': userData.user_name }, { 'user_email': userData.user_email }]} ).lean().exec().then(r => r).catch(err => err);
        console.log('findUser: ', findUser)
        if(findUser.length > 0)
            return res.json({
                status: 'Tài khoản hoặc email đã được sử dụng!!!'
            });
        
        userModel.create(userData, async function(err: any, user: any) {
            if (err) {
                return res.status(400).send({
                    status: "Đăng ký thất bại, vui lòng thử lại sau!!!"
                });
            } else {
                const userFakeData = {
                    _id: user.user_id,
                    name: user.user_name,
                    email: user.user_email
                };
                const accessToken: any = await generateToken(userFakeData, self.accessTokenSecret, self.accessTokenLife);
                const refreshToken: any = await generateToken(userFakeData, self.refreshTokenSecret, self.refreshTokenLife);
                self.tokenList[refreshToken] = {accessToken, refreshToken};
                return res.json({
                    user,
                    tokenList: self.tokenList
                });
            }
        });
    }
    public onGetInforMember = (req: Request, res: Response) => {
        console.log("req: ", req.params)
        res.json({
            status: 'onGetInforMember'
        });
    }
}
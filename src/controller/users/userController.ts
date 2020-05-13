import { Router } from 'express';
import userModel from '../../model/users';
import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import { generateToken, verifyToken } from '../../helper/auth/jwt.helper';

class userController {
    public router: Router = Router();
    tokenList: any = {};
    accessTokenLife: string = process.env.ACCESS_TOKEN_LIFE || "1h";
    accessTokenSecret: string = process.env.ACCESS_TOKEN_SECRET || "access-token-secret-365-app";
    refreshTokenLife: string = process.env.REFRESH_TOKEN_LIFE || "3650d";
    refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET || "refresh-token-secret-365-app";
    constructor(){
        this.initRoutes();
        this.onRegisterMember = this.onRegisterMember.bind(this);
        this.onLoginMember = this.onLoginMember.bind(this);
        this.onRenderUserResponse = this.onRenderUserResponse.bind(this);
    }
    public initRoutes() {
        this.router.route("/user")
            .put(this.onRegisterMember)
            .post(this.onLoginMember)

        this.router.route("/user/:id")
            .get(this.onGetInfoMember);
            
    }
    async onRegisterMember(req: Request, res: Response){
        const { userName, userEmail, userPassword } = req.body;
        let userData: any = {
            user_name: unescape(userName),
            user_email: unescape(userEmail),
            user_password: bcrypt.hashSync(unescape(userPassword), 10)
        }
        console.log("userData: ", userData)
        const findUser = await userModel.find( {$or: [{ 'user_name': userData.user_name }, { 'user_email': userData.user_email }]} ).lean().exec().then(r => r).catch(err => err);
        console.log('findUser: ', findUser)
        if(findUser.length > 0)
            return res.json({
                error: true,
                status: 'Tài khoản hoặc email đã được sử dụng!!!'
            });
        
        userModel.create(userData, async (err: any, user: any) => {
            if (err) {
                return res.status(400).send({
                    error: true,
                    status: "Đăng ký thất bại, vui lòng thử lại sau!!!"
                });
            } else {
                let docUser = user._doc;
                delete docUser._id;
                delete docUser.user_password;
                // const dataResponse = await this.onRenderUserResponse(user);
                const resData = { error: false, status: "Đăng ký thành công!!!", user: docUser}
                return res.status(200).json(resData);
            }
        });
    }
    async onLoginMember(req: Request, res: Response){
        const { userName, userPassword } = req.body;
        if(!userName || !userPassword)
            return res.json({
                error: true,
                status: 'Vui lòng nhập đầu đủ thông tin đăng nhập!!!'
            });
        try {
            const findUser: any = await userModel.findOne({ 'user_name': unescape(userName) }).then(r => r);
            if(!findUser)
                return res.json({
                    error: true,
                    status: "Tài khoản đăng nhập không tồn tại!!!"
                });
            if(!findUser.comparePassword(unescape(userPassword)))
                return res.send({
                    error: true,
                    status: "Mật khẩu đăng nhập không hợp lệ!!!"
                });
            let docUser = findUser._doc;
            const dataResponse = await this.onRenderUserResponse(docUser);
            const resData = { error: false, status: "Đăng nhập thành công!!!", ...dataResponse}
            return res.status(200).json(resData);
        } catch (error) {
            return res.json({
                error: true,
                status: error.toString()
            });
        }
    }
    public onGetInfoMember = (req: Request, res: Response) => {
        console.log("req: ", req.params)
        res.json({
            status: 'onGetInfoMember'
        });
    }
    async onRenderUserResponse(user: any){
        if(!user) return {};
        delete user._id;
        delete user.user_password;
        const userJWTData = {
            id: user.user_id,
            name: user.user_name,
            email: user.user_email
        };
        const accessToken: any = await generateToken(userJWTData, this.accessTokenSecret, this.accessTokenLife);
        const refreshToken: any = await generateToken(userJWTData, this.refreshTokenSecret, this.refreshTokenLife);
        this.tokenList = {accessToken, refreshToken};
        return {
            data: {
                user,
                tokenList: this.tokenList
            }
        }
    }
}
export default new userController();
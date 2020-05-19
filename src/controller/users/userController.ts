import { Router } from 'express';
import UsersModel from '../../model/users';
import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import { generateToken } from '../../helper/auth/jwt.helper';
import { isAuth } from '../../helper/auth/jwt.middleware';

class userController {
    public router: Router = Router();
    tokenList: any = {};
    accessTokenLife: string = process.env.ACCESS_TOKEN_LIFE || "1h";
    accessTokenSecret: string = process.env.ACCESS_TOKEN_SECRET || "access-token-secret-365-app";
    refreshTokenLife: string = process.env.REFRESH_TOKEN_LIFE || "3650d";
    refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET || "refresh-token-secret-365-app";
    constructor(){
        // this.initRoutes();
        this.onRegisterMember = this.onRegisterMember.bind(this);
        this.onLoginMember = this.onLoginMember.bind(this);
        this.onRenderUserResponse = this.onRenderUserResponse.bind(this);
    }
    // public initRoutes() {
    //     this.router.route("/user")
    //         .put(this.onRegisterMember)
    //         .post(this.onLoginMember)

    //     this.router.route("/user/me")
    //         .get(this.onGetInfoMember);
            
    // }
    async onRegisterMember(req: Request, res: Response){
        const { userName, userEmail, userPassword } = req.body;
        let userData: any = {
            user_name: unescape(userName),
            user_email: unescape(userEmail),
            user_password: bcrypt.hashSync(unescape(userPassword), 10)
        }
        console.log("userData: ", userData)
        const findUser = await UsersModel.find( {$or: [{ 'user_name': userData.user_name }, { 'user_email': userData.user_email }]} ).lean().exec().then(r => r).catch(err => err);
        console.log('findUser: ', findUser)
        if(findUser.length > 0)
            return res.json({
                error: true,
                message: 'Tài khoản hoặc email đã được sử dụng!!!'
            });
        
        UsersModel.create(userData, async (err: any, user: any) => {
            if (err) {
                return res.status(400).send({
                    error: true,
                    message: "Đăng ký thất bại, vui lòng thử lại sau!!!"
                });
            } else {
                // let docUser = user._doc;
                // delete docUser._id;
                // delete docUser.user_password;
                // const dataResponse = await this.onRenderUserResponse(user);
                const resData = { error: false, message: "Đăng ký thành công!!!"}
                return res.status(200).json(resData);
            }
        });
    }
    async onLoginMember(req: Request, res: Response){
        const { userName, userPassword } = req.body;
        if(!userName || !userPassword)
            return res.json({
                error: true,
                message: 'Vui lòng nhập đầu đủ thông tin đăng nhập!!!'
            });
        try {
            const findUser: any = await UsersModel.findOne({ 'user_name': unescape(userName) }).then(r => r);
            if(!findUser)
                return res.json({
                    error: true,
                    message: "Tài khoản đăng nhập không tồn tại!!!"
                });
            if(!findUser.comparePassword(unescape(userPassword)))
                return res.send({
                    error: true,
                    message: "Mật khẩu đăng nhập không hợp lệ!!!"
                });
            let docUser = { ...findUser._doc };
            const dataResponse = await this.onRenderUserResponse(docUser);
            const resData = { error: false, message: "Đăng nhập thành công!!!", ...dataResponse}
            const token_list = {
                access_token: this.tokenList.access_token,
                refresh_token: this.tokenList.refresh_token
            }
            UsersModel.findOneAndUpdate({ 'user_id': docUser.user_id }, { $set: { "token_list": token_list } }, { new: true }, (err, data) => {});
            return res.status(200).json(resData);
        } catch (error) {
            return res.json({
                error: true,
                message: error.toString()
            });
        }
    }
    public onGetInfoMember = async (req: Request, res: Response) => {
        const user = await isAuth(req, res);
        if(!user)
            return res.status(401).send({
                error: true,
                message: '401 Unauthorized'
            });
        console.log(user)
        const { data }: any = user ;
        res.send({
            message: 'Authorized!!!',
            user: data
        })
    }
    async onRenderUserResponse(user: any){
        if(!user) return {};
        delete user._id;
        delete user.user_password;
        delete user.token_list;
        const userJWTData = {
            user_id: user.user_id,
            user_name: user.user_name,
            user_email: user.user_email
        };
        const access_token: any = await generateToken(userJWTData, this.accessTokenSecret, this.accessTokenLife);
        const refresh_token: any = await generateToken(userJWTData, this.refreshTokenSecret, this.refreshTokenLife);
        this.tokenList = {access_token, refresh_token};
        return {
            data: {
                user,
                tokenList: this.tokenList
            }
        }
    }
    async onGetTokenList(user: any){

    }
}
export default new userController();
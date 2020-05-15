import express, { Application, Router } from "express";
import { PostSocial } from "./social/post";
import { Users } from "./users/users";
import userController from '../controller/users/userController';
import isAuth from '../helper/auth/jwt.middleware';

class Routes {
    public router: Router = Router();
    public PostSocial: PostSocial = new PostSocial();
    public UsersRoutes: Users = new Users();
    constructor(){
        this.initRouters();
    }
    public initRouters(): void {
        this.initUserRouter();
    }
    public initUserRouter(): void {
        this.router.use(isAuth());

        this.router.route("/user")
            .put(userController.onRegisterMember)
            .post(userController.onLoginMember)
        
        this.router.route("/user/:id")
            .get(userController.onGetInfoMember);
    }
}
export default new Routes();
import express, { Request, Router } from "express";
import userController from '../controller/users/userController';
import postController from "../controller/posts/postController";
class Routes {
    public router: Router = Router();
    constructor(){
        this.initRouters();
    }
    public initRouters(): void {
        this.initUserRouter();
        this.initPostRouter();
    }
    public initUserRouter(): void {
        this.router.route("/user")
            .put(userController.onRegisterMember)
            .post(userController.onLoginMember)
        
        this.router.route("/user/me")
            .get(userController.onGetInfoMember);
    }
    public initPostRouter(): void {
        this.router.route("/community/post")
            .post(postController.onCreateNewPost)
            .get(postController.onFetchListPost)
            .put(postController.onUpdatePost)

        this.router.route("/community/post/:id")
            .delete(postController.onDeletePost)
    }
}
export default new Routes();
import express, { Application, Router } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import { PostSocial } from "./social/post";
import { Users } from "./users/users";

class Routes {
    public app: Application;
    public PostSocial: PostSocial = new PostSocial();
    public Users: Users = new Users();
    constructor(){
        this.app = express();
        // this.middleware();
        this.initRouters();
    }
    // private middleware(): void{
    //     this.app.use(bodyParser.json());
    //     this.app.use(bodyParser.urlencoded({ extended: false }));
    //     this.app.use(morgan('combined'));
    //     this.app.use(cors());
    // }
    public initRouters(): void {
        this.PostSocial.routes(this.app)
        this.Users.routes(this.app)
    }
}
export default new Routes().app;
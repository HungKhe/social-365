import express, { Application, Router } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import { PostSocial } from "./social/post";

class Routes {
    public app: Application;
    public PostSocial: PostSocial = new PostSocial();
    constructor(){
        this.app = express();
        this.middleware();
        this.routers();
    }
    private middleware(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(morgan('combined'));
        this.app.use(cors());
    }
    private routers(): void {
        this.PostSocial.routes(this.app)
    }
}
export default new Routes().app;
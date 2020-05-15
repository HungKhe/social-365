import express, { Application, Router } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import Routes from './routes/routes';
import isAuth from './helper/auth/jwt.middleware';
class App {
    public app: Application;
    constructor(){
        this.app = express();
        this.middleware();
    }
    private middleware(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(morgan('combined'));
        this.app.use(cors());
        this.routes();
        dotenv.config();
    }
    private routes() {
        this.app.use(isAuth)
        this.app.use('/api/v1', Routes.router)
        this.app.get("/", (req, res, next) => {
            res.send({
                status: 'Welcome to my app'
            });
        });
        this.app.use("*", (req, res, next) => {
            res.send({
                status: "Page not found!!!"
            });
        });
    }
}

export default new App().app;
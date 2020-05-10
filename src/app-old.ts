import express, { Application, Router } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import Routes from './routes/routes';

class App {
    public app: Application;
    // public appRoutes: Routes = new Routes();
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
        Routes.initRouters();
        dotenv.config();
    }
    private routers = () => {
        // this.app.use("/api/v1", Routes);
        this.app.get("/", (req, res, next) => {
            res.send({
                status: 'Welcome to my app'
            });
        });
        // this.appRoutes.setAppRoutes(this.app);
        this.app.use("*", (req, res, next) => {
            res.send({
                status: "Page not found!!!"
            });
        });
    }
}
export default new App().app;
import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

export class Express {
    public app: Application;
    constructor(){
        this.app = express();
        this.middleware();
    }
    public middleware(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(morgan('combined'));
        this.app.use(cors());
    }
}
import express, { Application, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import router from './routes/index';
// const path = require("path");

const app: Application = express();
// const pathRootApp = path.dirname(require.main.filename || process.mainModule.filename);
// app.use(express.static(path.join(pathRootApp, '/client_app/dist')));
app.use(morgan('combined'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

app.use('/api/v1', router); 
app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send({
        status: 'Welcome to my app'
    });
});
app.use("*", (req: Request, res: Response, next: NextFunction) => {
    res.send({
        status: "Page not found!!!"
    });
});

// app.get('/', function (req, res) {
//     res.sendFile(path.join('/index.html'));
//     res.json({
//         'data': path.dirname(require.main.filename || process.mainModule.filename)
//     })
// });

export default app;
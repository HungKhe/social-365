import socialModel from '../model/social';
import { Request, Response, NextFunction } from 'express';

export class socialController {
    public onGetListPostSocial(req: Request, res: Response){
        res.json({
            status: 'Social community route'
        });
    }
}
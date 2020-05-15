import { Request, Response, NextFunction } from 'express';
import { verifyToken } from './jwt.helper';
interface RequestCustom extends Request{
    jwtDecoded: any;
}
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET || "access-token-secret-365-app";

const isAuth = async (req:RequestCustom , res: Response, next: NextFunction) => {
    let tokenFromClient: string = req.headers["x-access-token"]?.toString() || req.headers["Authorization"]?.toString() || '';
    if (tokenFromClient) {
        if(tokenFromClient.indexOf('Bearer ') > -1)
            tokenFromClient = tokenFromClient.replace('Bearer ','');
        const decoded = await verifyToken(tokenFromClient, accessTokenSecret);
        req.jwtDecoded = decoded;
    }
    next();
}
export default isAuth;
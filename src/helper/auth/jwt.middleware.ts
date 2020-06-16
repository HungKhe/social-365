import { Request, Response } from 'express';
import { verifyToken } from './jwt.helper';
// interface RequestCustom extends Request{
//     jwtDecoded: any;
// }
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET || "access-token-secret-365-app";

export const isAuth = async (req:Request , res: Response) => {
    let tokenFromClient: string = req.headers["x-access-token"]?.toString() || req.headers["authorization"]?.toString() || '';
    if (tokenFromClient) {
        if(tokenFromClient.indexOf('Bearer ') > -1)
            tokenFromClient = tokenFromClient.replace('Bearer ','').trim();
        try {
            const decoded = await verifyToken(tokenFromClient, accessTokenSecret);
            return decoded;
        } catch (error) {
            const err = JSON.parse(JSON.stringify(error));
            return {
                error: true,
                message: err.message
            };
        }
    }
    return {
        error: true,
        message: "401 Unauthorized"
    };
}
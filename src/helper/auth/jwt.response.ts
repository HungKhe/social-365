import { Request, Response } from 'express';
interface RequestCustom extends Request{
    jwtDecoded: any;
}
export const middlewareResponse = (req: RequestCustom, res: Response) => {
    // if(!req || res) return false;
    if(!req.jwtDecoded)
        return res.status(401).json({
            message: 'Unauthorized.',
        });
}
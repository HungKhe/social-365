import { Request, Response } from 'express';
import PostsModel from '../../model/posts';
import UsersModel from '../../model/users';
import { isAuth } from '../../helper/auth/jwt.middleware';

class postController {
    constructor(){
        this.onCreateNewPost = this.onCreateNewPost.bind(this);
    }
    async onCreateNewPost(req: Request, res: Response){
        var user: any = await isAuth(req, res);
        console.log('user', user)
        if(!user)
            return res.status(401).send({
                error: true,
                message: '401 Unauthorized!!!'
            });
        const postData = { ...req.body };
        if(!postData.content)
            return res.send({
                error: true,
                message: 'Content is required!!!!'
            });
        try {
            if(postData.videos && postData.videos.length > 0){

            }
            if(postData.images && postData.images.length > 0){
    
            }
            postData.user = await UsersModel.findOne({ 'user_id': user.data.user_id }).lean().exec().then((r: any) => { delete r.token_list; return r; });
            PostsModel.create(postData, async (err: any, post: any) => {
                if (err) {
                    return res.status(400).send({
                        error: true,
                        message: "Đăng ký thất bại, vui lòng thử lại sau!!!"
                    });
                } else {
                    const resData = { error: false, message: "Post successfully!!!", post}
                    return res.status(200).json(resData);
                }
            });
        } catch (error) {
            return res.json({
                error: true,
                message: error.toString()
            });
        }
    }
    async onFetchListPost(req: Request, res: Response){
        var user: any = await isAuth(req, res);
        if(user.error)
            return res.status(401).send({
                error: true,
                message: user.message || '401 Unauthorized'
            });
        
        let page: number = req.query.page ? parseInt(req.query.page) : 1;
        let limit: number = req.query.limit ? parseInt(req.query.limit) : 10;
        let offset: number = page === 1 ? limit : page * limit;
        console.log("req.query: ", req.query)
        try {
            const listPost = await PostsModel.find().skip(offset)
            .limit(limit)
            .sort({
                create_date: 'asc'
            }).exec().then( r => r );
            console.log('listPost: ', listPost)
        } catch (error) {
            return res.json({
                error: true,
                message: error.toString()
            });
        }
    }
}

export default new postController();
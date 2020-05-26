import { Request, Response, query } from 'express';
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
        if(user.error)
            return res.status(401).send({
                error: true,
                message: user.message || '401 Unauthorized'
            });
        const postData = { ...req.body };
        if(!postData.content)
            return res.status(400).send({
                message: 'Content is required!!!!'
            });
        try {
            if(postData.videos && postData.videos.length > 0){

            }
            if(postData.images && postData.images.length > 0){
    
            }
            postData.user = await UsersModel.findOne({ 'user_id': user.data.user_id }).lean().exec().then((r: any) => { delete r.token_list; delete r.user_password; return r; });
            PostsModel.create(postData, async (err: any, post: any) => {
                if (err) {
                    return res.status(501).send({
                        message: "Server error - please try again!!!"
                    });
                } else {
                    const resData = { message: "Post successfully!!!", data: post}
                    return res.status(200).json(resData);
                }
            });
        } catch (error) {
            return res.status(500).json({
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
        const { page, limit }: any = req.query;
        let currentPage: number = page ? parseInt(page) : 1;
        let limitPage: number = limit ? parseInt(limit) : 10;
        let offset: number = currentPage === 1 ? limitPage : currentPage * limitPage;
        try {
            const postQuery: object = {};
            const postOptions: object = {
                page: currentPage,
                limit: limitPage,
                sort:{ date: -1 },
                lean: true
            }

            const postResult = await PostsModel.paginate(postQuery, postOptions, (error, result) => result);
            res.status(200).json({
                error: false,
                data: postResult.docs,
                currentPage,
                totalPages: postResult.totalPages
            })
        } catch (error) {
            return res.json({
                error: true,
                message: error.toString()
            });
        }
    }
}

export default new postController();
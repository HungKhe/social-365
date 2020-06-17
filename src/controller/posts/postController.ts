import { Request, Response, query } from 'express';
import PostsModel from '../../model/posts';
import UsersModel from '../../model/users';
import { isAuth } from '../../helper/auth/jwt.middleware';
import { removePropertyFromObject } from '../../helper/utils';

class postController {
    constructor(){
        this.onCreateNewPost = this.onCreateNewPost.bind(this);
        this.onUpdatePost = this.onUpdatePost.bind(this);
        this.onDeletePost = this.onDeletePost.bind(this);
    }
    async onCreateNewPost(req: Request, res: Response){
        var user: any = await isAuth(req, res);
        console.log('user', user)
        if(user.error)
            return res.status(401).send({
                error: true,
                message: user.message || '401 Unauthorized'
            });
        let postData = { ...req.body };
        const removePostId = removePropertyFromObject('post_id');
        postData = removePostId(postData);
        if(!postData.content)
            return res.status(400).send({
                message: 'Content is required!!!!'
            });
        try {
            if(postData.videos && postData.videos.length > 0){

            }
            if(postData.images && postData.images.length > 0){
    
            }
            postData.user = await UsersModel.findOne({ 'user_id': user.data.user_id }).lean().exec().then((r: any) => { delete r.token_list; delete r.user_password; delete r._id; delete r.__v; return r; });
            PostsModel.create(postData, (err: any, post: any) => {
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
        console.log('user: ', user)
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
                sort:{ create_date: -1 },
                lean: true
            }

            const postResult = await PostsModel.paginate(postQuery, postOptions, (error, result) => result);
            let listPost = postResult.docs.map(post => {
                post.my_post = false;
                if(user.data.user_id.toString() === post.user.user_id.toString())
                    post.my_post = true;
                return post;
            })
            res.status(200).json({
                error: false,
                data: listPost,
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
    async onUpdatePost(req: Request, res: Response){
        var user: any = await isAuth(req, res);
        console.log('user', user)
        if(user.error)
            return res.status(401).send({
                error: true,
                message: user.message || '401 Unauthorized'
            });
        let postData = { ...req.body };
        if(!postData.post_id)
            return res.status(400).send({
                message: 'Post id is required!!!!'
            });
        if(!postData.content)
            return res.status(400).send({
                message: 'Content is required!!!!'
            });
        try {
            if(postData.videos && postData.videos.length > 0){

            }
            if(postData.images && postData.images.length > 0){
    
            }
            PostsModel.findOneAndUpdate({ 'post_id': postData.post_id }, postData, { new: true }, function(err: any, post: any){
                if (err) {
                    return res.status(501).send({
                        message: "Server error - please try again!!!"
                    });
                } else {
                    console.log('edited: ', post)
                    const resData = { message: "Update post successfully!!!", data: post}
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
    async onDeletePost(req: Request, res: Response){
        var user: any = await isAuth(req, res);
        console.log('user', user)
        if(user.error)
            return res.status(401).send({
                error: true,
                message: user.message || '401 Unauthorized'
            });
        let { id } = req.params;
        if(!id)
            return res.status(400).send({
                message: 'Post id is required!!!!'
            });
        try {
            const currentPost = await PostsModel.findOne({ 'post_id': id }).lean().exec().then((r: any) => r);
            if(!currentPost)
                return res.status(400).send({
                    message: "Post not found!!!!"
                });
            console.log('currentPost.user: ', currentPost.user)
            if(currentPost.user.user_id.toString() != user.data.user_id.toString())
                return res.status(403).send({
                    message: "You are not authorized to delete this post!!!!"
                });
            PostsModel.deleteOne({ 'post_id': id }, (err: any) => {
                if (err) {
                    return res.status(501).send({
                        message: "Server error - please try again!!!"
                    });
                } else {
                    const resData = { message: "Delete post successfully!!!", data: { post_id: id }}
                    return res.status(200).send(resData);
                }
            });
        } catch (error) {
            return res.status(500).send({
                error: true,
                message: error.toString()
            });
        }
    }
}

export default new postController();
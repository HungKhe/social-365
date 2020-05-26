import mongoose from './index';
import mongoosePaginate from 'mongoose-paginate-v2';
const schema = {
    post_id: { type: mongoose.Types.ObjectId, auto: true },
    content: {
        type: String,
        required: true
    },
    replyCount: {
        type: Number,
        default: 0
    },
    likeCount: {
        type: Number,
        default: 0
    },
    user: {
        type: Object,
        default: {}
    },
    create_date: {
        type: Date,
        default: Date.now
    },
    replies:{
        type: Array,
        default: []
    },
    images: {
        type: Array,
        default: []
    },
    videos: {
        type: Array,
        default: []
    },
    my_post: {
        type: Boolean
    }
};
const collectionName = "posts";
const postSchema = new mongoose.Schema(schema);
postSchema.plugin(mongoosePaginate);
const PostsModel = mongoose.model(collectionName, postSchema);
export default PostsModel;
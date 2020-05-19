import mongoose from './index';
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
const shopSchema = new mongoose.Schema(schema);
const PostsModel = mongoose.model(collectionName, shopSchema);
export default PostsModel;
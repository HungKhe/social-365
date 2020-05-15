import mongoose from './index';
const schema = {
    post_id: { type: mongoose.Types.ObjectId(), auto: true },
    content: String,
    replyCount: {
        type: Number,
        default: 0
    },
    likeCount: {
        type: Number,
        default: 0
    },
    user: {
        user_id: Number,
        display_name: String,
        avatar: String
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
    myPost: Boolean
};
const collectionName = "social_post";
const shopSchema = new mongoose.Schema(schema);
const SocialPost = mongoose.model(collectionName, shopSchema);
export default SocialPost;
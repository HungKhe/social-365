import mongoose from './index';
const schema = {
    post_id: { type: mongoose.Types.ObjectId(), auto: true },
    content: String,
    replyCount: Number,
    likeCount: Number,
    user: {
        user_id: Number,
        display_name: String,
        avatar: String
    },
    createDate: Date,
    replies: Array,
    images: Array,
    videos: Array,
    myPost: Boolean
};
const collectionName = "social_post";
const shopSchema = new mongoose.Schema(schema);
const SocialPost = mongoose.model(collectionName, shopSchema);
export default SocialPost;
import React from "react";
import PostItem from '../components/Post/PostItem';
import { itfPostItem } from '../redux/types';
interface CommunityPage {
    listPost: itfPostItem[]
}
const CommunityPage: React.FC<CommunityPage> = props => {
    const { listPost } = props;
    return (
        <div className="listPosts mb-3">
            {
                listPost.length === 0 ? <p className="emptyData text-center my-3">Not posts!</p>
                :
                listPost.map(post => <PostItem key={post.post_id} post={post}/>)
            }
        </div>
    )
}
export default CommunityPage;
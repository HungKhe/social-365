import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CommunityPage from '../page/CommunityPage';
import Post from '../components/Post/Post';

interface Community {
}
const Community: React.FC<Community> = (props) => {
    const onHandlePost = (dataPost: any) => {
        console.log("dataPost: ", dataPost);
    }
    return(
        <>
            <Post prHandlePost={onHandlePost}/>
            <CommunityPage />
        </>
    )
}

export default Community;
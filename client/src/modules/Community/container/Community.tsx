import React from 'react';
import CommunityPage from '../page/CommunityPage';
import Post from '../components/Post/Post';

const Community: React.FC<{}> = () => {
    return(
        <>
            <Post />
            <CommunityPage />
        </>
    )
}

export default Community;
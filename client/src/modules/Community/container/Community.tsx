import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CommunityPage from '../page/CommunityPage';
import Post from '../components/Post/Post';
import LoadingLine from '../../../components/snippets/LoadingLine';
import { TypeRootReducer } from '../../../reducer/interfaceReducer';
import { postMODInterface } from '../redux/types';
import * as actions from '../redux/actions';
interface Community {
}
interface postQuery {
    page: number;
    limit: number
}
const Community: React.FC<Community> = (props) => {
    const [ queryPost, setQueryPost ] = useState<postQuery>({
        page: 1,
        limit: 10
    })
    const postSelector: postMODInterface = useSelector((state: TypeRootReducer) => state.post);
    const dispatch = useDispatch();
    const onHandlePost = (dataPost: any) => {
        console.log("dataPost: ", dataPost);
    }
    useEffect(() => {
        dispatch(actions.actFetchListPost(queryPost));
    }, [])
    return(
        <>
            <Post prHandlePost={onHandlePost}/>
            <CommunityPage />
            <LoadingLine isLoading={postSelector.isLoading} />
            <div className={`loadMore ${postSelector.isLoading || postSelector.listPost.length === 0 ? 'd-none' : ''}`}>
                <a href="javascript:;">Load more posts</a>
            </div>
        </>
    )
}

export default Community;
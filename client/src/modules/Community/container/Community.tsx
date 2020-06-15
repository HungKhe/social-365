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
        limit: 5
    })
    const postSelector: postMODInterface = useSelector((state: TypeRootReducer) => state.post);
    const dispatch = useDispatch();
    const onHandlePost = (dataPost: any) => {
        console.log("dataPost: ", dataPost);
        dispatch(actions.actCreatePost(dataPost));
    }
    const onLoadMorePost = () => {
        let currentPage = queryPost.page + 1;
        setQueryPost({...queryPost, page: currentPage});
    }
    useEffect(() => {
        dispatch(actions.actFetchListPost(queryPost));
    }, [queryPost.page])
    return(
        <>
            <Post prHandlePost={onHandlePost}/>
            {
                !postSelector.isLoading && postSelector.listPost.length === 0 ? 
                <p className="emptyData text-center my-3">Not posts!</p>
                :
                <CommunityPage listPost={postSelector.listPost}/>
            }
            <LoadingLine isLoading={postSelector.isLoading} />
            <div className={`loadMore pb-3 ${postSelector.isLoading || postSelector.totalPages <= queryPost.page ? 'd-none' : ''}`}>
                <a onClick={onLoadMorePost} href="javascript:;">Load more posts</a>
            </div>
        </>
    )
}

export default Community;
import * as types from './types';
const initialState: types.fetchPostState = {
    error: false,
    message: "",
    isLoading: false,
    listPost: {
        post_id: "",
        content: "",
        replyCount: 0,
        likeCount: 0,
        user: {},
        create_date: "",
        replies: [],
        images: [],
        videos: [],
        my_post: false
    }
}

const PostReducer = (state: types.fetchPostState = initialState, action: types.PostType) => {
    switch(action.type){
        case types.FETCH_LIST_POST:
            return { ...state };

        default:
            return state;
    }
} 

export default PostReducer;
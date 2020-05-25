import * as types from './types';
const initialState: types.postMODInterface = {
    error: false,
    message: "",
    isLoading: false,
    listPost: [
        {
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
    ]
}

const PostReducer = (state: types.postMODInterface = initialState, action: types.PostType) => {
    const { payload } = action;
    switch(action.type){
        case types.FETCH_LIST_POST:
            return { ...state, isLoading: true };
        case types.FETCH_LIST_POST_SUCCESS:
            return { ...state };
        case types.FETCH_LIST_POST_FAILED:
            return { ...state, error: true, isLoading: false, listPost: [] };
        default:
            return state;
    }
} 

export default PostReducer;
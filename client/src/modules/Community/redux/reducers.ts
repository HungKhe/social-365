import * as types from './types';
const initialState: types.postMODInterface = {
    error: false,
    message: "",
    isLoading: false,
    listPost: [],
    totalPages: 1
}

const PostReducer = (state: types.postMODInterface = initialState, action: types.PostType) => {
    const { payload } = action;
    switch(action.type){
        case types.FETCH_LIST_POST:
            return { ...state, isLoading: true };
        case types.FETCH_LIST_POST_SUCCESS:
            const postArr = [...state.listPost, ...payload.data];
            return { ...state, totalPages: payload.totalPages, listPost: postArr, isLoading: false };
        case types.FETCH_LIST_POST_FAILED:
            return { ...state, error: true, isLoading: false, listPost: [] };

        case types.CREATE_POST:
            return { ...state };
        case types.CREATE_POST_SUCCESS:
            let list = [... state.listPost ];
            list.unshift(payload.data);
            return { ...state, listPost: list };
        case types.CREATE_POST_FAILED:
            return { ...state }

        case types.UPDATE_POST:
            return { ...state };
        case types.UPDATE_POST_SUCCESS:
            return { ...state, listPost: [] };
        case types.UPDATE_POST_FAILED:
            return { ...state }

        default:
            return state;
    }
} 

export default PostReducer;
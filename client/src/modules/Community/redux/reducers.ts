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
            let { data } = payload;
            let { post_id } = data;
            let listNew = [...state.listPost];
            const ind = listNew.findIndex((item) => {
                return item.post_id === post_id;
            });
            if(ind >= 0){
                console.log('listNew[ind]: ', listNew[ind]);
                console.log('data: ', data);
                listNew[ind] = {...listNew[ind], ...data};
            }
            console.log('listNew: ', listNew)
            return { ...state, listPost: [...listNew]};
        case types.UPDATE_POST_FAILED:
            return { ...state }

        case types.DELETE_POST:
            return { ...state };
        case types.DELETE_POST_SUCCESS:
            console.log('post_id: ', post_id)
            const indDelete = state.listPost.findIndex((item) => {
                return item.post_id === post_id;
            });
            if(indDelete >= 0) state.listPost.splice(indDelete, 1);
            return { ...state };
        case types.DELETE_POST_FAILED:
            return { ...state }

        default:
            return state;
    }
} 

export default PostReducer;
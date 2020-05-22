import * as types from './types';

export const actFetchListPost = (params: types.fetchPost): types.PostType => {
    return {
        type: types.FETCH_LIST_POST,
        payload: params
    }
}

export const actFetchListPostSuccess = (data: any): types.PostType => {
    return {
        type: types.FETCH_LIST_POST_SUCCESS,
        payload: data
    }
}

export const actFetchListPostFailed = (data: any): types.PostType => {
    return {
        type: types.FETCH_LIST_POST_FAILED,
        payload: data
    }
}
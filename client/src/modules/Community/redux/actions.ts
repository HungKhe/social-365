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

export const actCreatePost = (post: types.itfCreatePost): types.PostType => {
    return {
        type: types.CREATE_POST,
        payload: post
    }
}

export const actCreatePostSuccess = (data: any): types.PostType => {
    return {
        type: types.CREATE_POST_SUCCESS,
        payload: data
    }
}

export const actCreatePostFailed = (data: any): types.PostType => {
    return {
        type: types.CREATE_POST_FAILED,
        payload: data
    }
}
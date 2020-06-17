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

export const actUpdatePost = (post: types.itfUpdatePost): types.PostType => {
    return {
        type: types.UPDATE_POST,
        payload: post
    }
}

export const actUpdatePostSuccess = (data: any): types.PostType => {
    return {
        type: types.UPDATE_POST_SUCCESS,
        payload: data
    }
}

export const actUpdatePostFailed = (data: any): types.PostType => {
    return {
        type: types.UPDATE_POST_FAILED,
        payload: data
    }
}

export const actDeletePost = (post_id: types.itfDeletePost): types.PostType => {
    return {
        type: types.DELETE_POST,
        payload: post_id
    }
}

export const actDeletePostSuccess = (data: any): types.PostType => {
    return {
        type: types.DELETE_POST_SUCCESS,
        payload: data
    }
}

export const actDeletePostFailed = (data: any): types.PostType => {
    return {
        type: types.DELETE_POST_FAILED,
        payload: data
    }
}
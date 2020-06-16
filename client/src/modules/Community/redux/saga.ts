import { call, put, delay, takeLatest } from 'redux-saga/effects';
import * as types from './types';
import * as actions from './actions';
import * as loadingAct from '../../Loading/container/types';
import services from '../../../utils/services';
import { toastShowMessage } from '../../../utils/toastify';

// FETCH POST
function serviceFetchListPost(params: types.fetchPost){
    return services.apiFetchListPost(params)
}
function* workFetchListPost({ payload }: any){
    yield delay(2000);
    try {
        const res: any = yield call(serviceFetchListPost, payload);
        const data = res.data;
        if(data.error){
            toastShowMessage('error', data.message);
            return yield put(actions.actFetchListPostFailed(data));
        }
        yield put(actions.actFetchListPostSuccess(data));
    } catch (error) {
        toastShowMessage('error', error.toString());
        yield put(actions.actFetchListPostFailed(error));
    }
}
// CREATE POST
function serviceCreatePost(post: types.itfCreatePost){
    return services.apiCreatePost(post);
}

function* workCreatePost({payload}: any){
    yield put(loadingAct.actShowLoading({ isLoading: true }));
    yield delay(2000);
    try {
        const res = yield call(serviceCreatePost, payload);
        const { data }: any = res;
        toastShowMessage('success', data.message);
        yield put(actions.actCreatePostSuccess(data));
    } catch (error) {
        const err = JSON.parse(JSON.stringify(error))
        toastShowMessage('error', err.message);
        yield put(actions.actCreatePostFailed(err));
    }
    yield put(loadingAct.actHiddenLoading({ isLoading: false }))
}
// UPDATE POST
function serviceUpdatePost(post: types.itfUpdatePost){
    return services.apiUpdatePost(post);
}

function* workUpdatePost({payload}: any){
    yield put(loadingAct.actShowLoading({ isLoading: true }));
    yield delay(2000);
    try {
        const res = yield call(serviceUpdatePost, payload);
        const { data }: any = res;
        toastShowMessage('success', data.message);
        yield put(actions.actUpdatePostSuccess(data));
    } catch (error) {
        const err = JSON.parse(JSON.stringify(error))
        toastShowMessage('error', err.message);
        yield put(actions.actUpdatePostFailed(err));
    }
    yield put(loadingAct.actHiddenLoading({ isLoading: false }))
}

// DELETE POST
function serviceDeletePost(post: types.itfUpdatePost){
    return services.apiDeletePost(post);
}

function* workDeletePost({payload}: any){
    yield put(loadingAct.actShowLoading({ isLoading: true }));
    yield delay(2000);
    try {
        const res = yield call(serviceDeletePost, payload);
        const { data }: any = res;
        toastShowMessage('success', data.message);
        yield put(actions.actDeletePostSuccess(data));
    } catch (error) {
        const err = JSON.parse(JSON.stringify(error))
        toastShowMessage('error', err.message);
        yield put(actions.actDeletePostFailed(err));
    }
    yield put(loadingAct.actHiddenLoading({ isLoading: false }))
}

export const postSaga = [
    takeLatest(types.FETCH_LIST_POST, workFetchListPost),
    takeLatest(types.CREATE_POST, workCreatePost),
    takeLatest(types.UPDATE_POST, workUpdatePost),
    takeLatest(types.DELETE_POST, workDeletePost)
]
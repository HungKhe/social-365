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

export const postSaga = [
    takeLatest(types.FETCH_LIST_POST, workFetchListPost)
]
import { call, takeEvery, put, delay } from 'redux-saga/effects';
import * as types from './types';
import * as actions from './actions';
import * as loadingAct from '../../Loading/container/types';
import services from '../../../utils/services';
import { toastShowMessage } from '../../../utils/toastify';

function serviceUserLogin(data: types.userLogin) {
    return services.apiUserLogin(data);
}

function* workUserLogin({ payload }: any){
    yield delay(2000);
    try {
        const res: any = yield call(serviceUserLogin, payload);
        const data: any = res.data;
        yield put(actions.actUserLoginSuccess(data));
    } catch (error) {
        toastShowMessage('error', error.toString());
        yield put(actions.actUserLoginFailed(error));
    }
}

export const loginSaga = [
    takeEvery(types.USER_LOGIN, workUserLogin)
]
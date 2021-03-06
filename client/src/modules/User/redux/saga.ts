import { call, takeEvery, put, delay, takeLatest } from 'redux-saga/effects';
import * as types from './types';
import * as actions from './actions';
import * as loadingAct from '../../Loading/container/types';
import services from '../../../utils/services';
import { toastShowMessage } from '../../../utils/toastify';
import api from '../../../utils/api';

// LOGIN
function serviceUserLogin(data: types.userLogin) {
    return services.apiUserLogin(data);
}

function* workUserLogin({ payload }: any){
    yield put(loadingAct.actShowLoading({ isLoading: true }));
    yield delay(2000);
    try {
        const res: any = yield call(serviceUserLogin, payload);
        const data: any = res.data;
        if(data.error){
            toastShowMessage('error', data.message);
            yield put(loadingAct.actShowLoading({ isLoading: false }));
            return yield put(actions.actUserLoginFailed(data));
        }
        const { tokenList } = data.data;
        const { access_token } = tokenList;
        localStorage.setItem('userToken', tokenList.access_token);
        api.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
        yield put(actions.actUserLoginSuccess(data));
    } catch (error) {
        toastShowMessage('error', error.toString());
        yield put(actions.actUserLoginFailed(error));
    }
    yield put(loadingAct.actShowLoading({ isLoading: false }));
}

// REGISTER 
function serviceUserRegister(data: types.userRegister){
    return services.apiUserRegister(data);
}

function* workUserRegister({ payload }: any){
    yield put(loadingAct.actShowLoading({ isLoading: true }));
    yield delay(2000);
    try {
        const res: any = yield call(serviceUserRegister, payload);
        const data: any = res.data;
        if(data.error){
            toastShowMessage('error', data.message);
            yield put(loadingAct.actShowLoading({ isLoading: false }));
            return yield put(actions.actUserRegisterFailed(data));
        }
        toastShowMessage('success', data.message);
        yield put(actions.actUserRegisterSuccess(data));
    } catch (error) {
        toastShowMessage('error', error.toString());
        yield put(actions.actUserLoginFailed(error));
    }
    yield put(loadingAct.actShowLoading({ isLoading: false }));
}

export const userSaga = [
    takeLatest(types.USER_LOGIN, workUserLogin),
    takeLatest(types.USER_REGISTER, workUserRegister)
]
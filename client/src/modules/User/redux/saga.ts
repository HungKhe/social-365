import { call, takeEvery, put, delay, takeLatest } from 'redux-saga/effects';
import * as types from './types';
import * as actions from './actions';
import * as loadingAct from '../../Loading/container/types';
import services from '../../../utils/services';
import { toastShowMessage } from '../../../utils/toastify';
import history from '../../../utils/history';

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
            toastShowMessage('error', data.status);
            yield put(loadingAct.actShowLoading({ isLoading: false }));
            return yield put(actions.actUserLoginFailed(data));
        }
        yield put(actions.actUserLoginSuccess(data));
        history.push('/');
    } catch (error) {
        console.log("error: ", JSON.parse(JSON.stringify(error)))
        toastShowMessage('error', error.toString());
        yield put(actions.actUserLoginFailed(error));
    }
    yield put(loadingAct.actShowLoading({ isLoading: false }));
}

export const userSaga = [
    takeLatest(types.USER_LOGIN, workUserLogin)
]
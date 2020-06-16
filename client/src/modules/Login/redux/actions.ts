import * as types from './types';

export const actUserLogin = (data: types.userLogin): types.UserLoginType => {
    return {
        type: types.USER_LOGIN,
        payload: data
    }
}

export const actUserLoginSuccess = (data: any): types.UserLoginType => {
    return {
        type: types.USER_LOGIN_SUCCESS,
        payload: data
    }
}

export const actUserLoginFailed = (data: any): types.UserLoginType => {
    return {
        type: types.USER_LOGIN_FAILED,
        payload: data
    }
}
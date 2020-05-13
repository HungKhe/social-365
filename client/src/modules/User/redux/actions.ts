import * as types from './types';

export const actUserLogin = (data: types.userLogin): types.UserTypes => {
    return {
        type: types.USER_LOGIN,
        payload: data
    }
}

export const actUserLoginSuccess = (data: any): types.UserTypes => {
    return {
        type: types.USER_LOGIN_SUCCESS,
        payload: data
    }
}

export const actUserLoginFailed = (data: any): types.UserTypes => {
    return {
        type: types.USER_LOGIN_FAILED,
        payload: data
    }
}

export const actUserRegister = (data: types.userRegister): types.UserTypes => {
    return {
        type: types.USER_REGISTER,
        payload: data
    }
}

export const actUserRegisterSuccess = (data: any): types.UserTypes => {
    return {
        type: types.USER_REGISTER_SUCCESS,
        payload: data
    }
}

export const actUserRegisterFailed = (data: any): types.UserTypes => {
    return {
        type: types.USER_REGISTER_FAILED,
        payload: data
    }
}
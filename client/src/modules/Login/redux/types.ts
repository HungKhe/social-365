export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILED = "USER_LOGIN_FAILED";

export interface userLogin {
    userName: string,
    password: string
}

export interface userLoginState {
    isLogged: boolean,
    userToken: string
}

interface typeUserLogin {
    type: typeof USER_LOGIN,
    payload: userLogin
}

interface typeUserLoginSuccess {
    type: typeof USER_LOGIN_SUCCESS,
    payload: any
}

interface typeUserLoginFailed {
    type: typeof USER_LOGIN_FAILED,
    payload: any
}

export type UserLoginType = typeUserLogin | typeUserLoginSuccess | typeUserLoginFailed;
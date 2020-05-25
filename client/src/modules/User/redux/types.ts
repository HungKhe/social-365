// LOGIN
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
type UserLoginType = typeUserLogin | typeUserLoginSuccess | typeUserLoginFailed;
// REGISTER
export const USER_REGISTER = "USER_REGISTER";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
export const USER_REGISTER_FAILED = "USER_REGISTER_FAILED";

export interface userRegister {
    userEmail: string,
    userName: string,
    userPassword: string
}

export interface userRegisterState {
    error: boolean,
    message: string,
    isSuccess: boolean
}

interface typeUserRegister {
    type: typeof USER_REGISTER,
    payload: userRegister
}

interface typeUserRegisterSuccess {
    type: typeof USER_REGISTER_SUCCESS,
    payload: any
}

interface typeUserRegisterFailed {
    type: typeof USER_REGISTER_FAILED,
    payload: any
}

type UserRegisterType = typeUserRegister | typeUserRegisterSuccess | typeUserRegisterFailed;

export interface userMODInterface {
    register: userRegisterState,
    auth: userLoginState,
    user: any
}
// LOGOUT
export const USER_LOGOUT = "USER_LOGOUT";
interface typeUserLogout {
    type: typeof USER_LOGOUT,
    payload: any
}
type UserLogoutType = typeUserLogout;

export type UserTypes = UserLoginType | UserRegisterType | UserLogoutType;
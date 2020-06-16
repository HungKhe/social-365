import * as types from './types';
const initialState: types.userMODInterface = {
    register: {
        error: false,
        message: "",
        isSuccess: false
    },
    auth: {
        isLogged: localStorage.getItem('userToken') ? true : false,
        userToken: localStorage.getItem('userToken') || ''
    },
    user: {}
}

const userReducer = (state = initialState, action: types.UserTypes) => {
    const { payload } = action;
    switch(action.type){
        case types.USER_LOGIN: 
            return { ...state };
        case types.USER_LOGIN_SUCCESS:
            let { data } = payload;
            let { tokenList, user } = data;
            return { ...state, auth: { isLogged: true, userToken: tokenList.access_token }, user: user };
        case types.USER_LOGIN_FAILED:
            return { ...state, auth: { isLogged: false, userToken: '' } };

        case types.USER_REGISTER: 
            return { ...state };
        case types.USER_REGISTER_SUCCESS:
            return { ...state, register: { error: payload.error, status: payload.status, isSuccess: true} };
        case types.USER_REGISTER_FAILED:
            let { register } = { ...state };
            register = { ...payload.data, isSuccess: false };
            return { ...state, register };

        case types.USER_LOGOUT:
            return { ...state, auth: { isLogged: false, userToken: '' }, user: {}, register: {isSuccess: false}};
        default:
            return state;
    }
}

export default userReducer;
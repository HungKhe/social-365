import * as types from './types';
const initialState: types.userMODInterface = {
    register: {
        error: false,
        status: "",
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
            localStorage.setItem('userToken', JSON.stringify(tokenList.accessToken));
            return { ...state, auth: { isLogged: true, userToken: tokenList.accessToken }, user: user };
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

        default:
            return state;
    }
}

export default userReducer;
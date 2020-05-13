import * as types from './types';
const initialState: types.userMODInterface = {
    register: {
        error: false,
        status: ""
    },
    auth: {
        isLogged: false,
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
            console.log(payload)
            return { ...state, register: payload };

        default:
            return state;
    }
}

export default userReducer;
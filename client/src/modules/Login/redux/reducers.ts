import * as types from './types';
const initialState: types.userLoginState = {
    isLogged: false,
    userToken: localStorage.getItem('userToken') || ''
}

const loginReducer = (state = initialState, action: types.UserLoginType) => {
    switch(action.type){
        case types.USER_LOGIN: 
            return { ...state };
        case types.USER_LOGIN_SUCCESS:
            return { ...state };
        case types.USER_LOGIN_FAILED:
            return { ...state };

        default:
            return state;
    }
}

export default loginReducer;
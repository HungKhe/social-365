import api from './api';
import * as userTypes from '../modules/User/redux/types';
export default {
    apiUserLogin: (data: userTypes.userLogin) => {
        return api.post('/user', data);
    },
    apiUserRegister: (data: userTypes.userRegister) => {
        return api.put('/user', data);
    }
}
import api from './api';
import * as userTypes from '../modules/Login/redux/types';
export default {
    apiUserLogin: (data: userTypes.userLogin) => {
        return api.post('/user', data);
    }
}
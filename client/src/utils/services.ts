import api from './api';
import * as userTypes from '../modules/User/redux/types';
import * as postTypes from '../modules/Community/redux/types';
export default {
    apiUserLogin: (data: userTypes.userLogin) => {
        return api.post('/user', data);
    },
    apiUserRegister: (data: userTypes.userRegister) => {
        return api.put('/user', data);
    },
    apiFetchListPost: (params: postTypes.fetchPost) => {
        return api.get('/community/post', { params });
    }
}
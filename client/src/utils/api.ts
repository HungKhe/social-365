import axios, { AxiosResponse } from 'axios';
import history from '../utils/history';
import { toastShowMessage } from '../utils/toastify'
const api = axios.create({
    baseURL: `http://localhost:7000/api/v1`,
    responseType: "json",
    timeout: 10000
})
api.interceptors.response.use(response => {
    // const access_token: string = localStorage.getItem('userToken') || '';
    // console.log('access_token: ', access_token)
    // if(access_token)
    //     response.headers.Authorization = `Bearer ${access_token}`;
    // console.log('response: ', response)
    return response;
}, error => {
    // if(error.message === "Network Error" && !error.response)
    //     toastShowMessage('error', 'Network error, please try again!');
    // else {
    //     const { status } = error.response;
    //     if(status === 401){
    //         localStorage.clear();
    //         history.push('/login');
    //     } else if (status === 403){
    //         toastShowMessage('warn', 'No Authorization!!!');
    //     } else if (status === 404){
    //         toastShowMessage('error', '404!!! Request not found!');
    //     } else if (status === 500){
    //         toastShowMessage('error', 'Server error - please try again!!!');
    //     } else {
    //         toastShowMessage('error', 'Something error - please try again!!!');
    //     }
    // }
    console.log('error.response: ', error.response)
    if(error.response && error.response.status === 401){
        localStorage.clear();
        history.push('/logout');
    }
    return Promise.reject(error);
})

const access_token: string = localStorage.getItem('userToken') || '';
if(access_token)
    api.defaults.headers.common['Authorization'] = `Bearer ${access_token}` 

export default api;
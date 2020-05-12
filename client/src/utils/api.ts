import axios from 'axios';
const api = axios.create({
    baseURL: `http://localhost:8888/api/v1`,
    responseType: "json",
    timeout: 10000
})

const access_token: string = localStorage.getItem('userToken') || '';
if(access_token)
    api.defaults.headers.common['Authorization'] = `Bearer ${access_token}` 

export default api;
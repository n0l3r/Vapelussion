import axios from 'axios';

const apiManager = axios.create({
    baseURL: 'http://172.20.10.2:3000',
    responseType: 'json'
});

export default apiManager;
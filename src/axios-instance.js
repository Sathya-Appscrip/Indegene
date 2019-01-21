import axios from 'axios';

const instance = axios.create({
    baseURL: 'localhost:3000/'       // creating a axios instance for connecting APIs
});

export default instance;  
import axios from 'axios';
import {authInterceptor} from './interceptors';

export const http = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

export const authHttp = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: { 'Content-Type': 'application/json' },
});

authHttp.interceptors.request.use(authInterceptor, async (error) => {
    await Promise.reject(error);
});

import { AxiosRequestConfig } from 'axios';
import {ACCESS_TOKEN} from '../const/localstorage-names';

export const authInterceptor = (config: AxiosRequestConfig): AxiosRequestConfig => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    const resultConfig = config;
    if (token && resultConfig.headers) resultConfig.headers.Authorization = `${token}`;
    return resultConfig;
};

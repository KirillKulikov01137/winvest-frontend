import {http} from './instances';
import {AxiosResponse} from 'axios';
import {StockPreview} from './types/StockPreview';
import {StockInterface} from './types/StockInterface';
import {PredictResponse} from './types/responses';

interface GetStocks {
    stocks: StockPreview[]
}

export interface RegisterBody {
    login: string
    password: string
}

export interface LoginBody {
    login: string
    password: string
}

interface LoginResponse {
    token: string
}


export const getStocks = (): Promise<AxiosResponse<GetStocks>> => http.get('stocks');
export const getStock = (id: number): Promise<AxiosResponse<StockInterface>> => http.get(`stocks/${id}?h=1`);
export const getPredict = (id: number): Promise<AxiosResponse<PredictResponse>> => http.get(`predict/${id}`);
export const register = (body: RegisterBody): Promise<AxiosResponse<unknown>> => http.post('register', body);
export const login = (body: LoginBody): Promise<AxiosResponse<LoginResponse>> => http.post('login', body);

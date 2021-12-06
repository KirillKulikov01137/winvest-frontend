import {authHttp, http} from './instances';
import {AxiosResponse} from 'axios';
import {StockPreview} from './types/StockPreview';
import {HistoryItemInterface, StockInterface} from './types/StockInterface';
import {HistoryResponse, PortfolioResponse, PredictResponse} from './types/responses';

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

export interface StockHandler {
    quantity: string
}


export const getStocks = (): Promise<AxiosResponse<GetStocks>> => http.get('stocks');
export const getHistory = (id: number): Promise<AxiosResponse<HistoryResponse>> => http.get(`history/stocks/${id}`);
export const getPredict = (id: number): Promise<AxiosResponse<PredictResponse>> => http.get(`predict/${id}`);
export const register = (body: RegisterBody): Promise<AxiosResponse<unknown>> => http.post('register', body);
export const login = (body: LoginBody): Promise<AxiosResponse<LoginResponse>> => http.post('login', body);

export const getStock = (id: number): Promise<AxiosResponse<StockInterface>> => authHttp.get(`stocks/${id}`);
export const getPortfolio = (): Promise<AxiosResponse<PortfolioResponse>> => authHttp.get('portfolio')
export const addStockReq = (id: number, body: StockHandler): Promise<AxiosResponse<unknown>> => authHttp.post(`stocks/add/${id}`, body)
export const removeStockReq = (id: number): Promise<AxiosResponse<unknown>> => authHttp.post(`stocks/remove/${id}`)

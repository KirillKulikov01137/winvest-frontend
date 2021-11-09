import {http} from './instances';
import {AxiosResponse} from 'axios';
import {StockPreview} from './types/StockPreview';
import {StockInterface} from './types/StockInterface';

interface GetStocks {
    stocks: StockPreview[]
}

export const getStocks = (): Promise<AxiosResponse<GetStocks>> => http.get('stocks');
export const getStock = (id: number): Promise<AxiosResponse<StockInterface>> => http.get(`stocks/${id}`);

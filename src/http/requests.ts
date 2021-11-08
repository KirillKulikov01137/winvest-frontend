import {http} from './instances';
import {AxiosResponse} from 'axios';
import {StockPreview} from '../types/StockPreview';

interface GetStocks {
    stocks: StockPreview[]
}

export const getStocks = (): Promise<AxiosResponse<GetStocks>> => http.get('stocks');

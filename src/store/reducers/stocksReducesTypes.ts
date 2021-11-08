import {StockPreview} from '../../types/StockPreview';

export interface StocksState {
    stocks: StockPreview[]
    loading: boolean
    error: null | string
}

export enum StocksActionTypes {
    FETCH_STOCKS = 'FETCH_STOCKS',
    FETCH_STOCKS_SUCCESS = 'FETCH_STOCKS_SUCCESS',
    FETCH_STOCKS_ERROR = 'FETCH_STOCKS_ERROR'
}

interface FETCH_STOCKS_ACTION {
    type: StocksActionTypes.FETCH_STOCKS
}

interface FETCH_STOCKS_SUCCESS_ACTION {
    type: StocksActionTypes.FETCH_STOCKS_SUCCESS
    payload: StockPreview[]
}

interface FETCH_STOCKS_ERROR_ACTION {
    type: StocksActionTypes.FETCH_STOCKS_ERROR
    payload: string
}

export type StocksAction = FETCH_STOCKS_ACTION | FETCH_STOCKS_SUCCESS_ACTION | FETCH_STOCKS_ERROR_ACTION

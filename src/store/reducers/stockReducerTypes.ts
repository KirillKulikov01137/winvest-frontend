import {StockInterface} from '../../http/types/StockInterface';

export interface StockState {
    stock: StockInterface
    loading: boolean
    error: null | string
}

export enum StockActionTypes {
    FETCH_STOCK = 'FETCH_STOCK',
    FETCH_STOCK_SUCCESS = 'FETCH_STOCK_SUCCESS',
    FETCH_STOCK_ERROR = 'FETCH_STOCK_ERROR'
}

interface FETCH_STOCK_ACTION {
    type: StockActionTypes.FETCH_STOCK
}

interface FETCH_STOCK_SUCCESS_ACTION {
    type: StockActionTypes.FETCH_STOCK_SUCCESS
    payload: StockInterface
}

interface FETCH_STOCK_ERROR_ACTION {
    type: StockActionTypes.FETCH_STOCK_ERROR
    payload: string
}

export type StockAction = FETCH_STOCK_ACTION | FETCH_STOCK_SUCCESS_ACTION | FETCH_STOCK_ERROR_ACTION

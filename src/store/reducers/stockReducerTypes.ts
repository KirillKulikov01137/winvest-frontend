import {StockInterface} from '../../http/types/StockInterface';
import {PredictInterface} from '../../http/types/responses';

export interface StockState {
    stock: StockInterface
    predict: PredictInterface[]
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
    stock: StockInterface
    predict: PredictInterface[]
}

interface FETCH_STOCK_ERROR_ACTION {
    type: StockActionTypes.FETCH_STOCK_ERROR
    payload: string
}

export type StockAction = FETCH_STOCK_ACTION | FETCH_STOCK_SUCCESS_ACTION | FETCH_STOCK_ERROR_ACTION

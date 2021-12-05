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
    FETCH_STOCK_ERROR = 'FETCH_STOCK_ERROR',
    ADD_STOCK = 'ADD_STOCK',
    ADD_STOCK_SUCCESS = 'ADD_STOCK_SUCCESS',
    ADD_STOCK_ERROR = 'ADD_STOCK_ERROR',
    REMOVE_STOCK_SUCCESS = 'REMOVE_STOCK_SUCCESS'
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

interface ADD_STOCK_ACTION {
    type: StockActionTypes.ADD_STOCK
}

interface ADD_STOCK_SUCCESS_ACTION {
    type: StockActionTypes.ADD_STOCK_SUCCESS
    id: number
}

interface ADD_STOCK_ERROR_ACTION {
    type: StockActionTypes.ADD_STOCK_ERROR
    payload: string
}

interface REMOVE_STOCK_SUCCESS_ACTION {
    type: StockActionTypes.REMOVE_STOCK_SUCCESS
    id: number
}

export type StockAction = FETCH_STOCK_ACTION | FETCH_STOCK_SUCCESS_ACTION | FETCH_STOCK_ERROR_ACTION
    | ADD_STOCK_ACTION
    | ADD_STOCK_SUCCESS_ACTION
    | ADD_STOCK_ERROR_ACTION
    | REMOVE_STOCK_SUCCESS_ACTION

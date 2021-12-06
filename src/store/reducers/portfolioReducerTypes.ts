import {StockPreview} from '../../http/types/StockPreview';

export interface Portfolio {
    stocks: StockPreview[]
    total_value: number
    loading: boolean
    error: null | string
}

export enum PortfolioActionTypes {
    FETCH_PORTFOLIO = 'FETCH_PORTFOLIO',
    FETCH_PORTFOLIO_SUCCESS = 'FETCH_PORTFOLIO_SUCCESS',
    FETCH_PORTFOLIO_ERROR = 'FETCH_PORTFOLIO_ERROR',
}

interface FETCH_PORTFOLIO_ACTION {
    type: PortfolioActionTypes.FETCH_PORTFOLIO
}

interface FETCH_PORTFOLIO_SUCCESS_ACTION {
    type: PortfolioActionTypes.FETCH_PORTFOLIO_SUCCESS
    stocks: StockPreview[]
    total_value: number
}

interface FETCH_PORTFOLIO_ERROR_ACTION {
    type: PortfolioActionTypes.FETCH_PORTFOLIO_ERROR
    payload: string
}

export type PortfolioAction = FETCH_PORTFOLIO_ACTION | FETCH_PORTFOLIO_SUCCESS_ACTION | FETCH_PORTFOLIO_ERROR_ACTION

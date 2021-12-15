import {HistoryItemInterface} from './StockInterface';
import {StockPreview} from './StockPreview';

export interface PredictResponse {
    methods: PredictInterface[]
}

export interface PredictInterface {
    name: string
    type: string
    data: number[]
    error: number
}

export interface HistoryResponse {
    ticker: string
    history: HistoryItemInterface[]
}

export interface PortfolioResponse {
    stocks: StockPreview[]
    total_value: number
    total_profit: number
}

import {HistoryItemInterface} from './StockInterface';

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

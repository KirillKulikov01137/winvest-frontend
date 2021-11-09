import {HistoryItemInterface} from '../../http/types/StockInterface';

export interface GraphicDataItemInterface {
    date: string
    value: number | null
}

export const convertData = (history: HistoryItemInterface[]): GraphicDataItemInterface[] => {
    return history.map((item) => {
        return {date: item[0], value: item[1]}
    })
}

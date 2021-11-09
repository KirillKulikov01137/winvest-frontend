export type HistoryItemInterface = [string, number | null]

export interface StockInterface {
    id: number
    fullname: string
    shortname: string
    currency: string
    price: number
    change: number
    history: HistoryItemInterface[]
    owned: boolean
    quantity: number
}

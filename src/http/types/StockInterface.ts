export interface StockInterface {
    id: number
    fullname:string
    shortname: string
    currency: string
    price: number
    change: number
    history: [string, number | null][]
    owned: boolean
    quantity: number
}

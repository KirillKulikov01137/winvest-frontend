export interface StockProps {
    id: number
    fullname: string
    shortname: string
    currency: string
    price: number | null
    change: number
    owned: boolean
    quantity: number
}

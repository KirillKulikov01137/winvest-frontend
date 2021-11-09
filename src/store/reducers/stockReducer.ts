import {StockInterface} from '../../http/types/StockInterface';
import {StockAction, StockActionTypes, StockState} from './stockReducerTypes';

const emptyStock: StockInterface = {
    id: 0,
    fullname: '',
    shortname: '',
    currency: '',
    price: 0,
    change: 0,
    history: [],
    owned: false,
    quantity: 0,
}

const initialState: StockState = {
    stock: emptyStock,
    loading: false,
    error: null
}

export default function stockReducer(
    state = initialState,
    action: StockAction
): StockState {
    switch (action.type) {
        case StockActionTypes.FETCH_STOCK:
            return {loading: true, error: null, stock: emptyStock}
        case StockActionTypes.FETCH_STOCK_SUCCESS:
            return {loading: false, error: null, stock: action.payload}
        case StockActionTypes.FETCH_STOCK_ERROR:
            return {loading: false, error: action.payload, stock: emptyStock}
        default:
            return state;
    }
}

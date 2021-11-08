import {StocksAction, StocksActionTypes, StocksState} from './stocksReducesTypes';

const initialState: StocksState = {
    stocks: [],
    loading: false,
    error: null
}

export default function userReducer(
    state = initialState,
    action: StocksAction
): StocksState {
    switch (action.type) {
        case StocksActionTypes.FETCH_STOCKS:
            return {loading: true, error: null, stocks: []}
        case StocksActionTypes.FETCH_STOCKS_SUCCESS:
            return {loading: false, error: null, stocks: action.payload}
        case StocksActionTypes.FETCH_STOCKS_ERROR:
            return {loading: false, error: action.payload, stocks: []}
        default:
            return state;
    }
}

import {StocksAction, StocksActionTypes} from '../reducers/stocksReducesTypes';
import {Dispatch} from 'redux';
import {getStocks} from '../../http/requests';


export const fetchStocks = () => {
    return async (dispatch: Dispatch<StocksAction>) => {
        try {
            dispatch({type: StocksActionTypes.FETCH_STOCKS})
            const response = await getStocks()
            dispatch({type: StocksActionTypes.FETCH_STOCKS_SUCCESS, payload: response.data.stocks})
        } catch (e) {
            dispatch({type: StocksActionTypes.FETCH_STOCKS_ERROR, payload: 'Error in fetch stocks'})
        }
    }
}

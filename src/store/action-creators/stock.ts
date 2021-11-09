import {Dispatch} from 'redux';
import {StockAction, StockActionTypes} from '../reducers/stockReducerTypes';
import {getStock} from '../../http/requests';
import {stock} from '../stock';

export const fetchStock = (id: number) => {
    return async (dispatch: Dispatch<StockAction>) => {
        try {
            dispatch({type:StockActionTypes.FETCH_STOCK})
            // const response = await getStock(id);
            // dispatch({type:StockActionTypes.FETCH_STOCK_SUCCESS, payload: response.data.stock})
            dispatch({type:StockActionTypes.FETCH_STOCK_SUCCESS, payload: stock})

        } catch (e) {
            dispatch({type: StockActionTypes.FETCH_STOCK_ERROR, payload: 'Ошибка при загрузке данных акции'})
        }
    }
}

import {Dispatch} from 'redux';
import {StockAction, StockActionTypes} from '../reducers/stockReducerTypes';
import {getPredict, getStock} from '../../http/requests';

export const fetchStock = (id: number) => {
    return async (dispatch: Dispatch<StockAction>) => {
        try {
            dispatch({type:StockActionTypes.FETCH_STOCK})
            const stockData = await getStock(id);
            const predictData = await getPredict(id);
            dispatch({type:StockActionTypes.FETCH_STOCK_SUCCESS, stock: stockData.data, predict: predictData.data.methods})
        } catch (e) {

            dispatch({type: StockActionTypes.FETCH_STOCK_ERROR, payload: 'Ошибка при загрузке данных акции'})
        }
    }
}

import {Dispatch} from 'redux';
import {StockAction, StockActionTypes} from '../reducers/stockReducerTypes';
import {addStockReq, getHistory, getPredict, getStock, removeStockReq, StockHandler} from '../../http/requests';

export const fetchStock = (id: number) => {
    return async (dispatch: Dispatch<StockAction>) => {
        try {
            dispatch({type: StockActionTypes.FETCH_STOCK})
            const stockData = await getStock(id);
            const historyData = await getHistory(id);
            const predictData = await getPredict(id);

            const fetchedStock = stockData.data;
            fetchedStock.history = historyData.data.history;
            dispatch({
                type: StockActionTypes.FETCH_STOCK_SUCCESS,
                stock: fetchedStock,
                predict: predictData.data.methods
            })
        } catch (e) {
            dispatch({type: StockActionTypes.FETCH_STOCK_ERROR, payload: 'Ошибка при загрузке данных акции'})
        }
    }
}

export const addStock = (id: number, body: StockHandler) => {
    return async (dispatch: Dispatch<StockAction>) => {
        try {
            dispatch({type: StockActionTypes.ADD_STOCK})
            const response = await addStockReq(id, body);
            // console.log(response)
            dispatch({type: StockActionTypes.ADD_STOCK_SUCCESS, id, quantity: parseInt(body.quantity)})
        } catch (e) {
            dispatch({type: StockActionTypes.ADD_STOCK_ERROR, payload: 'Ошибка при добавлении акции'})
        }
    }
}

export const removeStock = (id: number) => {
    return async (dispatch: Dispatch<StockAction>) => {
        try {
            const response = await removeStockReq(id);
            console.log(response)
            dispatch({type: StockActionTypes.REMOVE_STOCK_SUCCESS, id})
        } catch (e) {
            console.log(e)
        }
    }
}

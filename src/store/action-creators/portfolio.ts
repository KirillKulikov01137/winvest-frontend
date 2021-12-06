import {Dispatch} from 'redux';
import {PortfolioAction, PortfolioActionTypes} from '../reducers/portfolioReducerTypes';
import {getPortfolio} from '../../http/requests';

export const fetchPortfolio = () => {
    return async (dispatch: Dispatch<PortfolioAction>) => {
        try {
            dispatch({type:PortfolioActionTypes.FETCH_PORTFOLIO})
            const response = await getPortfolio();
            // console.log(response)
            dispatch({type:PortfolioActionTypes.FETCH_PORTFOLIO_SUCCESS, payload: response.data.stocks})
        } catch (e) {

            dispatch({type: PortfolioActionTypes.FETCH_PORTFOLIO_ERROR, payload: 'Ошибка при загрузке порфтеля'})
        }
    }
}

import {Portfolio, PortfolioAction, PortfolioActionTypes} from './portfolioReducerTypes';

const initialState: Portfolio = {
    stocks: [],
    loading: false,
    error: null
}

export default function portfolioReducer(
    state = initialState,
    action: PortfolioAction
) {
    switch (action.type) {
        case PortfolioActionTypes.FETCH_PORTFOLIO:
            return {...state, loading: true, error: null};
        case PortfolioActionTypes.FETCH_PORTFOLIO_SUCCESS:
            return {...state, loading: false, error: null, stocks: action.payload};
        case PortfolioActionTypes.FETCH_PORTFOLIO_ERROR:
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
}

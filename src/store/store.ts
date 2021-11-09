import {applyMiddleware, combineReducers, createStore} from 'redux';
import userReducer from './reducers/userReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import stocksReducer from './reducers/stocksReducer';
import stockReducer from './reducers/stockReducer';

const rootReducer = combineReducers({
    user: userReducer,
    stocks: stocksReducer,
    stock: stockReducer
})

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

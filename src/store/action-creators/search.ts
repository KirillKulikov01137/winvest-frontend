import {Dispatch} from 'redux';
import {SearchAction, SearchActionTypes} from '../reducers/SearchReducerTypes';

export const makeSearch = (term: string) => {
    return (dispatch: Dispatch<SearchAction>) => {
        dispatch({type: SearchActionTypes.SET_SEARCH, payload: term})
    }
}

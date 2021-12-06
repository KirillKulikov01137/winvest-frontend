import {SearchAction, SearchActionTypes, SearchState} from './SearchReducerTypes';

const initialState: SearchState = {
    search: ''
}

export default function searchReducer(
    state = initialState,
    action: SearchAction
): SearchState {
    switch (action.type) {
        case SearchActionTypes.SET_SEARCH:
            return {search: action.payload}
        default:
            return state;
    }
}

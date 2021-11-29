import {UserAction, UserActionTypes, UserState} from './userReducerTypes';

const initialState: UserState = {
    isAuth: false,
    login: '',
    loading: false,
    error: null
}

export default function userReducer(
    state = initialState,
    action: UserAction
) {
    switch (action.type) {
        case UserActionTypes.REGISTER_USER:
            return {...state, loading: true, error: null};
        case UserActionTypes.REGISTER_USER_SUCCESS:
            return {...state, loading: false, error: null};
        case UserActionTypes.REGISTER_USER_ERROR:
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
}

import {Login, LoginAction, LoginActionTypes} from './loginReducerTypes';

const initialState: Login = {
    isAuth: false,
    login: '',
    loading: false,
    error: null
}

export default function loginReducer(
    state = initialState,
    action: LoginAction
) {
    switch (action.type) {
        case LoginActionTypes.LOGIN:
            return {...state, loading: true, error: null};
        case LoginActionTypes.LOGIN_SUCCESS:
            return {...state, loading: false, error: null, login: action.payload, isAuth: true};
        case LoginActionTypes.LOGIN_ERROR:
            return {...state, loading: false, error: action.payload};
        case LoginActionTypes.LOGOUT:
            return {...state, isAuth: false, login: ''}
        default:
            return state;
    }
}

export interface Login {
    login: string
    isAuth: boolean
    loading: boolean
    error: null | string
}

export enum LoginActionTypes {
    LOGIN = 'LOGIN',
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGIN_ERROR = 'LOGIN_ERROR',
    LOGOUT = 'LOGOUT'
}

interface LOGIN_ACTION {
    type: LoginActionTypes.LOGIN
}

interface LOGOUT_ACTION {
    type: LoginActionTypes.LOGOUT
}

interface LOGIN_SUCCESS_ACTION {
    type: LoginActionTypes.LOGIN_SUCCESS
    payload: string
}

interface LOGIN_ERROR_ACTION {
    type: LoginActionTypes.LOGIN_ERROR
    payload: string
}

export type LoginAction = LOGIN_ACTION | LOGIN_SUCCESS_ACTION | LOGIN_ERROR_ACTION | LOGOUT_ACTION

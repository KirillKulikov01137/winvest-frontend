export interface UserState {
    login: string
    isAuth: boolean
    loading: boolean
    error: null | string
}

export enum UserActionTypes {
    REGISTER_USER = 'REGISTER_USER',
    REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS',
    REGISTER_USER_ERROR = 'REGISTER_USER_ERROR'
}

interface REGISTER_USER_ACTION {
    type: UserActionTypes.REGISTER_USER
}

interface REGISTER_USER_SUCCESS_ACTION {
    type: UserActionTypes.REGISTER_USER_SUCCESS
}

interface REGISTER_USER_ERROR_ACTION {
    type: UserActionTypes.REGISTER_USER_ERROR
    payload: string
}

export type UserAction = REGISTER_USER_ACTION | REGISTER_USER_SUCCESS_ACTION | REGISTER_USER_ERROR_ACTION

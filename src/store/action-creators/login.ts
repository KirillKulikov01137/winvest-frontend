import {Dispatch} from 'redux';
import {login, LoginBody} from '../../http/requests';
import {LoginAction, LoginActionTypes} from '../reducers/loginReducerTypes';
import {ACCESS_TOKEN} from '../../const/localstorage-names';

export const loginUser = (body: LoginBody) => {
  return async (dispatch: Dispatch<LoginAction>) => {
        try {
            dispatch({type: LoginActionTypes.LOGIN})
            const response = await login(body);
            localStorage.setItem(ACCESS_TOKEN ,response.data.token)
            dispatch({type: LoginActionTypes.LOGIN_SUCCESS, payload: body.login});
        } catch
            (e) {
            dispatch({type: LoginActionTypes.LOGIN_ERROR, payload: 'Ошибка при авторизации'})
        }
    }
}

export const logoutUser = () => {
    return (dispatch: Dispatch<LoginAction>) => {
        dispatch({type:LoginActionTypes.LOGOUT})
        localStorage.removeItem(ACCESS_TOKEN)
    }
}

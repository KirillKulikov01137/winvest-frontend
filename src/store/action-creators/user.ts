import {Dispatch} from 'redux';
import {register, LoginBody} from '../../http/requests';
import {UserAction, UserActionTypes} from '../reducers/userReducerTypes';

export const registerUser = (body: LoginBody) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.REGISTER_USER})
            await register(body);
            dispatch({type: UserActionTypes.REGISTER_USER_SUCCESS});
        } catch
            (e) {
            dispatch({type: UserActionTypes.REGISTER_USER_ERROR, payload: 'Ошибка при регистрации пользователя'})
        }
    }
}

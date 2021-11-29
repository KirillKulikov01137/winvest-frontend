import {Dispatch} from 'redux';
import {register, RegisterBody} from '../../http/requests';
import {UserAction, UserActionTypes} from '../reducers/userReducerTypes';

export const registerUser = (body: RegisterBody) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.REGISTER_USER})
            const response = await register(body);
            console.log(response)
            dispatch({type: UserActionTypes.REGISTER_USER_SUCCESS});
        } catch
            (e) {
            dispatch({type: UserActionTypes.REGISTER_USER_ERROR, payload: 'Ошибка при регистрации пользователя'})
        }
    }
}

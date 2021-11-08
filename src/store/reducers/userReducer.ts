import {AnyAction} from 'redux'

interface UserState {
    isAuth: boolean
}

const initialState: UserState = {
    isAuth: false
}

export default function userReducer(
    state = initialState,
    action: AnyAction
) {
    switch (action.type) {
        default:
            return state;
    }
}

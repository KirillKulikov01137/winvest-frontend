import React, {FC, useState} from 'react';
import Button from '../button/Button';
import {NavLink} from 'react-router-dom';
import {REGISTER_ROUTE} from '../../router/paths';
import AuthForm from '../auth-form/AuthForm';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {useActions} from '../../hooks/useActions';

const LoginForm: FC = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const {error, loading} = useTypedSelector(state => state.login)
    const {loginUser} = useActions()

    const onLoginClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        // if (login.length < 5) return
        // if (password.length < 6) return
        // if (password != password2) {
        //     return
        // }
        loginUser({login, password})
    }

    if (error) return <h1 className="technical-message">{error}</h1>

    return (
        <div>
            <AuthForm title="Вход">
                <div style={{marginTop: '3rem'}}>
                    <label>
                        <span className="label">Имя пользователя</span>
                        <input type="text" className="field" value={login} onChange={(e) => setLogin(e.target.value)}/>
                    </label>
                </div>
                <div style={{marginTop: '1.5rem'}}>
                    <label>
                        <span className="label">Пароль</span>
                        <input type="password" className="field" value={password}
                               onChange={(e) => setPassword(e.target.value)}/>
                    </label>
                </div>
                <div style={{marginTop: '3rem'}}>
                    {loading
                        ? <Button title="Вход..." onClick={() => {
                            return
                        }}/>
                        : <Button title="Войти" onClick={(e) => onLoginClick(e)}/>}
                </div>
                <div style={{marginTop: '3rem', textAlign: 'center'}}>
                    <NavLink to={REGISTER_ROUTE}><span className="link">
                    Нет аккаунта? Зарегистрируйтесь!
                </span></NavLink>
                </div>
            </AuthForm>
        </div>
    );
};

export default LoginForm;

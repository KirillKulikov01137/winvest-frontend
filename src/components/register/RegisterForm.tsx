import React, {FC, useState} from 'react';
import Button from '../button/Button';
import {NavLink} from 'react-router-dom';
import {LOGIN_ROUTE} from '../../router/paths';
import AuthForm from '../auth-form/AuthForm';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {useActions} from '../../hooks/useActions';

const RegisterForm: FC = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    const {error, loading} = useTypedSelector(state => state.user)
    const {registerUser} = useActions()

    const onRegisterClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        // if (login.length < 5) return
        // if (password.length < 6) return
        // if (password != password2) {
        //     return
        // }
        registerUser({login, password})
    }

    if (error) return <h1 className="technical-message">{error}</h1>

    return (
        <div>
            <AuthForm title="Регистрация">
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
                <div style={{marginTop: '1.5rem'}}>
                    <label>
                        <span className="label">Подтвердите пароль</span>
                        <input type="password" className="field" value={password2}
                               onChange={(e) => setPassword2(e.target.value)}/>
                    </label>
                </div>
                <div style={{marginTop: '3rem'}}>
                    {loading
                        ? <Button title="Загрузка..." onClick={() => {
                            return
                        }}/>
                        : <Button title="Зарегистрироваться" onClick={(e) => onRegisterClick(e)}/>}
                </div>
                <div style={{marginTop: '3rem', textAlign: 'center'}}>
                    <NavLink to={LOGIN_ROUTE}><span className="link">
                    Уже есть аккаунт? Войдите!
                </span></NavLink>
                </div>
            </AuthForm>
        </div>
    );
};

export default RegisterForm;

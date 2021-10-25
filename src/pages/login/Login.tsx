import React, {FC} from 'react';
import Container from "../../components/container/Container";
import AuthForm from "../../components/auth-form/AuthForm";
import Button from "../../components/button/Button";
import {REGISTER_ROUTE} from "../../router/paths";
import { NavLink } from 'react-router-dom';

const Login: FC = () => {
    return (
        <Container>
            <AuthForm title="Вход">
                <div style={{marginTop: '3rem'}}>
                    <label>
                        <span className="label">Имя пользователя</span>
                        <input type="text" className="field" />
                    </label>
                </div>
                <div style={{marginTop: '1.5rem'}}>
                    <label>
                        <span className="label">Пароль</span>
                        <input type="password" className="field" />
                    </label>
                </div>
                <div style={{marginTop: '3rem'}}>
                    <Button title="Войти"/>
                </div>
                <div style={{marginTop: '3rem', textAlign: 'center'}}>
                    <NavLink to={REGISTER_ROUTE}><span className="link">
                    Нет аккаунта? Зарегистрируйтесь!
                </span></NavLink>
                </div>
            </AuthForm>
        </Container>
    );
};

export default Login;

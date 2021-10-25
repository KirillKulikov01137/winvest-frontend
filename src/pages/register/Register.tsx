import React, {FC} from 'react';
import AuthForm from "../../components/auth-form/AuthForm";
import Button from "../../components/button/Button";
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE} from "../../router/paths";
import Container from "../../components/container/Container";

const Register: FC = () => {
    return (
        <Container>
            <AuthForm title="Регистрация">
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
                <div style={{marginTop: '1.5rem'}}>
                    <label>
                        <span className="label">Подтвердите пароль</span>
                        <input type="password" className="field" />
                    </label>
                </div>
                <div style={{marginTop: '3rem'}}>
                    <Button title="Зарегистрироваться"/>
                </div>
                <div style={{marginTop: '3rem', textAlign: 'center'}}>
                    <NavLink to={LOGIN_ROUTE}><span className="link">
                    Уже есть аккаунт? Войдите!
                </span></NavLink>
                </div>
            </AuthForm>
        </Container>
    );
};

export default Register;

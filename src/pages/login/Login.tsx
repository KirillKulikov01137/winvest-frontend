import React, {FC} from 'react';
import Container from "../../components/container/Container";
import LoginForm from '../../components/login-form/LoginForm';

const Login: FC = () => {
    return (
        <Container>
            <LoginForm />
        </Container>
    );
};

export default Login;

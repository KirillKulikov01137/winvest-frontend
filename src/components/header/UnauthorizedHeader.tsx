import React, {FC} from 'react';
import {LOGIN_ROUTE, REGISTER_ROUTE} from "../../router/paths";
import {NavLink} from 'react-router-dom';
import {StyledUnauthorizedHeader} from "./StyledUnauthorizedHeader";

const UnauthorizedHeader: FC = () => {
    return (
        <StyledUnauthorizedHeader>
            <nav>
                <NavLink to={LOGIN_ROUTE}><span>Вход</span></NavLink>
                <NavLink to={REGISTER_ROUTE}><span>Регистрация</span></NavLink>
            </nav>
        </StyledUnauthorizedHeader>
    );
};

export default UnauthorizedHeader;

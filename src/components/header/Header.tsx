import React, {FC} from 'react';
import AuthorizedHeader from "./AuthorizedHeader";
import UnauthorizedHeader from "./UnauthorizedHeader";
import {StyledHeader} from "./StyledHeader";
import {NavLink} from "react-router-dom";
import {HOME_ROUTE} from "../../router/paths";
import Container from "../container/Container";

const Header: FC = () => {
    const isAuth = false;
    return (
        <StyledHeader>
            <Container>
                <div className="headerBody">
                    <NavLink to={HOME_ROUTE}>
                        <h1 className="logo">WINVEST</h1>
                    </NavLink>
                    <div className="search">
                        <input type="text" placeholder="Поиск" />
                    </div>
                    {
                        isAuth ? <AuthorizedHeader /> : <UnauthorizedHeader />
                    }
                </div>
            </Container>
        </StyledHeader>
    );
};

export default Header;

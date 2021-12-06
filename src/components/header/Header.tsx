import React, {FC} from 'react';
import AuthorizedHeader from "./AuthorizedHeader";
import UnauthorizedHeader from "./UnauthorizedHeader";
import {StyledHeader} from "./StyledHeader";
import {NavLink} from "react-router-dom";
import {HOME_ROUTE} from "../../router/paths";
import Container from "../container/Container";
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {useActions} from '../../hooks/useActions';

const Header: FC = () => {
    const {isAuth} = useTypedSelector(state => state.login);
    const {search} = useTypedSelector(state => state.search)
    const {makeSearch} = useActions()

    return (
        <StyledHeader>
            <Container>
                <div className="headerBody">
                    <NavLink to={HOME_ROUTE}>
                        <h1 className="logo">WINVEST</h1>
                    </NavLink>
                    <div className="search">
                        <input type="text" placeholder="Поиск" value={search}
                               onChange={(e) => makeSearch(e.target.value)}/>
                    </div>
                    {
                        isAuth ? <AuthorizedHeader/> : <UnauthorizedHeader/>
                    }
                </div>
            </Container>
        </StyledHeader>
    );
};

export default Header;

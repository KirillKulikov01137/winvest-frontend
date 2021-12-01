import React from 'react';
import {NavLink} from 'react-router-dom';
import {HOME_ROUTE, PORTFOLIO_ROUTE} from '../../router/paths';
import {StyledUnauthorizedHeader} from './StyledUnauthorizedHeader';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {useActions} from '../../hooks/useActions';

const AuthorizedHeader = () => {
    const {login} = useTypedSelector(state => state.login)
    const {logoutUser} = useActions()

    return (
        <StyledUnauthorizedHeader>
            <nav>
                <NavLink to={PORTFOLIO_ROUTE}><span>{login}</span></NavLink>
                <NavLink to={HOME_ROUTE}><span onClick={()=> logoutUser()}>Выйти</span></NavLink>
            </nav>
        </StyledUnauthorizedHeader>
    );
};

export default AuthorizedHeader;

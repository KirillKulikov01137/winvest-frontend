import React, {FC} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {authorizedRoutes, publicRoutes, unauthorizedRoutes} from "./routes";
import {HOME_ROUTE} from "./paths";

const AppRouter: FC = () => {
    const isAuth = false;
    return (
        <Switch>
            {
                publicRoutes.map((route) => <Route key={route.path} path={route.path} component={route.component}
                                                   exact/>)
            }
            {
                isAuth
                    ? authorizedRoutes.map((route) => <Route key={route.path} path={route.path}
                                                             component={route.component} exact/>)
                    : unauthorizedRoutes.map((route) => <Route key={route.path} path={route.path}
                                                               component={route.component} exact/>)
            }
            <Redirect to={HOME_ROUTE}/>
        </Switch>
    );
};

export default AppRouter;

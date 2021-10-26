import {HOME_ROUTE, LOGIN_ROUTE, PORTFOLIO_ROUTE, REGISTER_ROUTE, STOCK_ROUTE} from "./paths";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Home from "../pages/home/Home";
import StockPage from "../pages/stock-page/StockPage";
import Portfolio from "../pages/portfolio/Portfolio";

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        component: Home
    },
    {
        path: STOCK_ROUTE + ':id',
        component: StockPage
    }
]


export const unauthorizedRoutes = [
    {
        path: LOGIN_ROUTE,
        component: Login
    },
    {
        path: REGISTER_ROUTE,
        component: Register
    }
]

export const authorizedRoutes = [
    {
        path: PORTFOLIO_ROUTE,
        component: Portfolio
    }
]

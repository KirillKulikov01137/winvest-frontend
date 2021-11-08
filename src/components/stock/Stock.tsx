import React, {FC} from 'react';
import {StockProps} from "./StockProps";
import {StyledStock} from "./StyledStock";
import {NavLink} from 'react-router-dom';
import {STOCK_ROUTE} from "../../router/paths";

const Stock: FC<StockProps> = ({id, name, price, currency}) => {
    return (
        <StyledStock>
            <NavLink to={`${STOCK_ROUTE}${id}`} className="stockLink">
                <div className="stockLinkContainer">
                    <span className="linkDescriptionText">{name}</span>
                    <span className="linkDescriptionText">{price + ' ' + currency}</span>
                </div>
            </NavLink>
        </StyledStock>
    );
};

export default Stock;

import React, {FC} from 'react';
import {StockProps} from "./StockProps";
import {StyledStock} from "./StyledStock";
import {NavLink} from 'react-router-dom';
import {STOCK_ROUTE} from "../../router/paths";
import {convertNumber} from '../../utils';

const Stock: FC<StockProps> = ({id, fullname, price, currency, shortname, change}) => {
    return (
        <StyledStock>
            <NavLink to={`${STOCK_ROUTE}${id}`} className="stockLink">
                <div className="stockLinkContainer">
                    <div><span className="linkDescriptionText">{shortname + ' ' + fullname}</span></div>
                    <div><span className="linkDescriptionText">{price ? convertNumber(price) + currency + ' | ' + convertNumber(change) : '-'}</span>
                    </div>
                </div>
            </NavLink>
        </StyledStock>
    );
};

export default Stock;

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
                    <div className="nameText"><span style={{display: 'block'}} className="linkDescriptionText">{shortname + ' ' + fullname}</span></div>
                    <div>
                        <span className="linkDescriptionText"
                              style={{marginRight: '1rem'}}>
                            {price ? convertNumber(price) : '-'}
                            {price && <>&#8381;</>}
                        </span>
                        {change >= 0
                            ? <span className="linkDescriptionGreen">{price && '+' + convertNumber(change) + '%'}</span>
                            : <span
                                className="linkDescriptionRed">{price && '-' + convertNumber(Math.abs(change)) + '%'}</span>}
                    </div>
                </div>
            </NavLink>
        </StyledStock>
    );
};

export default Stock;

import React, {FC, useEffect} from 'react';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {useActions} from '../../hooks/useActions';
import Stock from '../stock/Stock';
import {convertNumber} from '../../utils';
import {StyledPortfolioScreen} from './StyledPortfolioScreen';

const PortfolioScreen: FC = () => {
    const {stocks, error, loading, total_value, total_profit} = useTypedSelector(state => state.portfolio)
    const {login} = useTypedSelector(state => state.login)
    const {fetchPortfolio} = useActions()

    useEffect(() => {
        fetchPortfolio()
    }, [])

    if (loading)
        return <h1 className="technical-message">Идет загрузка...</h1>

    if (error)
        return <h1 className="technical-message">{error}</h1>

    return (
        <StyledPortfolioScreen>
            <div className="portfolioHeader">
                <div>Портфель {login}</div>
                <div>Общая стоимость: {convertNumber(total_value)}&#8381;</div>
                <div style={{fontSize: '1.8rem'}}>Изменение стоимости: {convertNumber(total_profit)}&#8381;</div>
            </div>
            {stocks.map((stock) => <Stock key={stock.id}
                                        id={stock.id}
                                        fullname={stock.fullname}
                                        price={stock.price}
                                        currency={stock.currency}
                                        change={stock.change} owned={stock.owned} quantity={stock.quantity}
                                        shortname={stock.shortname}/>)}</StyledPortfolioScreen>
    );
};

export default PortfolioScreen;

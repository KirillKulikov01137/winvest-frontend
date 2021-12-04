import React, {FC, useEffect} from 'react';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {useActions} from '../../hooks/useActions';
import Stock from '../stock/Stock';

const PortfolioScreen: FC = () => {
    const {stocks, error, loading} = useTypedSelector(state => state.portfolio)
    const {fetchPortfolio} = useActions()

    useEffect(() => {
        fetchPortfolio()
    }, [])

    if (loading)
        return <h1 className="technical-message">Идет загрузка...</h1>

    if (error)
        return <h1 className="technical-message">{error}</h1>

    return (
        <>{stocks.map((stock) => <Stock key={stock.id}
                                        id={stock.id}
                                        fullname={stock.fullname}
                                        price={stock.price}
                                        currency={stock.currency}
                                        change={stock.change} owned={stock.owned} quantity={stock.quantity}
                                        shortname={stock.shortname}/>)}</>
    );
};

export default PortfolioScreen;

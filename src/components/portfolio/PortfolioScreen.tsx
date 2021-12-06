import React, {FC, useEffect} from 'react';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {useActions} from '../../hooks/useActions';
import Stock from '../stock/Stock';
import PageHeader from '../page-header/PageHeader';

const PortfolioScreen: FC = () => {
    const {stocks, error, loading, total_value} = useTypedSelector(state => state.portfolio)
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
        <>
            <PageHeader title={`Портфель ${login}. Общая стоимость ${total_value}`} />
            {stocks.map((stock) => <Stock key={stock.id}
                                        id={stock.id}
                                        fullname={stock.fullname}
                                        price={stock.price}
                                        currency={stock.currency}
                                        change={stock.change} owned={stock.owned} quantity={stock.quantity}
                                        shortname={stock.shortname}/>)}</>
    );
};

export default PortfolioScreen;

import React, {FC, useEffect} from 'react';
import {useActions} from '../../hooks/useActions';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import Stock from '../stock/Stock';
import '../../styles/common.css';

const Stocks: FC = () => {
    const {stocks, error, loading} = useTypedSelector(state => state.stocks)
    const {fetchStocks} = useActions()

    useEffect(() => {
        fetchStocks()
    }, [])

    if (loading)
        return <h1 className="technical-message">Идет загрузка...</h1>

    if (error)
        return <h1 className="technical-message">Ошибка при загрузке акций</h1>

    return (
        <>{stocks.map((stock) => <Stock key={stock.id} id={stock.id} name={stock.fullname} price={stock.price} currency={stock.currency} />)}</>
    );
};

export default Stocks;

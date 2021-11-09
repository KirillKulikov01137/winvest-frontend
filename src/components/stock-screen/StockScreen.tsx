import React, {FC, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {ParamsI} from '../../pages/stock-page/ParamsInterface';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import PageHeader from '../page-header/PageHeader';
import Graphic from '../../Graphics';
import {useActions} from '../../hooks/useActions';

const StockScreen: FC = () => {
    const {fetchStock} = useActions()
    const params = useParams<ParamsI>();
    const id = +params.id;

    useEffect(() => {
        fetchStock(id)
    }, [])

    const {stock, loading, error} = useTypedSelector(state => state.stock)

    if (loading)
        return <h1 className="technical-message">Идет загрузка...</h1>

    if (error)
        return <h1 className="technical-message">{error}</h1>

    return (
        <div>
            <PageHeader title={stock.fullname} />
            <div className="stockPageBody">
                <div><Graphic /></div>
                <div>
                    <span className="stockDescription">{`Текущая цена за акцию: ${stock.price} ${stock.currency}`}</span>
                </div>
            </div>
        </div>
    );
};

export default StockScreen;

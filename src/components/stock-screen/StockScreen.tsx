import React, {FC, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {ParamsI} from '../../pages/stock-page/ParamsInterface';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import PageHeader from '../page-header/PageHeader';
import Graphic from '../../Graphics';
import {useActions} from '../../hooks/useActions';
import {convertNumber} from '../../utils';
import {StyledStockScreen} from './StyledStockScreen';

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
        <StyledStockScreen>
            <PageHeader title={stock.shortname + ' ' + stock.fullname}/>
            <div className="stockPageBody">
                <div><Graphic hist={stock.history} /></div>
                <div>
                    {stock.price ? (<span
                            className="stockDescription">{`Текущая цена за акцию: ${convertNumber(stock.price)}${stock.currency}`}</span>) :
                        (<span
                            className="stockDescription">{`Текущая цена за акцию: -`}</span>)}
                    <div>
                        {stock.price && <span style={{color: '#000'}}>Цена акции изменилась на: </span>}
                        {stock.price && stock.change >= 0 && (<span
                            className="stockDescriptionGreen">{`+${convertNumber(stock.change)}%`}</span>)}
                        {stock.price && stock.change < 0 && (<span
                            className="stockDescriptionRed">{`${convertNumber(stock.change)}%`}</span>)}
                    </div>
                </div>
            </div>
        </StyledStockScreen>
    );
};

export default StockScreen;

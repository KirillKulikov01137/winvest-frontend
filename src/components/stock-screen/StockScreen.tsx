import React, {FC, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {ParamsI} from '../../pages/stock-page/ParamsInterface';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import PageHeader from '../page-header/PageHeader';
import Graphic, { setSize } from '../../Graphics';
import {useActions} from '../../hooks/useActions';
import {convertNumber} from '../../utils';
import {StyledStockScreen} from './StyledStockScreen';

const StockScreen: FC = () => {
    const [predictType, setPredictType] = useState('dots')
    const [quantity, setQuantity] = useState('')

    const {fetchStock, addStock , removeStock} = useActions()
    const params = useParams<ParamsI>();
    const id = +params.id;

    useEffect(() => {
        fetchStock(id)
        //setSize(0, stock.history.length+59)
    }, [])

    const {stock, predict, loading, error} = useTypedSelector(state => state.stock)
    const {isAuth} = useTypedSelector(state => state.login)

    const onAddClick = () => {
        addStock(id, quantity == '' ? {quantity: '0'} : {quantity})
        setQuantity('')
    }

    const onRemoveClick = () => {
        removeStock(id)
    }

    if (loading)
        return <h1 className="technical-message">Идет загрузка...</h1>

    if (error)
        return <h1 className="technical-message">{error}</h1>

    return (
        <StyledStockScreen>
            <PageHeader title={stock.shortname + ' ' + stock.fullname}/>
            <div className="stockPageBody">
                <div><Graphic hist={stock.history} predict={predict.filter(item => item.type == predictType)[0]}/></div>
                <div>
                    {stock.price ? (<span
                            className="stockDescription">{`Текущая цена за акцию: ${convertNumber(stock.price)}`}<>&#8381;</></span>) :
                        (<span
                            className="stockDescription">{`Текущая цена за акцию: -`}</span>)}
                    <div>
                        {stock.price && <span style={{color: '#000'}}>Цена акции изменилась на: </span>}
                        {stock.price && stock.change >= 0 && (<span
                            className="stockDescriptionGreen">{`+${convertNumber(stock.change)}%`}</span>)}
                        {stock.price && stock.change < 0 && (<span
                            className="stockDescriptionRed">{`${convertNumber(stock.change)}%`}</span>)}
                    </div>
                    <div className="selectContainer">
                        <div><span className="stockDescription">Выберите метод предсказания</span></div>
                        <div className="custom-select">
                            <select value={predictType} onChange={(e) => setPredictType(e.target.value)}>
                                {predict.map(item => <option key={item.name} value={item.type}>{item.name}</option>)}
                            </select>
                        </div>
                    </div>

                    <div className="stocksButtonsContainer">
                        {isAuth && (<div style={{display: 'flex'}}>
                            <input className="stockInput" type="text" value={quantity}
                                   onChange={(e) => setQuantity(e.target.value)}/>
                            <button className="stockBtn" onClick={() => onAddClick()}>Добавить акцию</button>
                        </div>)}
                        {isAuth && stock.owned &&
                        <button className="stockBtn" style={{margin: '1.2rem 0 0 18.1rem'}} onClick={() => onRemoveClick()}>Удалить акцию</button>}
                    </div>

                    {isAuth && stock.owned && <div style={{marginTop: '2rem'}} className="stockDescription">Количество акций в вашем портфеле: {stock.quantity}</div>}
                </div>
            </div>
        </StyledStockScreen>
    );
};

export default StockScreen;

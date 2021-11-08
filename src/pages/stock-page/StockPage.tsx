import React, {FC} from 'react';
import Container from "../../components/container/Container";
import PageHeader from "../../components/page-header/PageHeader";
import {ParamsI} from "./ParamsInterface";
import {useParams} from 'react-router-dom';
import {StyledStockPage} from "./StyledStockPage";
import Graphic from '../../Graphics';
import {useTypedSelector} from '../../hooks/useTypedSelector';

const StockPage: FC = () => {
    const {stocks} = useTypedSelector(state => state.stocks)
    const params = useParams<ParamsI>();
    const id = +params.id - 1;

    return (
        <StyledStockPage>
            <Container>
                <PageHeader title={stocks[id].fullname} />
                <div className="stockPageBody">
                    <div><Graphic /></div>
                    <div>
                        <span className="stockDescription">{'Текущая цена за акцию: ' + stocks[id].price + '$'}</span>
                    </div>
                </div>
            </Container>
        </StyledStockPage>
    );
};

export default StockPage;

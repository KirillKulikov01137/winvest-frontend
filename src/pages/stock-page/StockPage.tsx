import React, {FC} from 'react';
import Container from "../../components/container/Container";
import PageHeader from "../../components/page-header/PageHeader";
import {stocks} from "../home/stocks";
import {ParamsI} from "./ParamsInterface";
import {useParams} from 'react-router-dom';
import {StyledStockPage} from "./StyledStockPage";
import Graphic from '../../Graphics';

const StockPage: FC = () => {
    const params = useParams<ParamsI>();
    const id = +params.id - 1;

    return (
        <StyledStockPage>
            <Container>
                <PageHeader title={stocks[id].name} />
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

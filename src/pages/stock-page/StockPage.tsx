import React, {FC, useEffect} from 'react';
import Container from "../../components/container/Container";
import PageHeader from "../../components/page-header/PageHeader";
import {ParamsI} from "./ParamsInterface";
import {useParams} from 'react-router-dom';
import {StyledStockPage} from "./StyledStockPage";
import Graphic from '../../Graphics';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import StockScreen from '../../components/stock-screen/StockScreen';

const StockPage: FC = () => {
    return (
        <StyledStockPage>
            <Container>
                <StockScreen />
            </Container>
        </StyledStockPage>
    );
};

export default StockPage;

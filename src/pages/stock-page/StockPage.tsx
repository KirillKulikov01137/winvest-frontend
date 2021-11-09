import React, {FC} from 'react';
import Container from "../../components/container/Container";
import {StyledStockPage} from "./StyledStockPage";
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

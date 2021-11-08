import React, {FC} from 'react';
import Container from "../../components/container/Container";
import Stocks from '../../components/stocks/Stocks';

const Home: FC = () => {
    return (
        <Container>
           <Stocks/>
        </Container>
    );
};

export default Home;

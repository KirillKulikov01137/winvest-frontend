import React, {FC} from 'react';
import Container from "../../components/container/Container";
import {stocks} from "./stocks";
import Stock from "../../components/stock/Stock";

const Home: FC = () => {
    return (
        <Container>
            {stocks.map((stock) => <Stock key={stock.id} id={stock.id} name={stock.name} price={stock.price}/>)}
        </Container>
    );
}
;

export default Home;

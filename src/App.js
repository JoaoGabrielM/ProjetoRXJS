import React from 'react';
import './App.css';
import { Row, Col } from 'reactstrap';
import InputStocks from './Components/InputStocks';
import PieChartStocks from './Components/PieChartStocks';
import StocksList from './Components/StocksList';
import NewInvestment from './Components/NewInvestment';
import CalculateNewBuys from './Components/CalculateNewBuys';

export default function App() {
    return (
        <div className="App content">
            <h2 className="text-center">Balanceador de carteira</h2>
            <br/><br/>
            <Row>
                <Col lg="6" md="6" sm="6">
                    <InputStocks/>
                    <StocksList/>
                </Col>
                <Col lg="6" md="6" sm="6">
                    <PieChartStocks/>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col lg="6" md="6" sm="6">
                    <NewInvestment/>
                </Col>
                <Col lg="6" md="6" sm="6">
                    <CalculateNewBuys/>
                </Col>
            </Row>
        </div>
    );
}

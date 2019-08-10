import React from 'react';
import './App.css';
import { Row, Col } from 'reactstrap';
import InputStocks from './Components/InputStocks';

export default function App() {
    return (
        <div className="App container">
            <h2 className="text-center">Balanceador de carteira</h2>
            <br/><br/>
            <Row>
                <Col lg="6" md="6" sm="6">
                    <InputStocks/>
                </Col>
                <Col lg="6" md="6" sm="6">
                    <InputStocks/>
                </Col>
            </Row>
        </div>
    );
}

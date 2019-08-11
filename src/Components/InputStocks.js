import React, { Component } from 'react';
import { Card, CardBody, CardHeader, CardTitle, Row, Col, FormGroup, Input } from 'reactstrap';
import { stockListService } from '../Services';

export default class InputStocks extends Component {
    submitForm(event){
        event.preventDefault();
        const stock = { 'code': this.code.value, 'quantity': this.quantity.value, 'price': this.price.value };
        stockListService.sendStocks(stock);
        this.code.value = ""; this.quantity.value = ""; this.price.value = "";
    }
    
    render() {
        return(
            <div className="content">
                <Card>
                    <CardHeader>
                        <CardTitle tag="h3">Adicione suas ações</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <form onSubmit={this.submitForm.bind(this)}>
                            <Row>
                                <Col lg="4" md="4" sm="4">
                                    <FormGroup>
                                        <label>Codigo</label>
                                        <Input type="text" placeholder="Codigo" className="form-control" innerRef={(input) => this.code = input}/>
                                    </FormGroup>
                                </Col>
                                <Col lg="4" md="4" sm="4">
                                    <FormGroup>
                                        <label>Quantidade</label>
                                        <Input type="number" min="1" placeholder="Quantidade" className="form-control" innerRef={(input) => this.quantity = input}/>
                                    </FormGroup>
                                </Col>
                                <Col lg="4" md="4" sm="4">
                                    <FormGroup>
                                        <label>Price</label>
                                        <Input type="number" step="0.01" min="1" placeholder="Preco" className="form-control" innerRef={(input) => this.price = input}/>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Input type="submit" value="Enviar"/>
                        </form>
                    </CardBody>
                </Card>
            </div>
        )
    }
}
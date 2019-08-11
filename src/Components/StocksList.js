import React, { Component } from 'react';
import { Card, CardHeader, CardTitle, CardBody, Table } from'reactstrap';
import { stockListService } from '../Services';

export default class StocksList extends Component {
    constructor() {
        super();

        this.state = {
            stocks: []
        };
    }

    componentDidMount() {
        // subscribe to home component messages
        this.subscription = stockListService.getStocks().subscribe(message => {
            if (message) {
                // add message to local state if not empty
                this.setState({ stocks: [...this.state.stocks, message.stock] });
            } else {
                // clear messages when empty message received
                this.setState({ stocks: [] });
            }
        });
    }
    render() {
        return (
            <div className="content">
                <Card>
                    <CardHeader>
                        <CardTitle tag="h3">Lista de ações</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Código</th>
                                    <th>Quantidade</th>
                                    <th>Preço</th>
                                    <th>Preço total</th>
                                </tr>
                            </thead>
                            <tbody>
                                { this.state.stocks.map((stock, i) =>
                                    <tr key={ i }>
                                        <td>{ stock['code'] }</td>
                                        <td>{ stock.quantity }</td>
                                        <td>{ stock.price }</td>
                                        <td>{ stock.code }</td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>
            </div>
        )
    }
}
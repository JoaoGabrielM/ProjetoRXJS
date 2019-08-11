import React, { Component } from 'react';
import { Card, CardHeader, CardTitle, CardBody, Table } from'reactstrap';
import { stockListService, pieChartService, finalValueStocks } from '../Services';
import FinalValueLine from './FinalValueLine';

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
                pieChartService.sendStock(message.stock);
                finalValueStocks.sendStocks([...this.state.stocks, message.stock]);
            } else {
                // clear messages when empty message received
                this.setState({ stocks: [] });
                pieChartService.clearStocks();
                finalValueStocks.clearFinalValue();
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
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>Código</th>
                                    <th>Quantidade</th>
                                    <th className="text-right">Preço</th>
                                    <th className="text-right">Preço total</th>
                                </tr>
                            </thead>
                            <tbody>
                                { this.state.stocks.map((stock, i) =>
                                    <tr key={ i }>
                                        <td>{ stock.code }</td>
                                        <td>{ stock.quantity }</td>
                                        <td className="text-right">R$ { stock.price }</td>
                                        <td className="text-right">R$ { stock.quantity * stock.price }</td>
                                    </tr>
                                )}
                            </tbody>
                            <tfoot>
                                <FinalValueLine/>
                            </tfoot>
                        </Table>
                    </CardBody>
                </Card>
            </div>
        )
    }
}
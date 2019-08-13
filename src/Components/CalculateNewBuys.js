import React, { Component } from 'react';
import { Card, CardHeader, CardTitle, CardBody, Table } from 'reactstrap';
import { newInvestmentService, finalValueStocksService, allStocksService, newBuysService } from '../Services';
import FinalValueNewInvestiment from './FinalValueNewInvestiment';

export default class CalculateNewBuys extends Component {
    constructor() {
        super();
        this.state = { previousFinalValue: 0, newInvestment: 0, stocks: [] };
    }

    componentDidMount() {
        this.subscription = finalValueStocksService.getFinalValue().subscribe(message => {
            if (message) {
                this.setState({ previousFinalValue: message.finalValue });
            } else {
                this.setState.finalValue = 0.00;
            }
        });

        this.subscriptionNewInvestment = newInvestmentService.getNewValue().subscribe( message => {
            if (message) {
                this.setState({ newInvestment: message.value });
                newBuysService.sendNewStocks(this.state.stocks, this.state.previousFinalValue, message.value);
                // finalValueNewInvestmentService.sendStocks([...this.state.stocks, message.stock]);
            }
        });
        
        this.subscriptionStocks = allStocksService.getStocks().subscribe(message => {
            if (message) {
                this.setState({ stocks: [...this.state.stocks, message.stock] });
            } else {
                this.setState({ stocks: [] });
            }
        });

        this.subscriptionNewStocks = newBuysService.getNewStocks().subscribe(message => {
            if (message) {
                this.setState({ stocks: message.stocks });
            }
        });
    }

    render() {
        return (
            <div className="content">
                <Card>
                    <CardHeader>
                        <CardTitle tag="h3">Distribuidor de carteira</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>Código</th>
                                    <th className="text-right">Preço total</th>
                                    <th>Novas ações a comprar</th>
                                    <th className="text-right">Preço</th>
                                </tr>
                            </thead>
                            <tbody>
                                { this.state.stocks.map((stock, i) =>
                                    <tr key={ i }>
                                        <td>{ stock.code }</td>
                                        <td className="text-right">R$ { new Intl.NumberFormat('pt').format(stock.finalValue) }</td>
                                        <td>{ stock.newQuantity }</td>
                                        <td className="text-right">R$ { new Intl.NumberFormat('pt').format(stock.newQuantity * stock.price) }</td>
                                    </tr>
                                )}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td><b>Total:</b></td>
                                    <td className="text-right">R$ { new Intl.NumberFormat('pt').format(this.state.previousFinalValue) }</td>
                                    <td></td>
                                    <td className="text-right">R$ <FinalValueNewInvestiment/></td>
                                </tr>
                            </tfoot>
                        </Table>
                    </CardBody>
                </Card>
            </div>
        )
    }
}
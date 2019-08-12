import React, { Component } from 'react';
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap';
import { newInvestmentService, finalValueStocksService } from '../Services';

export default class CalculateNewBuys extends Component {
    constructor() {
        super();
        this.state = { previousFinalValue: 0, newInvestment: 0 };
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
            }
        });
    }


    render() {
        return (
            <div className="content">
                <Card>
                    <CardHeader>
                        <CardTitle tag="h3">Balanceador de carteira</CardTitle>
                    </CardHeader>
                    <CardBody>
                        
                    </CardBody>
                </Card>
            </div>
        )
    }
}
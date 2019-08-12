import React, { Component } from 'react';
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap';
import { ResponsiveContainer, PieChart, Pie, Tooltip } from 'recharts';
import { allStocksService } from '../Services';

export default class PieChartStocks extends Component {
    constructor() {
        super();
        this.state = { data: [] };
    }

    componentDidMount() {
        // subscribe to home component messages
        this.subscription = allStocksService.getStocks().subscribe(message => {
            if (message) {
                // add message to local state if not empty
                this.setState({ data: [...this.state.data, message.stock] });
            } else {
                // clear messages when empty message received
                this.setState({ data: [] });
            }
        });
    }

    render() {
        return(
            <div className="content">
                <Card>
                    <CardHeader>
                        <CardTitle tag="h3">Gráfico de ações</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <div style={{ width: '100%', height: 300 }}>
                            <ResponsiveContainer>
                                <PieChart>
                                    <Pie dataKey="finalValue" nameKey="code" data={this.state.data} fill="#8884d8" label />
                                    <Tooltip/>
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </CardBody>
                </Card>
            </div>
        )
    }
}
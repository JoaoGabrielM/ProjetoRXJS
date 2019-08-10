import React, { Component } from 'react';
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap';
import { ResponsiveContainer, PieChart, Pie } from 'recharts';

export default class PieChartStocks extends Component {
    render() {
        const data =    [
                            { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
                            { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
                        ];
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
                                    <Pie dataKey="value" data={data} fill="#8884d8" label />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </CardBody>
                </Card>
            </div>
        )
    }
}
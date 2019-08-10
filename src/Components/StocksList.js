import React, { Component } from 'react';
import { Card, CardHeader, CardTitle, CardBody, Table } from'reactstrap';

export default class StocksList extends Component {
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
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>
            </div>
        )
    }
}
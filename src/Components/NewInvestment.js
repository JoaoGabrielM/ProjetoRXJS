import React, { Component } from 'react';
import { Card, CardHeader, CardTitle, CardBody, Form, FormGroup, Input } from 'reactstrap';
import { newInvestmentService } from '../Services';

export default class NewInvestment extends Component {
    submitForm(event) {
        event.preventDefault();
        const value = this.value.value;
        newInvestmentService.sendNewValue(value);
        this.value.value = "";
    }

    render() {
        return (
            <div className="content">
                <Card>
                    <CardHeader>
                        <CardTitle tag="h3">Novo aporte</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <Form onSubmit={this.submitForm.bind(this)}>
                            <FormGroup>
                                <label>Valor do aporte</label>
                                <Input type="number" step="0.01" min="1" placeholder="Valor" className="form-control" innerRef={(input) => this.value = input} required={ true }/>
                            </FormGroup>
                            <Input type="submit" value="Enviar"/>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        )
    }
}
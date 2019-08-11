import React, { Component } from 'react';
import { finalValueStocks } from '../Services';

export default class FinalValueLine extends Component {
    constructor() {
        super();
        this.state = { finalValue: 0.00 }
    }

    componentDidMount() {
        this.subscription = finalValueStocks.getFinalValue().subscribe(message => {
            if (message) {
                this.setState({ finalValue: message.finalValue });
            } else {
                this.setState.finalValue = 0.00;
            }
        });
    }

    render() {
        return (
            <tr>
                <td><b>Total:</b></td>
                <td colSpan="3" className="text-right">R$ { this.state.finalValue }</td>
            </tr>
        )
    }
}
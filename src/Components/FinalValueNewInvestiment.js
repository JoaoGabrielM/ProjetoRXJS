import { Component } from 'react';
import { finalValueNewInvestmentService } from '../Services';

export default class extends Component {
    constructor() {
        super();
        this.state = { finalValue: 0.00 }
    }

    componentDidMount() {
        this.subscription = finalValueNewInvestmentService.getFinalValue().subscribe(message => {
            if (message) {
                this.setState({ finalValue: message.finalValue });
            } else {
                this.setState.finalValue = 0.00;
            }
        });
    }

    render() {
        return (this.state.finalValue)
    }
}
import React, { Component } from 'react';
import './quantityPicker.css';
import './product.css';




class QuantityPicker extends Component {
    state = {

        quantity: this.props.quantityMinimum,
        name: 'Tom',
        minimumIsTrue: false
    }
    render() {
        return (
            
            <div className="">
                {this.alertMinimum()}
                <button className="btn btn-sm btn-primary btn-q" onClick={this.decreaseQuantity}>-</button>
                <label>{this.state.quantity}</label>
                <button className="btn-q btn btn-sm btn-primary" onClick={this.increaseQuantity}>+</button>
            </div>
        );
    }

    alertMinimum = () => {
        if(this.state.minimumIsTrue)
            return (<label className="alert-minimum">minimum quantity</label>
            );
    }

    decreaseQuantity = () => {
        if (this.state.quantity <= this.props.quantityMinimum) {
            this.setState({minimumIsTrue: true});
            return;
        }
        this.setState({minimumIsTrue:false});
        let current = this.state.quantity - 1;
        this.setState( prevState => {
            return{ quantity: prevState.quantity-1
            };
        } );
        this.props.onValueChange(current);
    }
    increaseQuantity = () => {
        // console.log("button clicked");
        // console.log(this);
        // console.log(this.state.quantity);
        // this.state.quantity++; <- DON'T modify state directly
        let current = this.state.quantity; //read from the state
        current++;
        this.setState({ quantity: current });
        // console.log("after: " + this.state.quantity);
        this.props.onValueChange(current);
        this.setState({minimumIsTrue:false});
    }
}

export default QuantityPicker;
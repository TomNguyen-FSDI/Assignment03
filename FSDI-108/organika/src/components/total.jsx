import React, { Component } from 'react';

class Total extends Component {
    render() { 
        return ( 
            <div>
                <label className="total">Total: ${this.calculateTotal()}</label>
            </div>
         );
    }

    calculateTotal= () =>{
        let subtotal = this.props.price * this.props.amount;
        return subtotal.toFixed(2);
    }
}
 
export default Total;

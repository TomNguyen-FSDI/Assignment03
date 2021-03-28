import React, { Component } from 'react';

class Total extends Component {
    state = { 
        tax: 0.08,
     }
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

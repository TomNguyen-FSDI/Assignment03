import React, { Component } from 'react';
import './cartProduct.css'


class CartProduct extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="cart-sub-container">
                    <img src={"/images/products/"+this.props.cartImg} alt="CartProduct"/>
                    {this.handleHowMany()}
                    {/* <label className="product-title">{this.props.cartTitle}</label>
                    <p className="unit_price">Unit Price: ${this.props.cartPrice.toFixed(2)}</p>
                    <label>Qty: {this.props.cartQuantity}</label> */}
                </div>
                
            </div>
         );
    }

    handleHowMany = () => {
        return(
            <label className="cart-sub-quantity">{this.props.cartQuantity}</label>
        );
    }
}
 
export default CartProduct;
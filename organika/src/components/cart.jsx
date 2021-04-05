import React, { Component } from 'react';
import { connect, ReactReduxContext } from 'react-redux';
import './cart.css';

import CartCheckout from './cartCheckout';
import Footer from './footer';

class Cart extends Component {
    state = {
        tax: 0.08,
        subTotalTaxes: 0,
        finalTotal: 0,
    }
    render() {
        const myCart = this.props.cart;
        // for(var i=0; i< myCart.length;i++){
        //     console.log(myCart[i].product.image);
        // }
        return (
                <div className="container">
                    <div className="cart-wrapper">

                        <div className="cart-details">
                            {myCart.map(
                                p => <CartCheckout key={p.product.id} item={p}></CartCheckout>
                            )}
                            {this.props.cart.length < 4 ? <Footer cName="footer-cr-cart"></Footer> : <Footer cName="footer-cr-cart-flex"></Footer>}
                        </div>
                        {this.props.cart.length > 0 ?
                            <div className="cart-summary">
                                <p className="cart-order-summary">order summary</p>
                                <p className="cart-order-summary-text">item total before tax: <span className="cart-order-summary-text-price">${this.subTotal()}</span></p>
                                <p className="cart-order-summary-text">tax ({this.state.tax * 100}%): <span className="cart-order-summary-text-price">${this.tax(this.subTotal())}</span></p>
                                <hr className="cart-order-hr"></hr>
                                <p className="cart-order-summary-total">order total: <span className="cart-order-summary-total-price">${this.orderTotal()}</span></p>
                            </div>
                            : <p className="cart-empty">Cart is Empty</p>}
                    </div>
                </div>
        );
    }


    subTotal = () => {
        var subtotal = 0;
        for (var i = 0; i < this.props.cart.length; i++) {
            subtotal = subtotal + (this.props.cart[i].product.price * this.props.cart[i].quantity);
        }
        // this.setState({finalTotal:final_total});
        return subtotal.toFixed(2);
    }

    tax = (subtotal) => {
        let temp = (subtotal * this.state.tax);
        return temp.toFixed(2);
    }
    orderTotal = () => {
        let temp = Number(this.subTotal()) + Number(this.tax(this.subTotal()));
        return temp.toFixed(2);
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state
    };
};

export default connect(mapStateToProps, null)(Cart);
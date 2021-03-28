import React, { Component } from 'react';
import ProductService from '../services/productService';
import Product from './product';
import './catalog.css'
import Footer from './footer';

class Catalog extends Component {
    state = {
        catalog: [],
        isCart: false,
    };

    // constructor(){
    //     super();
    //     console.log("Im the constructor");
    // }

    render() {

        // console.log("Im the render function");
        return (
            <React.Fragment>
                <div className="container-fluid content">

                    <div className="catalog-page container">
                        <h3 className="cat-title">We have {this.state.catalog.length} amazing products</h3>

                        {this.state.catalog.map(p =>
                            <Product key={p.id} item={p} onCartChange={this.handleCart}></Product>
                        )}
                        <Footer cName="footer-cr"></Footer>
                    </div>
                    {this.displayCart()}
                </div>
            </React.Fragment>
        );
    }

    displayCart = (cartItem) => {
        console.log(cartItem);
        if (this.state.isCart) {
            return (
                <div className="checkout-cart-container">
                    <div className="product-container">
                        {/* <Product item={cartItem}></Product> */}
                        <p>
                            The Cart was clicked on. Display Cart.
                        </p>
                                <label className="underRow1">Under <span>construction</span></label>
                                <label className="underRow2"><span>Cart </span>is under construction process</label>
                        <img src="/images/worker-c.png" alt="Under_Construction"></img>

                    </div>
                </div>
            );
        }

    }

    handleCart = (stateChanged,item) => {
                            this.setState({ isCart: stateChanged });
        // console.log(item.price);
        this.displayCart(item);
    }

    componentDidMount() {
                            console.log("load data now");
        // call the service, get the catalog and put the catalog in the state
        let service = new ProductService();
        var data = service.getProducts();

        this.setState({catalog: data });
    }

}

export default Catalog;
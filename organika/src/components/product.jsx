
import React, { Component } from 'react';
import QuantityPicker from './quantityPicker';
import './product.css'
import Total from './total';

class Product extends Component {
    state = { 
        quantity: this.props.item.minimum || 1,
     };
    render() { 
        return ( 
            <div className="product">
                <img className="product-image" src={"/images/products/"+this.props.item.image} alt="product"></img>
                {/* <img className="product-image" src={"https://TomNguyen-FSDI.github.io/organika/images/products/"+this.props.item.image} alt="random"></img> */}
                <label className="product-title">{this.props.item.title}</label>
                <p className="unit_price">Unit Price: ${this.props.item.price.toFixed(2)}</p>
                <QuantityPicker onValueChange={this.handleGetQuantity} quantityMinimum={this.props.item.minimum || 1}></QuantityPicker>
                <Total price={this.props.item.price} amount={this.state.quantity}></Total>
                <div>
                    <button className="btn-addE btn-add" onClick={this.handleAddToCart}><i className="fas fa-shopping-cart"></i> add to cart</button>
                </div>
            </div>
         );
    }

    handleGetQuantity = (qnty) =>{
        this.setState({quantity: qnty});
    }

    handleAddToCart = () =>{
        this.props.onCartChange(true,this.props.item);
    }
}
 
export default Product;
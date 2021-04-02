
import React, { Component } from 'react';
import QuantityPicker from './quantityPicker';
import './product.css'
import Total from './total';


class Product extends Component {
    state = { 
        quantity: this.props.item.minimum || 1,
     };
    render() { 
        // destructuring props
        const {title,image,price,minimum} = this.props.item;
        const getTotal = this.props.getTotal;
        return ( 
            <div className="product">
                <img className="product-image" src={"/images/products/"+image} alt="product"></img>
                {/* <img className="product-image" src={"https://TomNguyen-FSDI.github.io/organika/images/products/"+this.props.item.image} alt="random"></img> */}
                <label className="product-title">{title}</label>
                <p className="unit_price">Unit Price: ${price.toFixed(2)}</p>
                <QuantityPicker onValueChange={this.handleGetQuantity} quantityMinimum={minimum || 1}></QuantityPicker>
                <Total price={price} amount={this.state.quantity} getTotal={getTotal}></Total>
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
        const {image,title,price} = this.props.item;
        this.props.getImg(image);
        this.props.getPrice(price);
        this.props.getProduct(title);
        this.props.getQuantity(this.state.quantity);
        this.props.onCartChange(true);
    }

}
 
export default Product;
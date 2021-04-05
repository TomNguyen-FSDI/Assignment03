import React, { Component } from 'react';
import './cartCheckout.css';
import { connect } from 'react-redux';
import { removeProductFromCart} from "../actions/actions";

class CartCheckout extends Component {
    state = {  }
    render() { 
        // destructuring props
        const {title,price,image} = this.props.item.product;
        const quantity = this.props.item.quantity;
        
        return ( 
            <div className="checkout-container">
                <div className="checkout-image">
                    <img  src={"/images/products/"+image} alt="product"></img>
                </div>
                <div>
                    <p className="detail-title"><label>{title}</label>
                    </p>
                    <p className="detail-description">Description:<br></br> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores accusamus tempore fugit quidem. Minima labore dolores dignissimos autem ad, aut alias laudantium quam consectetur nesciunt dolor iste atque quibusdam quas!</p>
                    <div className="detail-status">
                    <p className="detail-status-box"><label className="detail-status-box-label">Price:</label> ${price.toFixed(2)}</p>
                        <p className="detail-status-box"><label className="detail-status-box-label">Quantity:</label> {quantity}</p>
                        <p> <label className="detail-status-box-label">Subtotal:</label> <label className="detail-status-box-subtotal">{(price*quantity).toFixed(2)}</label></p>
                    <button className="btn btn-link detail-btn-delete" onClick={this.handleRemoveFromCart}>delete</button>
                    </div>
                </div>
            </div>
            // <div className="checkout-container">
            //     <img className="checkout-image" src={"/images/products/"+image} alt="product"></img>
            //     <div>
            //     <p>Qty: {quantity}</p>
            //     <label>price: {price}</label>
            //     </div>
            //     {/* <img className="product-image" src={"https://TomNguyen-FSDI.github.io/organika/images/products/"+this.props.item.image} alt="random"></img> */}
            //     {/* <label className="product-title">{title}</label>
            //     <p className="unit_price">Unit Price: ${price.toFixed(2)}</p>
            //     <QuantityPicker onValueChange={this.handleGetQuantity} quantityMinimum={minimum || 1}></QuantityPicker>
            //     <Total price={price} amount={this.state.quantity} getTotal={getTotal}></Total>
            //     <div>
            //         <button className="btn-addE btn-add" onClick={this.handleAddToCart}><i className="fas fa-shopping-cart"></i> add to cart</button>

            //     </div> */}
            // </div>
         );
    }

    handleRemoveFromCart = () => {
        let title = this.props.item.product.title;
        this.props.removeProductFromCart(title);
    }
}
 
export default connect(null,{removeProductFromCart})(CartCheckout);
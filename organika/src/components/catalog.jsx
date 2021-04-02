import React, { Component  } from 'react';
import ProductService from '../services/productService';
import Product from './product';
import './catalog.css'
import Footer from './footer';
import CartProduct from './cartProduct';



class Catalog extends Component {
    state = {
        catalog: [],
        isCart: false,
        cartPrice: 0,
        cartTitle: '',
        cartImg: '',
        cartId: 0,
        cart: [],
        addToCart: false,
        displayCart:"none",
        subTotal:0,
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
                            <Product key={p.id} item={p} onCartChange={this.handleCart} getPrice={this.getPrice} getProduct={this.getProduct} getQuantity={this.getQuantity} getImg={this.getImg} ></Product>
                        )}
                        <Footer cName="footer-cr"></Footer>
                    </div>
                    {this.displayCart()}
                    {this.state.isCart ? <div className="checkout-cart-container">
                    <label className="cart-subtotal-title">Subtotal:</label>
                    <p className="cart-subtotal">$ {this.onChangeSubtotal()}</p>
                    {this.state.cart.map(
                        p => <CartProduct key={p.id} cartImg={p.image} cartTitle={p.title} cartPrice={p.price} cartQuantity={p.stock}></CartProduct>
                    )}
                    </div> : ''}
                </div>
            </React.Fragment>
        );
    }

    onChangeSubtotal = () => {
        let total=0;
        for ( var item of this.state.cart){
            total = total + (item.price*item.stock);
        }
        // this.setState({subTotal: total});
        return total.toFixed(2);
    }

    displayCart = () => {
        // console.log(cartItem);
        // const reduxPrice = useSelector(state => state.price);
        // console.log(reduxPrice);
        if (this.state.isCart) {
            if (this.state.addToCart) {
                this.addToCart();
            }
            // return (
            //     // <div className="checkout-cart-container">
            //     //     <div className="product-container">
            //     //         {/* <Product item={cartItem}></Product> */}
            //     //         <p>
            //     //             The Cart was clicked on. Display Cart.
            //     //         </p>
            //     //                 <label className="underRow1">Under <span>construction</span></label>
            //     //                 <label className="underRow2"><span>Cart </span>is under construction process</label>
            //     //         <img src="/images/worker-c.png" alt="Under_Construction"></img>

            //     //     </div>
            //     // </div>
            //     // <CartProduct cartImg={this.state.cartImg} cartTitle={this.state.cartTitle} cartPrice={this.state.cartPrice}
            //         // cartQuantity={this.state.cartQuantity}></CartProduct>


            // );
        }

    }



    addToCart = () => {
        for (var i = 0; i<this.state.cart.length; i++) {
            if (this.state.cart[i].title === this.state.cartTitle) {
                let items = [...this.state.cart];
                let item = items[i];
                item.stock = this.state.cartQuantity;
                items[i] = item;
                this.setState({
                    cart: items
                });
                
                this.setState({ addToCart: false });
                return;
            }
        }
        this.setState({
            cart: [
                ...this.state.cart,
                {
                    id: this.state.cartId,
                    price: this.state.cartPrice,
                    stock: this.state.cartQuantity,
                    title: this.state.cartTitle,
                    image: this.state.cartImg,
                },
            ]
        });
        this.setState(prevState => { return { cartId: prevState.cartId + 1 }; });
        this.setState({ addToCart: false });
    }
    
    getPrice = (price) => {
        this.setState({ cartPrice: price });
        // this.debug();
    }

    getProduct = (title) => {
        this.setState({ cartTitle: title });
    }
    debug = () => {
        console.log("getTitle " + this.state.cartTitle);
        console.log("getPrice: " + this.state.cartPrice);
        console.log("getQuantity: " + this.state.cartQuantity);
        console.log("getImg: " + this.state.cartImg);
    }

    getQuantity = (quantity) => {
        this.setState({ cartQuantity: quantity });
    }

    getImg = (img) => {
        this.setState({ cartImg: img })
    }

    handleCart = (stateChanged) => {
        this.setState({ isCart: stateChanged });
        this.setState({ addToCart: stateChanged });
        // console.log(item.price);
        this.displayCart();

    }

    componentDidMount() {
        // console.log("load data now");
        // call the service, get the catalog and put the catalog in the state
        let service = new ProductService();
        var data = service.getProducts();

        this.setState({ catalog: data });

    }

}

export default Catalog;
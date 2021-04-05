import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect} from "react-redux";
import './navBar.css';



class NavBar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "rgb(22,94,106)" }}
      >
        <div className="navbar-expand-sm navbar-collapse my-navbar">
          <ul className="navbar-nav">
            <li className="nav-item btn-outline-info">
              <Link className="nav-link" to="/home">
                Home 
              </Link>
            </li>
            <li className="nav-item btn-outline-info">
              <Link className="nav-link" to="/catalog">
                Catalog
              </Link>
            </li>
            <li className="nav-item btn-outline-info">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item btn-outline-info">
              <Link className="nav-link" to="/cart">
              <span className="badge cart-badge cart-number">
              {this.displayCartQuantity()}
              </span>
              <i className="fas fa-shopping-cart cart-icon"></i>Cart
            
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  
  displayCartQuantity = () => {
    if(this.props.cart.length===0){
      return '';
    }else{
      return this.props.cart.length;
    }
  };
}
  
const mapStateToProps = (state) => {
  return {
    cart: state
  };
};

export default connect(mapStateToProps,null)(NavBar);


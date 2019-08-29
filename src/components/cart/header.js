import React, { Component } from 'react';
import '../../assets/styles/cart/header.css';

class CartHeader extends Component {
  render() {
    return(
      <div className="super_container">
        <div className="super_container_inner">
          <div className="super_overlay"></div>
          <div className="cart_header">
            <div className="cart_header_container d-flex flex-column align-items-center justify-content-end">
              <div className="cart_header_content text-center">
                <div className="cart_header_title">Shopping Cart</div>
                <div className="breadcrumbs d-flex flex-column align-items-center justify-content-center">
                  <ul className="d-flex flex-row align-items-start justify-content-start text-center">
                    <li><a href="/">Home</a></li>
                    <li>Your Cart</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default CartHeader;

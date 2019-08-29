import React, { Component } from 'react';
import '../../assets/styles/cart/responsive.css';
import CartHeader from './header';
import CartDetails from './details';

class Cart extends Component {
  render() {
    return(
      <React.Fragment>
        <CartHeader />
        <CartDetails />
      </React.Fragment>
    )
  }
}
export default Cart;

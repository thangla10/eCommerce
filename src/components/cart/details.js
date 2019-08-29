import React, { Component } from 'react';
import '../../assets/styles/cart/details.css';
import tshirt from '../../assets/images/products/s3.jpg';

class CartDetails extends Component {
  render() {
    return (
      <div className="super_container">
        <div className="super_container_inner">
          <div className="super_overlay"></div>
          <div className="cart_section">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="cart_container">
                    {/* Cart Bar */}
                    <div className="cart_bar">
                      <ul className="cart_bar_list item_list d-flex flex-row align-items-center justify-content-end">
                        <li className="mr-auto">Product</li>
                        <li>Color</li>
                        <li>Size</li>
                        <li>Price</li>
                        <li>Quantity</li>
                        <li>Total</li>
                      </ul>
                    </div>
                    {/* Cart Items */}
                    <div className="cart_items">
                      <ul className="cart_items_list">
                        {/* Cart Item */}
                        <li className="cart_item item_list d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-end justify-content-start">
                          <div className="cart_product d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start mr-auto">
                            <div><div className="cart_product_number">1</div></div>
                            <div><div className="cart_product_image"><img src={tshirt} alt="" /></div></div>
                            <div className="cart_product_name_container">
                              <div className="cart_product_name"><a href="">Habit tee 2.0</a></div>
                              <div className="cart_product_text">Second line for additional info</div>
                            </div>
                          </div>
                          <div className="cart_product_color product_text"><span></span>white</div>
                          <div className="cart_product_size product_text"><span></span>M</div>
                          <div className="cart_product_price product_text"><span></span>210.000</div>
                          <div className="cart_product_quantity_container">
                            <div className="cart_product_quantity ml-lg-auto mr-lg-auto text-center">
                              <span className="cart_product_text product_num">1</span>
                              <div className="qty_sub qty_button trans_200 text-center"><span>-</span></div>
                              <div className="qty_add qty_button trans_200 text-center"><span>+</span></div>
                            </div>
                          </div>
                          <div className="cart_product_total product_text"><span></span>210.000</div>
                        </li>
                      </ul>
                    </div>
                    {/* Cart Buttons */}
                    <div className="cart_buttons d-flex flex-row align-items-start justify-content-start">
                      <div className="cart_buttons_inner ml-sm-auto d-flex flex-row align-items-start justify-content-start flex-wrap">
                        <div className="button_clear trans_200"><a href="">clear cart</a></div>
                        <div className="button_continue trans_200"><a href="">continue shopping</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row cart_extra_row">
                <div className="col-lg-6">
                  <div className="cart_extra cart_extra_1">
                    <div className="cart_extra_content cart_extra_coupon">
                      <div className="cart_extra_title">Coupon code</div>
                      <div className="coupon_form_container">
                        <form action="" id="coupon_form" className="coupon_form">
                          <input type="text" className="coupon_input" required="required" />
                          <button className="coupon_button">apply</button>
                        </form>
                      </div>
                      <div className="coupon_text">You'll receive codes from our events. If you have this, please enter here.</div>
                      <div className="shipping">
                        <div className="cart_extra_title">Shipping Method</div>
                        <ul>
                          <li className="shipping_option d-flex flex-row align-items-center justify-content-start">
                            <label className="radio_container">
                              <input type="radio" id="radio_1" name="shipping_radio" className="shipping_radio" />
                              <span className="radio_mark" />
                              <span className="radio_text">Basic Delivery</span>
                            </label>
                            <div className="shipping_price ml-auto">30.000</div>
                          </li>
                          <li className="shipping_option d-flex flex-row align-items-center justify-content-start">
                            <label className="radio_container">
                              <input type="radio" id="radio_2" name="shipping_radio" className="shipping_radio" />
                              <span className="radio_mark" />
                              <span className="radio_text">Fast Delivery</span>
                            </label>
                            <div className="shipping_price ml-auto">40.000</div>
                          </li>
                          <li className="shipping_option d-flex flex-row align-items-center justify-content-start">
                            <label className="radio_container">
                              <input type="radio" id="radio_3" name="shipping_radio" className="shipping_radio" defaultChecked />
                              <span className="radio_mark" />
                              <span className="radio_text">Personal Pickup</span>
                            </label>
                            <div className="shipping_price ml-auto">Free</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 cart_extra_col">
                  <div className="cart_extra cart_extra_2">
                    <div className="cart_extra_content cart_extra_total">
                      <div className="cart_extra_title">Cart Total</div>
                      <ul className="cart_extra_total_list">
                        <li className="d-flex flex-row align-items-center justify-content-start">
                          <div className="cart_extra_total_title">Subtotal</div>
                          <div className="cart_extra_total_value ml-auto">210.000</div>
                        </li>
                        <li className="d-flex flex-row align-items-center justify-content-start">
                          <div className="cart_extra_total_title">Shipping</div>
                          <div className="cart_extra_total_value ml-auto">Free</div>
                        </li>
                        <li className="d-flex flex-row align-items-center justify-content-start">
                          <div className="cart_extra_total_title">Total</div>
                          <div className="cart_extra_total_value ml-auto">210.000</div>
                        </li>
                      </ul>
                      <div className="checkout_button trans_200"><a href="">proceed to checkout</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default CartDetails;

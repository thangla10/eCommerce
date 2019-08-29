import React, { Component } from 'react';
import '../../assets/styles/home/hot-products.css';
import cartIcon from '../../assets/images/cart.svg';
import heart2Icon from '../../assets/images/heart_2.svg';
import shirt1 from  '../../assets/images/products/s1.jpg';
import shirt2 from  '../../assets/images/products/s2.jpg';
import shirt3 from '../../assets/images/products/s3.jpg';

class HotProducts extends Component {
  render() {
    return (
      <div className="super_container">
        <div className="super_container_inner">
          <div className="super_overlay"></div>
          <div className="products">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-3">
                  <div className="section_title text-center">Popular on Simple Men</div>
                </div>
              </div>
              <div className="row page_nav_row">
                <div className="col">
                  <div className="page_nav">
                    <ul className="d-flex flex-row align-items-start justify-content-center">
                      <li className="active"><a href="">Clothing</a></li>
                      <li><a href="">Shoes</a></li>
                      <li><a href="">Accessories</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row products_row">
                {/* Product */}
                <div className="col-xl-4 col-md-6">
                  <div className="product">
                    <div className="product_image"><img src={shirt1} alt="" /></div>
                    <div className="product_content">
                      <div className="product_info d-flex flex-row align-items-start justify-content-start">
                        <div>
                          <div>
                            <div className="product_name"><a href="product.html">Outdoor light crew</a></div>
                            <div className="product_category">In <a href="category.html">Category</a></div>
                          </div>
                        </div>
                        <div className="ml-auto text-right">
                          <div className="rating_r rating_r_4 home_item_rating"><i /><i /><i /><i /><i /></div>
                          <div className="product_price text-right">250.000<span>đ</span></div>
                        </div>
                      </div>
                      <div className="product_buttons">
                        <div className="text-right d-flex flex-row align-items-start justify-content-start">
                          <div className="product_button product_fav text-center d-flex flex-column align-items-center justify-content-center">
                            <div><div><img src={heart2Icon} className="svg" alt="" /><div>+</div></div></div>
                          </div>
                          <div className="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center">
                            <div><div><img src={cartIcon} className="svg" alt="" /><div>+</div></div></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Product */}
                <div className="col-xl-4 col-md-6">
                  <div className="product">
                    <div className="product_image"><img src={shirt2} alt="" /></div>
                    <div className="product_content">
                      <div className="product_info d-flex flex-row align-items-start justify-content-start">
                        <div>
                          <div>
                            <div className="product_name"><a href="product.html">Carhartt</a></div>
                            <div className="product_category">In <a href="category.html">Category</a></div>
                          </div>
                        </div>
                        <div className="ml-auto text-right">
                          <div className="rating_r rating_r_4 home_item_rating"><i /><i /><i /><i /><i /></div>
                          <div className="product_price text-right">190.000<span>đ</span></div>
                        </div>
                      </div>
                      <div className="product_buttons">
                        <div className="text-right d-flex flex-row align-items-start justify-content-start">
                          <div className="product_button product_fav text-center d-flex flex-column align-items-center justify-content-center">
                            <div><div><img src={heart2Icon} className="svg" alt="" /><div>+</div></div></div>
                          </div>
                          <div className="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center">
                            <div><div><img src={cartIcon} className="svg" alt="" /><div>+</div></div></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Product */}
                <div className="col-xl-4 col-md-6">
                  <div className="product">
                    <div className="product_image"><img src={shirt3} alt="" /></div>
                    <div className="product_content">
                      <div className="product_info d-flex flex-row align-items-start justify-content-start">
                        <div>
                          <div>
                            <div className="product_name"><a href="product.html">Habit tee 2.0</a></div>
                            <div className="product_category">In <a href="category.html">Category</a></div>
                          </div>
                        </div>
                        <div className="ml-auto text-right">
                          <div className="rating_r rating_r_4 home_item_rating"><i /><i /><i /><i /><i /></div>
                          <div className="product_price text-right">210.000<span>đ</span></div>
                        </div>
                      </div>
                      <div className="product_buttons">
                        <div className="text-right d-flex flex-row align-items-start justify-content-start">
                          <div className="product_button product_fav text-center d-flex flex-column align-items-center justify-content-center">
                            <div><div><img src={heart2Icon} className="svg" alt="" /><div>+</div></div></div>
                          </div>
                          <div className="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center">
                            <div><div><img src={cartIcon} className="svg" alt="" /><div>+</div></div></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row load_more_row">
                <div className="col">
                  <div className="load_more ml-auto mr-auto"><a href="#">load more</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default HotProducts;

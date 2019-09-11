import React, { Component } from 'react';
import '../../assets/styles/category/products.css';
import heartIcon from '../../assets/images/heart_2.svg';
import cartIcon from '../../assets/images/cart.svg';
import view_1 from '../../assets/images/view_1.png';
import view_2 from '../../assets/images/view_2.png';
import view_3 from '../../assets/images/view_3.png';
import product_1 from '../../assets/images/products/s2.jpg';

class CategoryProduct extends Component {
  render() {
    return (
      <div className="super_container">
        <div className="super_container_inner">
          <div className="super_overlay"></div>
          <div className="products">
            <div className="container">
              <div className="row products_bar_row">
                <div className="col">
                  <div className="products_bar d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-start justify-content-center">
                    <div className="products_bar_links">
                      <ul className="d-flex flex-row align-items-start justify-content-start">
                        <li><a href="#">All</a></li>
                        <li><a href="#">Hot Products</a></li>
                        <li className="active"><a href="#">New Products</a></li>
                        <li><a href="#">Sale Products</a></li>
                      </ul>
                    </div>
                    <div className="products_bar_side d-flex flex-row align-items-center justify-content-start ml-lg-auto">
                      <div className="products_dropdown product_dropdown_sorting">
                        <div className="isotope_sorting_text"><span>Default Sorting</span><i className="fa fa-caret-down" aria-hidden="true" /></div>
                        <ul>
                          <li className="item_sorting_btn" data-isotope-option="{ &quot;sortBy&quot;: &quot;original-order&quot; }">Default</li>
                          <li className="item_sorting_btn" data-isotope-option="{ &quot;sortBy&quot;: &quot;price&quot; }">Price</li>
                          <li className="item_sorting_btn" data-isotope-option="{ &quot;sortBy&quot;: &quot;name&quot; }">Name</li>
                        </ul>
                      </div>
                      <div className="product_view d-flex flex-row align-items-center justify-content-start">
                        <div className="view_item active"><img src={view_1} alt="" /></div>
                        <div className="view_item"><img src={view_2} alt="" /></div>
                        <div className="view_item"><img src={view_3} alt="" /></div>
                      </div>
                      <div className="products_dropdown text-right product_dropdown_filter">
                        <div className="isotope_filter_text"><span>Filter</span><i className="fa fa-caret-down" aria-hidden="true" /></div>
                        <ul>
                          <li className="item_filter_btn" data-filter="*">All</li>
                          <li className="item_filter_btn" data-filter=".hot">Hot</li>
                          <li className="item_filter_btn" data-filter=".new">New</li>
                          <li className="item_filter_btn" data-filter=".sale">Sale</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row products_row products_container grid">
                {/* Product */}
                <div className="col-xl-4 col-md-6 grid-item new">
                  <div className="product">
                    <div className="product_image"><img src={product_1} alt="" /></div>
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
                            <div><div><img src={heartIcon} className="svg" alt="" /><div>+</div></div></div>
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
              <div className="row page_nav_row">
                <div className="col">
                  <div className="page_nav">
                    <ul className="d-flex flex-row align-items-start justify-content-center">
                      <li className="active"><a href="#">01</a></li>
                      <li><a href="#">02</a></li>
                      <li><a href="#">03</a></li>
                      <li><a href="#">04</a></li>
                    </ul>
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
export default CategoryProduct;

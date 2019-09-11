import React, { Component } from 'react';
import '../../assets/styles/category/header.css';

class CategoryHeader extends Component {
  render() {
    return (
      <div className="super_container">
        <div className="super_container_inner">
          <div className="super_overlay"></div>
          <div className="category">
            <div className="category_container d-flex flex-column align-items-center justify-content-end">
              <div className="category_content text-center">
                <div className="category_title">Category Page</div>
                <div className="breadcrumbs d-flex flex-column align-items-center justify-content-center">
                  <ul className="d-flex flex-row align-items-start justify-content-start text-center">
                    <li><a href="#">Home</a></li>
                    <li><a href="category.html">Category</a></li>
                    <li>New Products</li>
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
export default CategoryHeader;

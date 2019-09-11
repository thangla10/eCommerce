import React, {Component} from 'react';
import CategoryHeader from './header.js';
import CategoryProduct from './products.js';
import '../../assets/styles/category/responsive.css';

class Category extends Component {
  render() {
    return(
      <React.Fragment>
        <CategoryHeader />
        <CategoryProduct />
      </React.Fragment>
    )
  }
}
export default Category;

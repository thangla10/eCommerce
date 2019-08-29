import React, { Component } from 'react';
import '../../assets/styles/home/responsive.css';
import Slide from './slide';
import Feature from './feature';
import Box from './boxes';
import HotProducts from './hot-products';
import Blog from './blog';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Slide />
        <Feature />
        <Box />
        <HotProducts />
        <Blog />
      </React.Fragment>
    )
  }
}
export default Home;

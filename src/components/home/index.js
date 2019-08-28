import React, { Component } from 'react';
import '../../assets/styles/home.css';
import Slide from './slide';
import Feature from './feature';
import Box from './boxes';
import HotProducts from './hot-products';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="super_container_inner">
          <div className="super_overlay"></div>
          <div className="home">
            <Slide />
          </div>
        </div>
        <Feature />
        <Box />
        <HotProducts />
      </React.Fragment>
    )
  }
}
export default Home;

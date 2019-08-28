import React, { Component } from 'react';
import '../../assets/styles/home.css';
import Slide from './slide';
import Feature from './feature';
import Box from './box';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="super_container_inner">
          <div class="super_overlay"></div>
          <div className="home">
            <Slide />
          </div>
        </div>
        <Feature />
        <Box />
      </React.Fragment>
    )
  }
}
export default Home;

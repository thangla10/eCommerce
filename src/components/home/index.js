import React, { Component } from 'react';
import '../../assets/styles/home.css';
import Slide from './slide';
import Feature from './feature';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
          <div className="home">
            <Slide />
          </div>
          <Feature />
      </React.Fragment>
    )
  }
}
export default Home;

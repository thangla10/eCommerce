import React, { Component } from 'react';
import '../../assets/styles/home.css';
import Slide from './slide';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="home">
          <Slide />
        </div>
      </React.Fragment>
    )
  }
}
export default Home;

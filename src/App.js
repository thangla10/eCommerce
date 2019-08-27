import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './assets/styles/responsive.css';
import {Switch,Route} from 'react-router-dom';
import Header from './components/include/header';

class App extends Component {
  render() {
    return(
      <React.Fragment>
        <Header />
      </React.Fragment>
    );
  }
}

export default App;

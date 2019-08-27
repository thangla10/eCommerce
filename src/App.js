import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './assets/styles/responsive.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/include/header';
import Menu from './components/include/menu';
import Footer from './components/include/footer';
import Home from './components/home/index';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Menu />
          <Header />
          <Switch>
            <Home />
          </Switch>
          <Footer />
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;

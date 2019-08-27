import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './assets/styles/responsive.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Header from './components/include/header';
import Menu from './components/include/menu';

class App extends Component {
  render() {
    return(
      <React.Fragment>
        <BrowserRouter>
          <Header />
          <Menu />
          <Switch>

          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;

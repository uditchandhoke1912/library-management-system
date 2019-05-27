import React, { Component } from 'react';
import DashBoard from './components/dashboard';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import {Provider} from "react-redux";

import store from "./store/store"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <DashBoard />
      </Provider>
    );
  }
}

export default App;

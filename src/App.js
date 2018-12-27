import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './styles/base.less';
import Home from './views/Home';
import City from './views/City';

class App extends Component {
  render() {
    return (
      // 一级（home，list）
      <HashRouter>
        <Switch>
          <Route path='/city' component={ City }></Route>
          <Route path='/' component={ Home }></Route>
        </Switch>
      </HashRouter>
    )
  }
}

export default App;

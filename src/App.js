import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './styles/base.less';
import Home from './views/Home';
import City from './views/City';
import store from './store';

class App extends Component {

  // 百度定位当前城市
  componentWillMount () {
    /* eslint-disable */
    var myCity = new BMap.LocalCity();
    myCity.get((result) => {
      let name = result.name.substr(0, result.name.length - 1);
      store.dispatch({
        type: 'SET_CURCITY',
        name
      })
      console.log('百度接口定位到当前城市为：',store.getState().city.curCity)
    })
  }

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

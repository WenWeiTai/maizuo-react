import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './index.less';
import store from '@/store';

class Orientation extends Component {
  constructor () {
    super()

    this.state = {
      curCity: store.getState().city.curCity
    }

    this.unsubscribe = store.subscribe(() => {
      console.log('主页定位——仓库状态有更新')
      this.setState({
        curCity: store.getState().city.curCity
      })
    })
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render() {
    return (
      <div className="city-fixed">
        <NavLink to='/city'>
          <span>{ this.state.curCity }</span>
          <i className="iconfont iconfont-arr_D"></i>
        </NavLink>
      </div>
    )
  }
}

export default Orientation;
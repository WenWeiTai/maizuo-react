import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './index.less';

// 引入仓库数据
import store from '@/store';

class Orientation extends Component {
  constructor () {
    super ()

    this.state = {
      curCity: store.getState().curCity
    }
    console.log(store)
    console.log(store.getState().curCity) // 拿到仓库城市状态
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
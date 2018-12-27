import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './index.less';

class Orientation extends Component {
  render() {
    return (
      <div className="city-fixed">
        <NavLink to='/city'>
          <span>深圳</span>
          <i className="iconfont iconfont-arr_D"></i>
        </NavLink>
      </div>
    )
  }
}


export default Orientation;
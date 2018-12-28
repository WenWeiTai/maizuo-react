import React from 'react';
import './index.less';

import '@/store';

class CityHeader extends React.Component {
  constructor (props) {
    super (props)
  }
  render () {
    return (
      <div className="header">
        <div className="close">
          <i className="iconfont">&#xe617;</i>
        </div>
        {/* 接收传递的props值 */}
        <div className="title">当前城市 - { this.props.curCity }</div>
      </div>
    )
  }
}

export default CityHeader;
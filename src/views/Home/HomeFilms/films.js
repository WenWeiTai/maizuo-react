import React, { Component } from 'react';
import './index.less';

// 轮播图
import Banner from '@/components/Swiper';

// 定位
import Orientation from '@/components/Orientation';

class Films extends Component {
  render() {
    return (
      <div className='films-list'>

        <Banner></Banner>

        <Orientation></Orientation>

      </div>
    )
  }
}

export default Films;

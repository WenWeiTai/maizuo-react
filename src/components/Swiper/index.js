import React from 'react';
import Swiper from 'swiper';

import './index.less';
import "swiper/dist/css/swiper.min.css";

class Banner extends React.Component {
  render () {
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img src={require('../images/pic-1.jpg')} alt=''/>
          </div>
          <div className="swiper-slide">
            <img src={require('../images/pic-2.jpg')} alt=''/>
          </div>
          <div className="swiper-slide">
            <img src={require('../images/pic-3.jpg')} alt=''/>
          </div>
          <div className="swiper-slide">
            <img src={require('../images/pic-4.jpg')} alt=''/>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    )
  }

  componentDidMount () {
    new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
      autoplay: true,
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    })
  }
}

export default Banner;

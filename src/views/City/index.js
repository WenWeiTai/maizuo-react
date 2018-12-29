import React, { Component } from "react";
import './index.less';

import CityHeader from '@/components/CityHeader';

import store from '@/store';

class City extends Component {
  constructor () {
    super ()

    this.state = {
      curCity: store.getState().city.curCity
    }

    // 监听仓库数据更新，本组件状态同步
    this.unsubscribe = store.subscribe(() => {
      console.log('城市列表头——仓库状态有更新')
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
      <div className="city-lits-box">
      {/* 将仓库当前的城市传递给城市列表头组件 */}
        <CityHeader curCity={ this.state.curCity }></CityHeader>
        <div className="search-city">
          <div className="search-input">
            <i className="iconfont">&#xe64d;</i>
            <input
              type="text"
              placeholder="输入城市名或拼音"
              v-model="inputVal"
            />
          </div>
        </div>
        <ul className="seach-ul">
          <li></li>
        </ul>
        <div className="city-list" v-show="isShowList">
          <ul className="list">
            <div className="recommend-city">
              <div className="gprs-city">
                <p className="city-title">GPS定位你所在城市</p>
                <div className="city-item">
                  <p className="city-item-text">1</p>
                </div>
              </div>
              <div className="hot-city">
                <p className="city-title">热门城市</p>
                <div className="city-item">
                  <p className="city-item-text">2</p>
                </div>
              </div>
            </div>

            <li className="list-section">
              <p className="section-title">3</p>
              <ul>
                <li>
                  <p>4</p>
                </li>
              </ul>
            </li>
          </ul>
          <div className="list-nav">
            <ul className="nav-index">
              <li>1</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default City;

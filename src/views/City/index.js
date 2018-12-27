import React, { Component } from "react";
import './index.less';

import store from '@/store';

import { setCity } from '@/store/actionsType';

class City extends Component {
  constructor () {
    super ()
    this.state = {
      curCity : store.getState().curCity
    }

    // 监听仓库状态更新情况
    store.subscribe(() =>  {
      console.log('仓库状态更新了')

      // 同步本组件状态
      this.setState({
        curCity: store.getState().curCity
      })

    })
  }

  render() {
    return (
      <div className="city-lits-box">
        <div className="header">
          <div className="close">
            <i className="iconfont">&#xe617;</i>
          </div>
          <div className="title">当前城市 - {this.state.curCity}</div>
          <button onClick={this.changeCity.bind(this,'深圳')}>更改成深圳</button>
        </div>
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

  changeCity (cityName) {
    store.dispatch({
      type: setCity,
      data: cityName
    })
  }

}

export default City;

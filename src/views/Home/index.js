import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './index.less';

// 导航页面组件
import Films from './HomeFilms/films';
import Cinema from './HomeCinema/cinema';
import Group from './HomeGroup/group';
import Center from './HomeCenter/center';

// 底部导航组件
import NavBar from '@/components/NavBar';

class Home extends Component {
  constructor (props) {
    super (props)

    this.state = {
      tabs: [
        { id: 'films', name: '电影', href: '/films'},
        { id: 'cinema', name: '影院', href: '/cinema'},
        { id: 'group', name: '9.9拼团', href: '/group'},
        { id: 'center', name: '我的', href: '/center'},
      ]
    }
  }
  render() {
    return (
      // 主页 —— 底部导航页面
      <div className='home'>
        <Switch>
          <Route path='/films' component={ Films }></Route>
          <Route path='/cinema' component={ Cinema }></Route>
          <Route path='/group' component={ Group }></Route>
          <Route path='/center' component={ Center }></Route>
          {/* 重定向 */}
          <Redirect to='/films' component={ Films }></Redirect>
        </Switch>

        {/* 底部导航 */}
        <NavBar tabs={this.state.tabs}></NavBar>
      </div>
    )
  }
}

export default Home;

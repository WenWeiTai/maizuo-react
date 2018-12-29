import React, { Component } from 'react';
import './index.less';
import store from '@/store';
import { InputItem, Flex, Button, WhiteSpace, List, Icon, Toast } from 'antd-mobile';
const Item = List.Item;

class Group extends Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this);
    this.addGroupList = this.addGroupList.bind(this);

    this.state = {
      value: '',
      listArr: store.getState().groupList
    }

    // subscribe() 会返回一个函数，这个函数被调用的话，就可以取消监听
    this.unsubscribe = store.subscribe(() => {
      console.log('group列表——仓库数据更新')
      this.setState({
        listArr: store.getState().groupList
      })
    })

  }

  // 当组件销毁时清除监听，防止下次组件重建时，累加触发
  componentWillUnmount () {
    this.unsubscribe()
  }

  onChange(value) {
    this.setState({
      value
    })
  }

  // 添加
  addGroupList() {
    if (!this.state.value) {
      Toast.info('请输入代办事件', 2, ()=>{
        this.refs.myInput.focus()
      });
      return
    }
    store.dispatch({
      type: 'ADD_LIST',
      name: this.state.value
    })

    this.setState({
      value: ''
    })
  }

  // 删除
  deleteGroupList(index) {
    store.dispatch({
      type: 'DEL_LIST',
      name: index
    })
  }

  render() {
    return (
      <div className='group-div'>
        <Flex>
          <Flex.Item style={{flex:2}}>
            <InputItem
              type='text'
              placeholder='请输入代办事件'
              value={this.state.value}
              onChange={this.onChange}
              ref="myInput"
            >
            </InputItem>
          </Flex.Item>

          <Flex.Item>
            <Button type="primary" size='large' onClick={this.addGroupList}>添加</Button>
          </Flex.Item>
        </Flex>

        <WhiteSpace size="lg" />

        <List>
          { this.state.listArr.map((item, index) => {
            return (
              <Item
              key={ index }
              extra={
                <Icon
                  type='cross'
                  color='#f00'
                  onClick={ this.deleteGroupList.bind(this, index) }>
                </Icon>}>
                { item }
              </Item>
            )
          }) }
        </List>
      </div>
    )
  }
}

export default Group;

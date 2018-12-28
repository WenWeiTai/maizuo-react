import React, { Component } from 'react';
import './index.less';
import { InputItem, Flex, Button, WhiteSpace, List, Icon  } from 'antd-mobile';
const Item = List.Item;

class Group extends Component {
  render() {
    return (
      <div className='group-div'>
        <Flex>
          <Flex.Item style={{flex:2}}>
            <InputItem
              type='text'
              placeholder='请输入代办事件'
            >
            </InputItem>
          </Flex.Item>

          <Flex.Item>
            <Button type="primary" size='large'>添加</Button>
          </Flex.Item>
        </Flex>

        <WhiteSpace size="lg" />

        <List>
            <Item extra={<Icon type='cross' color='#f00'></Icon>}>2018-12-28</Item>
            <Item extra={<Icon type='cross' color='#f00'></Icon>}>2018-12-28</Item>
            <Item extra={<Icon type='cross' color='#f00'></Icon>}>2018-12-28</Item>
        </List>
      </div>
    )
  }
}

export default Group;

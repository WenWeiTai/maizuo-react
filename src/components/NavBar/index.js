import React, { Component } from 'react';
import './index.less';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <ul className="footer">
        {
          this.props.tabs.map( item => {
            return (
              <li
                className={ item.id }
                key={ item.id }
              >
                <NavLink to={ item.href }>
                  <i className="img"></i>
                  <span>{ item.name }</span>
                </NavLink>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

export default NavBar;
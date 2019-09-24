import React from 'react'

import { Menu, Icon } from 'antd'

function Nav() {
  //   handleClick = e => {
  //     console.log('click ', e)
  //     this.setState({
  //       current: e.key
  //     })
  //   }

  return (
    <div className="nav-bar">
      <Menu mode="horizontal">
        <Menu.Item key="">
          <Icon type="home" />
          Home
        </Menu.Item>

        <Menu.Item key="">
          <Icon type="user" />
          About
        </Menu.Item>

        <Menu.Item key="">
          <Icon type="camera" />
          Gallery
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default Nav

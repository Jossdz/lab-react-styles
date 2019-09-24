import React from 'react'
import { Menu, Icon } from 'antd';

function Header() {
  return (
    <Menu className='menu' mode="horizontal">
      <Menu.Item key="home">
        <Icon type="home" />
      </Menu.Item>
      <Menu.Item key="app">
        <a href="https://www.youtube.com">
          <Icon type="youtube" />
          youtube
        </a>
      </Menu.Item>
      <Menu.Item key="google">
        <a href="https://www.google.com">
          <Icon type="google" />
          google
       </a>
      </Menu.Item>
    </Menu>
  );
}

export default Header
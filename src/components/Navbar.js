import React from 'react'
import { Menu, Icon, Button, Layout } from 'antd';

const { Header } = Layout;

class Navbar extends React.Component {
  render() {
    return (
      <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">About</Menu.Item>
        <Menu.Item key="3">Contact</Menu.Item>
      </Menu>
    </Header> 
    )
  }
}

export default Navbar
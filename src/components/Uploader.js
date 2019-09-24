import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import styled from 'styled-components'

const { SubMenu } = Menu

class App extends React.Component {
  state = {
    current: 'mail'
  }

  handleClick = e => {
    console.log('click ', e)
    this.setState({
      current: e.key
    })
  }

  render() {
    return (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="mail">
          <Icon type="mail" />
          Lucha libre Mexico
        </Menu.Item>
        <Menu.Item key="app" disabled>
          <Icon type="appstore" />
          Escoja tu luchador
        </Menu.Item>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Icon type="setting" />
              Luchadores
            </span>
          }
        >
          <Menu.ItemGroup title="Los mejores">
            <Menu.Item key="setting:1">Guille el Guapo</Menu.Item>
            <Menu.Item key="setting:2">Barbie Pocahontas</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Otros luchadores">
            <Menu.Item key="setting:3">Soberano</Menu.Item>
            <Menu.Item key="setting:4">Mistico</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    )
  }
}

export default App

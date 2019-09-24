import React from 'react'
import { Menu, Icon } from 'antd'
import styled from 'styled-components'

const { SubMenu } = Menu

export default function Nav() {
  return (
    <Menu
      mode="horizontal"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '5%'
      }}
    >
      <SubMenu
        title={
          <span className="submenu-title-wrapper">
            <Icon type="setting" />
            News Menu
          </span>
        }
      >
        <Menu.ItemGroup title="Item 1">
          <Menu.Item key="setting:1">Watch our Zoo TV</Menu.Item>
          <Menu.Item key="setting:2">Watch our Mayor</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="Item 2">
          <Menu.Item key="setting:3">Get the latest Weather Forecast</Menu.Item>
          <Menu.Item key="setting:4">Or go f*** yourself</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
    </Menu>
  )
}

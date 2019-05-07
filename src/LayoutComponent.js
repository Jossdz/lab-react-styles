import React from 'react'
import { Layout, Menu } from 'antd'

const { Header, Content, Footer } = Layout

function LayoutComponent(props) {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">Model S</Menu.Item>
          <Menu.Item key="2">Model 3</Menu.Item>
          <Menu.Item key="3">Model X</Menu.Item>
        </Menu>
      </Header>
      <Content>{props.children}</Content>
      <Footer style={{ textAlign: 'center' }}>©2018 Created by Jejetls</Footer>
    </Layout>
  )
}

export default LayoutComponent

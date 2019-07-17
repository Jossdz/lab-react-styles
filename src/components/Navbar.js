import React, { Component } from "react";
import { Layout, Menu } from "antd";
import Cards from "./Cards";
const { Header, Content, Footer } = Layout;

class Navbar extends Component {
  render() {
    return (
      <div>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>

        <Content style={{ padding: "0 0px" }}>
          <div style={{ background: "#fff", padding: 24 }}>
            <Cards />
            <p />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </div>
    );
  }
}

export default Navbar;

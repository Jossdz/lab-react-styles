import React from 'react';
import { Layout, Menu } from 'antd';
import logo from '../logo.svg';
const { Header } = Layout;

function IronHeader(){
	return(
<Header>
<div className="logo" />
	  <Menu
		 theme="dark"
		 mode="horizontal"
		 defaultSelectedKeys={['2']}
		 style={{ lineHeight: '64px' }}
	  >
	  </Menu>
	</Header>
	)
}

export default IronHeader
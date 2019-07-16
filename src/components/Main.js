import React, { Component } from 'react'
import { Layout} from 'antd';
import ButtonC from './Button';
import CardC from './Card';
import MainCard from './MainCard';
const {Content} = Layout;

class Main extends Component {
  render(){
    return(
      <Layout className="layout">
        
        <Content style={{ padding: '0 50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280, height: '150vh' }}>
           <MainCard/>
           <div className="BtnCrd" >
            <ButtonC/>
            <CardC/>
           </div>
          </div>
        </Content>
        
      </Layout>
    )
  }  
}

export default Main
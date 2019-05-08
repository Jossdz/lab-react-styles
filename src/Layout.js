import React from 'react'
import {Layout, Menu, Input, Row, Card, Button} from 'antd'


const {Header, Content, Footer} = Layout
const {Search} = Input
const {Meta} = Card

function LayoutComp(props) {
  return(
  <Layout>
  <Header>
   <Menu
      theme='dark'
      mode='horizontal'
      style={{lineHeight: '64px'}}>
     <Row type="flex" justify="space-around">
      <Menu.Item key="logo">
      <img src="https://yts.am/assets/images/website/logo-YTS.svg"/>
      </Menu.Item>
      <Menu.Item key="Search">
       <Search 
        placeholder="Quick Search"
        onSearch={value => console.log(value)} 
        style={{ width: 200 }}/>
      </Menu.Item>
      <Menu.Item key="Home">Home</Menu.Item>
      <Menu.Item key="Browse">Browse Movies</Menu.Item>
     </Row>
   </Menu>
  </Header>
  
  <Content>
    
    <Card
      hoverable
      style={{width: 150}}
      cover={<img src={props.image}/>}
      actions={[
        <Button type="primary" icon="cloud-download" ></Button>
      ]}
    >
    <Meta
     title={props.title}
     description={props.desc} 
      />
    </Card>
  </Content>
    
    <Footer>
    Pair de Regina y Felipe
    </Footer>
  
  </Layout>
    )
}

export default LayoutComp
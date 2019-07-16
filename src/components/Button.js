import React from 'react'
import { Button } from 'antd'

class ButtonC extends React.Component {
  render(){
    return (
      <div className='Btn'> 
      <Button type="primary">About</Button>
      <Button type="primary">Info</Button>
      </div>)
  }
}

export default ButtonC
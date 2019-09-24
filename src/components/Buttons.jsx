import React from 'react'
import { Button } from 'antd'

export default function Buttons() {
  return (
    <div>
      <Button type="primary" size="large" style={{margin: '5px 5px'}}>
        View our City
      </Button>
      <Button type="primary" size="large" style={{margin: '5px 5px'}}>Book a trip</Button>
      <Button type="dashed" size="large" style={{margin: '5px 5px'}}>
        Visit our offices
      </Button>
      <Button type="danger" size="large" style={{margin: '5px 5px'}}>
        Report a police indicent
      </Button>
    </div>
  )
}

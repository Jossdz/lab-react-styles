import React from 'react'
import { Button } from 'antd'

function DescriptionComponent() {
  return (
    <div className="container">
      <h1>Go anywhere</h1>
      <p>
        Tesla cars are fully electric, so you never need to visit a gas station
        again. If you charge overnight at home, you can wake up to a full
        battery every morning. And when you’re on the road, it’s easy to plug in
        along the way—at any public station or with the Tesla charging network.
        We currently have over 12,000 Superchargers worldwide, with six new
        locations opening every week.
      </p>
      <Button type="primary" shape="round" style={{ margin: 30 }}>
        Order now
      </Button>
      <Button type="primary" shape="round">
        Learn more
      </Button>
    </div>
  )
}

export default DescriptionComponent

import React from 'react'
import {Main, Button} from '../../styles'
const MainSection = (props) => {
  return (
    
      <Main id="about">   
        <p>TIM FERRISS has been called “a cross between Jack Welch and a Buddhist monk” by The New York Times. He is one of Fast Company’s “Most Innovative Business People” and an early-stage tech investor/advisor in Uber, Facebook, Twitter, Shopify, Duolingo, Alibaba, and 50+ other companies. He is also the author of four #1 New York Times and Wall Street Journal bestsellers: The 4-Hour Workweek, The 4-Hour Body, The 4-Hour Chef, and Tools of Titans. The Observer and other media have named him “the Oprah of audio” due to the influence of his podcast, The Tim Ferriss Show, which has exceeded 200 million downloads and been selected for “Best of iTunes” three years running.</p>
        <div>
        <Button type='left'>Left</Button>
        <Button >Right</Button>
        </div>
      </Main>
    
  )
}

export default MainSection

import React from 'react';
import Navbar from './components/Navbar/Navbar';
import MainSection from './components/Main/Main'
import FooterComponent from './components/Footer/Footer'
import './styles'
import { GlobalStyle } from './styles';
import CardComponent from './components/Card/Card';
import tim from './tim.jpeg'
import lastBook from './last-book.jpg'
import {CardContainer} from '../src/styles'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar liOne="About" liTwo="Cards" liThree="Footer" />
      <MainSection />
      <CardContainer id="cards">
        <CardComponent img={tim} text="Timothy Ferriss is an American entrepreneur, author and podcaster.  In 2001, Ferriss founded BrainQUICKEN, an internet-based nutritional supplements business, while still employed at his prior job.He successfully sold the company, then known as BodyQUICK, to a London-based private equity firm in 2010. He has stated that The 4-Hour Workweek was based on this period." />
        <CardComponent img={lastBook} text="Tim Ferriss, the #1 New York Times best-selling author of The 4-Hour Workweek, shares the ultimate choose-your-own-adventure book―a compilation of tools, tactics, and habits from 130+ of the world's top performers. From iconic entrepreneurs to elite athletes, from artists to billionaire investors, their short profiles can help you answer life's most challenging questions, achieve extraordinary results, and transform your life." />
      </CardContainer>
      <FooterComponent />
    </div>
  );
}

export default App;

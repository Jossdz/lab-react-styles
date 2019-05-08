import React, {Component} from 'react';
import './App.css';
import LayoutComp from './Layout';

class App extends Component {

  render(){
   return(
    <LayoutComp
      image="https://img.yts.am/assets/images/movies/the_lego_movie_2_the_second_part_2019/medium-cover.jpg"
      title="Lego"
      desc="Película patito de Lego"
    >
    </LayoutComp>
   
  )
  }
}

export default App;

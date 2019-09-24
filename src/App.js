import React from 'react';
import { Divider } from 'antd';
import Header from './components/Header';
import About from './components/About';
import Book from './components/Book';
import Story from './components/Story';
import Footer from './components/Footer';

import './App.css';

const App = () => (
  <div>
    <Header />
    <div className="back">
      <About />
      <Divider
        style={{
          margin: 0,
          backgroundColor: 'rgba(235, 229, 230, 1)'
        }}
      />
      <section className="books">
        <Book
          title="Cronica del pajaro de que da cuerda al mundo"
          image="http://ricardocartas.com/wp-content/uploads/2015/02/cronica_del_pajaro_que_da_cuerda_al_mundo.jpg"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium, dolor in tincidunt dictum, nisl tellus congue lorem, ullamcorper egestas sem ex non justo. "
        />
        <Book
          title="Sputnik, mi amor"
          image="http://www2.alibris-static.com/sputnik-mi-amor/isbn/9788483835166_l.jpg"
        />
        <Book
          title="Sauce ciego, Mujer dormida"
          image="https://kozmicbooks.files.wordpress.com/2009/09/9788483830475.jpg"
          description="Suspendisse consectetur justo massa, ut rutrum nulla vestibulum id. In fermentum ante non sem condimentum tempor non nec mi. Integer eu tortor varius, vestibulum enim eget, aliquet mi. Praesent vehicula nulla et diam venenatis, hendrerit elementum risus interdum."
        />
        <Book
          title="Tokio Blues"
          image="https://www.yam-mag.com/wp-content/uploads/2010/02/haruki-murakami-norwegian-wood-tokio-blues.jpg"
          description="Ut neque purus, placerat sit amet suscipit ac, sagittis quis sapien. Aliquam erat volutpat. Morbi nec sollicitudin nunc. Etiam vitae neque metus. "
        />
      </section>
      <Divider
        style={{
          margin: 0,
          backgroundColor: 'rgba(235, 229, 230, 1)'
        }}
      />
      <Story />
    </div>
    <Footer />
  </div>
);

export default App;

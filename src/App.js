import React from 'react';
import './App.css';
import { Button } from 'antd';
import Uploader from './components/Header';
import Carrousel from './components/Carrousel';
import Header from './components/Header';
import Ahri from './components/Ahri';
import Pie from './components/Pie';


function App() {
  return (
    <>
    <nav id="nav">
      <Header id="head">
        <div>
        <span>LaAhri</span>
        <div id="botones">
          <Button class="boton" type="dashed">Inicio</Button>
          <Button class="boton" type="dashed"> Biografía</Button>
          <Button class="boton" type="dashed"> Salir ALv de Aqui</Button>
        </div>
        </div>
      </Header>
      
      <div id="carrousel">
    <Carrousel />  
    </div>
    </nav>
    <div id="divson">
    <span id="bio">Ahri, conectada de forma innata con el poder latente de Runaterra, es una vastaya que puede moldear la magia en forma de orbes de energía pura. Se divierte manipulando las emociones de su presa antes de devorar su esencia vital. A pesar de su naturaleza depredadora, Ahri conserva una sensación de empatía porque recibe destellos de los recuerdos de cada alma que consume.</span>
    <Button class="boton" type="primary">QUE ES EL LOL?</Button>
          <Button class="boton" type="primary"> QUE ES LA AHRI?</Button>
    </div>
    <div id="ahri">
      <Ahri></Ahri>
      <Ahri></Ahri>
      <Ahri></Ahri>
    </div>
    <footer>
      <Pie></Pie>
    </footer>
    </>
  );
}

export default App;

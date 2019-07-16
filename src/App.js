import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navbar, Footer, Card, Main, Div2 } from "./styles";

function App() {
  return (
    <div className="App">
      <Navbar>
        <a href="/">Life </a>
        <a href="/">Songs</a> <a href="/">Albums</a>
      </Navbar>
      <Main>
        <p>
          Joaquín Ramón Martínez Sabina (Úbeda, Jaén, 12 de febrero de 1949),
          conocido como Joaquín Sabina, es un cantautor, poeta y pintor español.
          Ha publicado diecisiete discos de estudio, cinco en directo y tres
          recopilatorios y colaborado con distintos artistas cantando dúos y
          realizando otras colaboraciones. Se estima que ha vendido más de diez
          millones de discos y también ha compuesto para otros artistas como Ana
          Belén, Andrés Calamaro o Miguel Ríos, entre otros. Los álbumes en
          directo son grabaciones de actuaciones en las que ha intervenido en
          solitario o junto con otros artistas: La mandrágora (1981), junto a
          Javier Krahe y Alberto Pérez; Joaquín Sabina y Viceversa en directo
          (1986), junto a la banda Viceversa; Nos sobran los motivos (2000); Dos
          pájaros de un tiro (2007), La orquesta del Titanic (2012), y El
          simbolo y el cuate (2014) junto a Joan Manuel Serrat. En su faceta
          literaria ha publicado nueve libros con recopilaciones de letras de
          canciones o poemas publicados en el semanario Interviú. En 2001 sufrió
          un leve infarto cerebral que puso su vida en peligro, recuperándose
          unas pocas semanas más tarde sin sufrir secuelas físicas, pero el
          incidente influyó en su forma de pensar y se vio inmerso en una
          importante depresión, lo que le llevó a abandonar los escenarios un
          tiempo. Tras superarla, publicó Dímelo en la calle (2002), al que
          seguiría su decimoctavo álbum, Alivio de luto (2005). El 17 de
          noviembre de 2009 publicó Vinagre y rosas, del que se vendieron
          200.000 copias en tan sólo un mes de su lanzamiento, consiguiendo tres
          discos de platino.2​ El 10 de marzo de 2017 estrenó Lo niego todo
        </p>
        <button>Albums</button>
        <button>Songs</button>
      </Main>
      <Div2>
        <Card>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeHZclcy1B3j7Y8Ly-EZvpZ33vJvApGzxKMqjIa9UdSPf4LC9g1g" />
          <a href="https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.smehost.net%2Fjsabinacom-mendivilprod%2Fwp-content%2Fuploads%2F2015%2F10%2F24122923%2FJoaquin_Sabina-500_Noches_Para_Una_Crisis_En_Directo-Frontal.jpg&imgrefurl=https%3A%2F%2Fwww.jsabina.com%2Fdiscografia%2F&docid=RkMtTp78aEKcsM&tbnid=IxC_S6uHryqZ9M%3A&vet=10ahUKEwj2psXDgLrjAhVPK80KHZc_BAgQMwhgKAEwAQ..i&w=953&h=953&bih=821&biw=1440&q=albums%20joaquin%20sabina&ved=0ahUKEwj2psXDgLrjAhVPK80KHZc_BAgQMwhgKAEwAQ&iact=mrc&uact=8">
            500 Noches para una Crisis
          </a>
        </Card>
        <Card>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVLGQ3AZcXzZwZP5iFCbyXRBNPsjf5LVivEyp--q_4hv7ih3l8dA" />
          <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVLGQ3AZcXzZwZP5iFCbyXRBNPsjf5LVivEyp--q_4hv7ih3l8dA">
            Yo, mi me contigo
          </a>
        </Card>
      </Div2>
      <Footer>
        <p>
          Fecha: Viernes 29 y Sábado 30 de Noviembre de 2019 a las 21:00 horas
          (Apertura de puertas una hora antes) Lugar: Auditorio Nacional de
          México Dirección: Paseo de la Reforma, Ciudad de México DF, México DF
        </p>
      </Footer>
    </div>
  );
}

export default App;

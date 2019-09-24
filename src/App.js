import React from 'react'
import './App.css'
import Nav from './components/Nav'
import Main from './components/Main'
import CardItem from './components/Card'
import FooterItem from './components/Footer'

const App = () => {
  return (
    <div>
      <Nav></Nav>
      <Main></Main>
      <div className="cards">
        <CardItem
          image="https://images-na.ssl-images-amazon.com/images/I/811DR6fJ8IL._SL1500_.jpg"
          title="PRISM"
          description="Prism es el tercer álbum de estudio de la cantante estadounidense Katy Perry, publicado el 22 de octubre de 2013 por el sello discográfico Capitol."
        />
        <CardItem
          image="https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/TheCompleteConfectionCover.png/220px-TheCompleteConfectionCover.png"
          title="Teenage Dream"
          description="Teenage Dream —en español: Sueño Adolescente es el segundo álbum de estudio de la cantante estadounidense Katy Perry, y el segundo publicado bajo su nombre artístico actual."
        />
        <CardItem
          image="https://http2.mlstatic.com/katy-perry-one-of-the-boys-D_NQ_NP_423711-MLM20605516986_022016-F.jpg"
          title="One Of the boys"
          description="One of the Boys —en español: Uno de los chicos —​ es el álbum debut de la cantante y compositora estadounidense Katy Perry, publicado bajo su nombre artístico actual.​​"
        />
      </div>
      <div>
        <FooterItem />
      </div>
    </div>
  )
}

export default App

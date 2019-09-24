import React from 'react'
import App from './components/Uploader'
import './App.css'
import Card from './components/Nav'

function fun() {
  return (
    <div className="card">
      <App></App>
      <div className="main">
        <h1>Lucha libre</h1>
        <p>
          La lucha libre es la versión de la lucha estilo libre o lucha olímpica que se practica en México,caracterizada
          por su estilo de llaveo a ras de lona y aéreo. Se evoca el término "mexicana" por las diferencias en la
          técnica luchística, acrobacias, reglas y folklore propio del país que le da una característica de autenticidad
          con respecto hacia la lucha de otros países. De ella surgen personajes míticos de la cultura popular, como El
          Santo, Blue Demon, Huracán Ramírez, El Solitario, Black Shadow, Mil Máscaras, Rayo de Jalisco, Canek,
          Tinieblas, Super Muñeco, Cavernario Galindo, Solar, Atlantis, Super Astro, Lizmark, Octagón, Blue Panther,
          entre otros. La lucha libre es una mezcla de deporte y secuencias teatrales que en México es el
          deporte-espectáculo más popular, sólo por debajo del fútbol. La lucha libre mexicana está caracterizada por
          sus estilos de sumisiones rápìdas y acrobacias elevadas, así como peligrosos saltos fuera del ring; gran parte
          de estos movimientos han sido adoptados fuera de México. Muchos de sus luchadores son enmascarados, es decir,
          utilizan una máscara para ocultar su identidad verdadera y crear una imagen que les dé una personalidad
          especial. Los luchadores pueden poner en juego su máscara al enfrentar un combate contra otro luchador
          enmascarado (máscara contra máscara) o bien con uno no enmascarado (máscara contra cabellera), pero al
          perderla no la pueden volver a portar nunca jamás en su carrera deportiva, aunque se han suscitado casos de
          luchadores que vuelven a enmascararse tal es el caso de luchadores como Rey Misterio Jr. y Psicosis. A la
          lucha libre mexicana se le da una temática de rudeza haciéndola ver clandestina, cómo lo son las peleas de
          gallos. Cabe señalar que en el resto del mundo, fuera de Iberoamérica (sobre todo en los Estados Unidos y en
          Japón), al estilo de la lucha libre mexicana se le conoce por su nombre en castellano, lucha libre (sin
          importar el idioma). En México también se le conoce como pancracio, (que es el término utilizado en la Grecia
          clásica para denominar a ésta actividad) así como también el arte del catch. En México las principales
          empresas son el Consejo Mundial de Lucha Libre, Lucha Libre AAA Worldwide, International Wrestling Revolution
          Group, Alianza Universal de Lucha Libre, The Crash y DTU. La lucha libre mexicana es muy popular también en
          Japón, donde fue exportada por luchadores como Último Dragón, The Great Sasuke y Super Delfín, quienes crearon
          una fusión de la lucha libre mexicana y el puroresu llamada lucharesu. Algunas empresas, principalmente las
          fundadas por estos tres luchadores, usan reglas y costumbres de la variante mexicana.
        </p>
      </div>

      <div className="nav">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <div className="footer">
        <span>
          Este es el footer <footer></footer>
        </span>
      </div>
    </div>
  )
}

export default fun

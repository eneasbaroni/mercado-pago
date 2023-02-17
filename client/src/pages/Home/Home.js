import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <main className='sectionContainer home'>
      <div className='firstDiv'></div>
      <div className='homeContainer'>
        <h1>BIENVENIDO A <br/><span>D'art</span> CERAMICA</h1>
        <p className='homeFirstP'>D'art fue fundado en 1996, como un emprendimiento que buscaba crear piezas únicas y auténticas. De un estilo diferente, pero manteniendo un caracter minimalista. Nuestros ceramistas expertos trabajan con gran dedicación para crear piezas sofisticadas que combinan el diseño moderno con la artesanía tradicional. Cada pieza es única, ya que está hecha a mano con materiales de la más alta calidad.</p>
        {<Link to ='/catalog'><img src='./images/bg01.webp' alt='Logo' /></Link>}
        <p className='homeSecondP'>La belleza de la cerámica artesanal radica en su carácter auténtico y su singularidad, y es precisamente lo que se produce en D'art. Encontrarás una amplia variedad de piezas minimalistas, todas con un estilo elegante y sofisticado. Estamos comprometidos con la calidad y la satisfacción del cliente, y estamos seguros de que encontrarás la pieza perfecta para tu hogar. Navega por nuestro sitio web y descubre por ti mismo/a la belleza de la cerámica artesanal.</p>
      </div>
      <div className='lastDiv'></div>      
    </main>
  )
}

export default Home
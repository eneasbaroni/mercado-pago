import { Link } from 'react-router-dom'
import './Footer.css'

export const Footer = () => {
  return (
    <footer className='divContainer footer'>
    <div className='firstDiv'></div>
    
    <nav className='footerContainer'>        
      <h3>© 2023 D'art CERAMICA - Todos los derechos reservados</h3>
      <Link to='https://eneasbaroni.com.ar/' target="_blank">Diseño y Desarrollo x ENEAS</Link>
    </nav>
    <div className='lastDiv'></div>
  </footer>
  )
}

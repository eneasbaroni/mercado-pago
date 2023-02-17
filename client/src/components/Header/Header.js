import { useState } from 'react'
import { Link } from 'react-router-dom'
import useScreenSize from '../../hooks/useScreenSize'
import Cart from '../Cart/Cart'
import './Header.css'
import MobileMenu from './MobileMenu'


const Header = () => {

  const windowSize = useScreenSize()
  const [cart, setCart] = useState(false) 
  const [mobileMenu, setMobileMenu] = useState(false)
  

  const closeCart = () => {
    setCart(false)
  }

  const closeMobileMenu = () => {
    setMobileMenu(false)
  }


  return (
    <header className='divContainer header'>
      <div className='firstDiv'></div>
      
      {windowSize.width > 576 
        ?      
          <nav className='navbar'>
            <Link to='/about'>Nosotros</Link>
            <Link to='/'><img src='/images/logo.svg' alt='Logo' /></Link>
            <Link to='/catalog'>Catálogo</Link> 
          </nav>
        :
          <nav className='navbar'>            
              <Link to='/'><img src='/images/logo.svg' alt='Logo' /></Link>
              <div className='burgerMenu' onClick={() => setMobileMenu(!mobileMenu)}>
                <div className='line1'></div>
                <div className='line2'></div>
              </div>
          </nav>
      }
      {mobileMenu && <MobileMenu closeMobileMenu={closeMobileMenu}/>}
      <div className='lastDiv cartIcon'><img src='/images/cart.svg' alt='cart icon' onClick={() => setCart(!cart)}/></div>

      {cart && <Cart closeCart={closeCart}/>}
    </header>
  )
}

export default Header
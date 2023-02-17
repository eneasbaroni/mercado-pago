import './Cart.css'
import CartContext from '../../context/cartContext'
import { useContext, useEffect, useState } from 'react'
import CartProduct from './CartProduct'
import { Link } from 'react-router-dom'

const Cart = ({closeCart}) => {
  const [rightPosition, setRightPosition] = useState("-100%")
  const {cart} = useContext(CartContext)

  useEffect(() => {
    setTimeout(() => {
      setRightPosition("0")
    }, 100)
    
  }, [])

  const setCloseCart = () => {
    setRightPosition("-100%")
    setTimeout(() => {
      closeCart()
    }, 500)
  } 


  return (
    <section className='sectionContainer cart'>
      <div className='cartContainer' style={{right: rightPosition}}>
        <div className='cartHeader'>
          <h2 className='cartTitle'>Your cart</h2> 
          <button className='closeCart' onClick={setCloseCart}>X</button>
        </div>
        <div className='cartItemsContainer'>
          {cart.length === 0 
            ? 
              <h2 className='emptyCart'>Your cart is empty</h2> 
            :         
              cart.map(product => (
                <CartProduct product={product} key={product.id}/>
              ))  
          } 
        </div> 
        {cart.length > 0 
          && 
            <>
              <h2 className='cartTotal'>Total: ${cart.reduce((acc, product) => acc + product.price * product.quantity, 0)}</h2> 
              <Link to='/checkout' className='checkoutBtn' onClick={setCloseCart}>CHECKOUT</Link>  
            </>
        } 
      </div>     
    </section>
  )
}

export default Cart
import { useContext } from 'react'
import CartContext from '../../context/cartContext'
import './Cart.css'

const CartProduct = ({product}) => {
  const {removeFromCart} = useContext(CartContext)


  return (
    <div className='cartProductContainer'>
      <img src={product.image} alt={product.name} />
      <div>
        <h4>{product.name}</h4>
        <p>${product.price}</p>        
        <p>Cantidad: {product.quantity}</p>
        <p className='productDltBtn' id={product.id} onClick={() => removeFromCart(product.id)}>Borrar</p>
      </div>
    </div>
  )
}

export default CartProduct
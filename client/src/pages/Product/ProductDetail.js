import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Counter from './Counter'
import CartContext from '../../context/cartContext'
import './Product.css'

const ProductDetail = ({product}) => {

  const {addToCart} = useContext(CartContext)

  const addProduct = (amount) => {    
    addToCart (product, amount )    
  }

  return (
    <div className='productDetailContainer'>
      <div className='productDetailImg'>
        <img src={product.image} alt={product.name} className='productDetailImage' />
      </div>
      <div className='productInfo'>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p className='productPrice'>${product.price}</p>
        <Counter addProduct={addProduct}/>
        <Link to='/catalog'>Volver a Catalogo </Link>

      </div>               
    </div>
  )
}

export default ProductDetail
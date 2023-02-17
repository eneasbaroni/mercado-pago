import './Catalog.css'
import { Link } from 'react-router-dom'

const Product = ({product}) => {
  return (
    <div className='productContainer'>
      <img src={product.image} alt={product.name} />
      <div className='productTitles'>
        <h3>{product.name}</h3>  
        <Link to={`/catalog/${product.id}`}>View Detail →</Link>
      </div>

    </div>
  )
}

export default Product
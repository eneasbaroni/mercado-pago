import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Product.css'
import ProductDetail from './ProductDetail';
import products from '../../dataBase/dataBase.js'

const Product = () => {  
  const [product, setProduct] = useState({})

  /* Obtener id desde la url */
  const { pathname } = useLocation();

  useEffect(() => {
    const id = pathname.split('/')[2]
    /* buscar producto en la BD */
    const product = products.find((product) => product.id.toString() === id)
    setProduct (product)    
  }, [pathname])

  return (
    <main className='sectionContainer product'>
      <div className='firstDiv'></div>
        { product ? <ProductDetail product={product} />: <h1>Producto no encontrado</h1> }        
      <div className='lastDiv'></div> 
    </main>
  )
}

export default Product
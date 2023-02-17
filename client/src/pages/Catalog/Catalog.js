import './Catalog.css'
import products from '../../dataBase/dataBase.js'
import Product from './Product'

const Catalog = () => {
  return (
    <main className='catalog'>
      <div className='firstDiv'></div>
      <section> 
        <h1>CATALOGO</h1>
        <div className='catalogContainer'>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}      
        </div>
      </section>
      <div className='lastDiv'></div>

    </main>
  )
}

export default Catalog
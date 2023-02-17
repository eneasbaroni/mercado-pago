import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import CartContext from '../../context/cartContext'
import './Checkout.css'
import Loader from '../../components/Loader/Loader'

const Checkout = () => {
  const {cart, getCart} = useContext(CartContext)
  const [products, setProducts] = useState([])  
  const [orderId, setOrderId] = useState()
  const [loader, setLoader] = useState(false)

  const [payer, setPayer] = useState({
    name: '',
    phone: '',
    identification: '',
    address: '',
  })

  const handleChange = (e) => {
    setPayer({
      ...payer,
      [e.target.name]: e.target.value
    })
  }

  // Expresiones regulares para los campos del formulario
  const nombreRegex = /^[a-zA-ZÀ-ÿ\s]{2,25}$/i  // eslint-disable-next-line
  const telefonoRegex = /^[\+]?[0-9]{3,20}$/im // eslint-disable-next-line
  const emailRegex = /^[\w_\.-]+@[\w\.-]+\.[a-z\.]{2,6}$/i    


  useEffect(() => {
    /* obtener cart y alojarlo en productos */         
    const products = getCart().map(product => {
      return {
        id: product.id,
        title: product.name,
        //description: product.description, //la descripcion no puede superar los 256 caracteres, por ende vamos a usar el title
        description: product.name,
        unit_price: product.price,
        currency_id: "ARS", //moneda argentina
        quantity: product.quantity,
      }
    })
    setProducts(products)// eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (orderId) {
      const script = document.createElement('script');
      script.src = "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
      script.dataset.preferenceId = orderId;
      script.dataset.buttonLabel = "PAGAR";       
      const mercadopagoBtn = document.getElementById('mercadopago')
      mercadopagoBtn.innerHTML = ''
      mercadopagoBtn.appendChild(script)    
    }
  }, [orderId])
  

  const handleSubmit = (e) => {
    e.preventDefault()  
    setLoader(true)

    axios({
      method: 'post',
      withCredentials: true,
      url: 'http://localhost:8080/checkout',  //cambiar cuando se suba el server a un hosting    
      data: {
        payer,
        products
      },
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      setOrderId(res.data)
      setLoader(false)
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <main className='sectionContainer checkout'>
    <div className='firstDiv'></div>
      {loader && <Loader/>}
      
        <div className='checkoutContainer'>
        {cart.length === 0 
          ? <h2 className='checkoutTitle'>No hay productos en el carrito</h2>
          :
            <>
              <h2 className='checkoutTitle'>Datos de Contacto</h2>        
              <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">NOMBE</label>
                  <input type="text" className="form-control" name="name" id="name" placeholder="Nombre" required onChange={handleChange}/>
                </div>
                <div className="form-group">
                  <label htmlFor="name">NUMERO DE TELEFONO</label>
                  <input type="text" className="form-control" name="phone" id="phone" placeholder="Numero de Teléfono" required onChange={handleChange}/>
                </div>
                <div className="form-group">
                  <label htmlFor="name">EMAIL</label>
                  <input type="text" className="form-control" name="identification" id="identification" placeholder="Email" required onChange={handleChange}/>
                </div>
                <div className="form-group">
                  <label htmlFor="name">DIRECCION</label>
                  <input type="text" className="form-control" name="address" id="address" placeholder="Dirección" required onChange={handleChange}/>
                </div>
                <div className="form-button">
                  {nombreRegex.test(payer.name) && telefonoRegex.test(payer.phone) && emailRegex.test(payer.identification) && payer.address
                  ? <button type="submit" className="addBtn">CHECKOUT</button> 
                  : <button type="submit" className="addBtnDsbl" disabled>CHECKOUT</button>}          
                </div>
              </form>
            </>
      }
      <div id='mercadopago'></div>
      </div>  
      
    <div className='lastDiv'></div>    
  </main>
  )
}

export default Checkout
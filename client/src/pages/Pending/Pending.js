import './Pending.css'

const Pending = () => {
  return (
    <main className='sectionContainer pending'>
      <div className='firstDiv'></div>
      <div className='pendingContainer'>
        <div className='pendingDate'>
          <h1>Tu pago se encuentra <span>pendiente</span>. Apenas se concrete no podremos en contacto vía mal para informate sobre <span>la entrega de los productos</span></h1>          
        </div>        
      </div>
      <div className='lastDiv'></div>      
    </main>
  )
}

export default Pending
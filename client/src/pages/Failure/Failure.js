import './Failure.css'

const Failure = () => {
  return (
    <main className='sectionContainer failure'>
      <div className='firstDiv'></div>
      <div className='failureContainer'>
        <div className='failureDate'>
          <h1>Tu pago fue <span>rechazado</span>. Por favor intentalo de nuevo</h1>          
        </div>        
      </div>
      <div className='lastDiv'></div>      
    </main>
  )
}

export default Failure
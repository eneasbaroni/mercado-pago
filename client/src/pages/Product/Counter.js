import './Product.css'
import { useState } from 'react';

const Counter = ({addProduct}) => {
  const [counter, setCounter] = useState(1)
 

  const handleCounter = (e) => {
    if (e.target.textContent === '+') {
      setCounter(counter + 1)
    } else if (e.target.textContent === '-' && counter > 1) {
      setCounter(counter - 1)
    }
  }


  return (
    <div className='counter'>
      <div className='counterContainer'>        
        <button className='counterBtn' onClick={handleCounter}>-</button>
        <p className='counterNumber'>{counter}</p>
        <button className='counterBtn' onClick={handleCounter}>+</button>
      </div>
      <button className='addToCartBtn' onClick={() => addProduct(counter)}>Add to cart</button>
    </div>
  )
}

export default Counter
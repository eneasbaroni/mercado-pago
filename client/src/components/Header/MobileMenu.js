import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const MobileMenu = ({closeMobileMenu}) => {
  const [topPosition, setTopPosition] = useState("-100%")

  useEffect(() => {
    setTimeout(() => {
      setTopPosition("0")
    }, 100)
    
  }, [])

  const setCloseMobileMenu = () => {
    setTopPosition("-100%")
    setTimeout(() => {
      closeMobileMenu()
    }, 500)
  }

  return (
    <div className='mobileMenu' style={{top: topPosition}}>
      <h3 onClick={setCloseMobileMenu}>X</h3>
      <div><Link to='/about' onClick={setCloseMobileMenu}>Nosotros</Link></div>
      <div><Link to='/' onClick={setCloseMobileMenu}>Home</Link></div>
      <div><Link to='/catalog' onClick={setCloseMobileMenu}>Catálogo</Link> </div>
    </div>
  )
}

export default MobileMenu
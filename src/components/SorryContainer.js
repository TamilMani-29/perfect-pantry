import React from 'react'
import sorryBackground from '../assets/general-images/sorry2.png'
const SorryContainer = () => {
  return (
    <div className='sorry-container'>
        <div className='sorry-text'>Sorry! The item you searched for doesn't seem to exist</div>
        <div className='sorry-background'>
            <img src={sorryBackground} alt='sorry-background'/>
        </div>
        <div className='sorry-text'>Please Try Again</div>
    </div>
  )
}

export default SorryContainer
import React from 'react'
import successImg from '../assets/general-images/purchase-success.jpg'

const BuySuccess = ({handleClose}) => {

  return (
    <div className='buy-container'>
        <div className='buy-result-container'>
            <span className='close-popup' onClick={handleClose} data-testid="close-icon">&times;</span>
            <div className='buy-success-msg'>
                Hurray! Products Bought Successfully
            </div>
            <div className='purchase-img'>
                <img className='purchase-success' src={successImg} alt='success-img' />
            </div>
        </div>
    </div>
  )
}

export default BuySuccess
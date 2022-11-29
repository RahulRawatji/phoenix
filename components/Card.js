import React from 'react'
import Image from 'next/image';

import cardImg from '../assets/muk1.jpg';

const Card = () => {
  return (
    <div className='card'>
        <div className='card_img'>
            <Image src={cardImg} fill={true} style={{ borderRadius: '15px'}}/>
        </div>
        <h3>Mukteshwar</h3>
        <p>₹ 5999 /-</p>
    </div>
  )
}

export default Card
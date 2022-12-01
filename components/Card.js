import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import cardImg from '../public/assets/dar2.jpg';

const Card = () => {
  return (
    <Link href="/treks">
    <div className='card'>
      <div className='card_img_container'>
        <Image src={cardImg} className="card_img"/>
      </div>
      <div className='card__content'>
        <h3>Mukteshwar</h3> 
        <span>3 Days</span>
        <p>Hiking,Camping</p>
        <span>Beginnner</span>
        <p>₹ 5999 /-</p>
      </div>
    </div>
    </Link>
  )
}

export default Card
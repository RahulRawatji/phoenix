import React from 'react';
import Link from 'next/link';

import {GiMountains} from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className='navbar'>
       <GiMountains size={50}/> 
       <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/aboutUs">About Us</Link>
          </li>
          <li>
            <Link href="/">Blog</Link>
          </li>
       </ul>
    </nav>
  )
}

export default Navbar
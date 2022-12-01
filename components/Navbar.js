import React from 'react'
import {GiMountains} from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className='navbar'>
       <GiMountains size={50}/> 
       <ul>
            <a href="/"><li>Home</li></a>
            <a href="/aboutUs"><li>About Us</li></a>
            <a href=""><li>Blog</li></a>
       </ul>
    </nav>
  )
}

export default Navbar
import React, {useRef, useState} from 'react';
import Link from 'next/link';

import {GiMountains, GiHamburgerMenu} from "react-icons/gi";

const Navbar = () => {
  const navList = useRef();
  const [navBarVisible, setNavBarVisible] = useState(false)
  const showNavBar = ()=>{
    if(navBarVisible){
      navList.current.classList.remove('show_nav');
    }else{
      navList.current.classList.add('show_nav')
    }
    setNavBarVisible(!navBarVisible)
  }

  return (
    <nav className='navbar'>
       <GiMountains size={50}/> 
       <ul className='nav_list' ref={navList}>
          <li className='nav_item'>
            <Link href="/">Home</Link>
          </li>
          <li className='nav_item'>
            <Link href="/aboutUs">About Us</Link>
          </li>
          <li className='nav_item'>
            <Link href="/">Blog</Link>
          </li>
       </ul>
       <button className='nav_button'>
          <GiHamburgerMenu size={25} onClick={()=>showNavBar()}/>
       </button>
    </nav>
  )
}

export default Navbar
import React, { useRef, useState } from 'react';
import Link from 'next/link';

import { GiMountains, GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const navList = useRef();
  const [navBarVisible, setNavBarVisible] = useState(false)
  const showNavBar = () => {
    if (navBarVisible) {
      navList.current.classList.remove('show_nav');
    } else {
      navList.current.classList.add('show_nav')
    }
    setNavBarVisible(!navBarVisible)
  }

  return (
    <nav className='navbar'>
      <GiMountains size={50} />
      <ul className='nav_list' ref={navList}>
        <Link href="/">
          <li className='nav_item'>Home</li>
        </Link>
        <Link href="/aboutUs">
          <li className='nav_item'>About Us</li>
        </Link>
        <Link href="/">
          <li className='nav_item'>Blog</li>
        </Link>
      </ul>
      <button className='nav_button'>
        <GiHamburgerMenu size={25} onClick={() => showNavBar()} />
      </button>
    </nav>
  )
}

export default Navbar
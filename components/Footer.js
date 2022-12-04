import React from 'react'
import { SlSocialInstagram, SlSocialSpotify, SlSocialYoutube } from "react-icons/sl";
import { TiSocialTwitter, TiSocialFacebook } from "react-icons/ti";
import Link from 'next/link';

function Footer() {
  return (
    <footer>
        <div className='social_icons'>
            <SlSocialInstagram size={30}/>
            <SlSocialSpotify size={30}/>
            <SlSocialYoutube size={30}/>
            <TiSocialTwitter size={30}/>
            <TiSocialFacebook size={30}/>
        </div>
        <div >
            <ul className='footer_list'>
               <Link href={'/aboutUs'}><li className='footer_list_item'>About Us</li></Link>
                <Link href='/contactUs'><li className='footer_list_item'>Contact Us</li></Link>
                <Link href='/'><li className='footer_list_item'>FAQs</li></Link>
            </ul>
        </div>
        <div className='footer-text'>
            <p>© 2022 The Mountain Company. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer;
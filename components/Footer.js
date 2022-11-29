import React from 'react'
import { SlSocialInstagram, SlSocialSpotify, SlSocialYoutube } from "react-icons/sl";
import { TiSocialTwitter, TiSocialFacebook } from "react-icons/ti";

function Footer() {
  return (
    <footer>
        <div className='social-icons'>
            <SlSocialInstagram size={30}/>
            <SlSocialSpotify size={30}/>
            <SlSocialYoutube size={30}/>
            <TiSocialTwitter size={30}/>
            <TiSocialFacebook size={30}/>
        </div>
        <div className='footer-list'>
            <ul >
                <li>About Us</li>
                <li>Contact Us</li>
                <li>FAQs</li>
            </ul>
        </div>
        <div className='footer-text'>
            <p>© 2022 The Mountain Company. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer;
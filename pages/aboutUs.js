import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const aboutUs = () => {
  return (
    <div>
      <Head>
        <title>Trek </title>
        <meta name="description" content="The Best Trek" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <motion.main className='about__us' initial={{ y: 900, opacity: 0 }} animate={{ y: 0 , opacity: 1}}  transition={{ ease: "easeIn", duration: 1.3 }}>
        <div className='about_header'>
        </div>
        <div className='about_content'>
          <h2>About Us</h2>
          <p>The Pahadi Company is a story of three average guys who decided to make their lives large. It is story of three guys who decided to join the cult of overcoming fears and following their passion and most importantly,their dream. They met in 2016 and over a period of just some months,forged a brotherhood that would literally take them places
            After leading thousand of trekkers sucessfully to the most renowned summits and through jow dropping passes,their aim is to provide every mountain lover the means to scale the Himalayas. All they do is pick up some adrenaline junkies, and move towords the sound that calls them upwards; the siren-song of the summit.
          </p>
          <div className='about_content_value'>
          <h2>Our Value</h2>
            <div className='about_content_value_items'>
              <div className='about_content_value_item'>
              Work Ethic: A set of values to grow, staying motivated and focused is our mantra. Being hardworking and disciplined forms the backbone
              </div>
              <div className='about_content_value_item'>
              Priority: Our priority is always our customers. Moulding according to our customers needs and providing the best to be the best.
              </div>
              <div className='about_content_value_item'>
              Teamwork: It is like a necessity as with an efficient and reliable team it makes every task complete with ease. Unity is strength, indeed.
              </div>
            </div>
          </div>
        </div>
      </motion.main>
      <Footer />
    </div>
  )
}

export default aboutUs
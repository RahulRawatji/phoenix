import React from 'react';
import Head from 'next/head';


import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Image from 'next/image';

const contactUs = () => {
  return (
    <div>
         <Head>
        <title>Trek </title>
        <meta name="description" content="The Best Trek" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      contactUs
      <Footer />
      </div>
  )
}

export default contactUs
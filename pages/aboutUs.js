import React from 'react';
import Head from 'next/head';

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
      <h1>About Us</h1>
      <Footer />
    </div>
  )
}

export default aboutUs
import React from 'react';
import Head from 'next/head';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Image from 'next/image';

function treks(props) {
  return (
    <div>
      <Head>
        <title>Trek </title>
        <meta name="description" content="The Best Trek" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <section className='treks_section'>
        <div className='main_grid'>
          <div className='left_main_col'>
            <div className='left_col_header'>
                <p>Uttarakhand</p>
                <p>5 Days</p>
                <p>30Km</p>
                <p>Easy</p>
                <p>Rs. 5999</p>
                <button className='btn'>Book Now</button>
            </div>
            <div className='left_col_content'>
            <h1 >
              Mukteshwar
            </h1>
            <p className='m-2'>
              For nature lovers, Mukteshwar is a sight for sore eyes. Rich in natural beauty and enchanting scenic surroundings, it is a place that you wouldnt want to miss. The beautiful village is located at an altitude of 2171 metres and its magnificent vistas have won the hearts of tourist . Well connected, it is 51 kms away from the city of Nanital. The village derives its name from the popular Mukteshwar Temple which has Lord Shiva as the main deity. Its perfect location offers the perfect panoramic view of the mighty Nanda Devi and other mountains of the Himalayas. Its forest are rich in rare flora and fauna and you could hear the beautiful symphony of the forest birds in the morning.
            </p>
            </div>
            <div className='left_inner_col'>
              <div>
                <p>HIGHLIGHTS</p>
                <ul>
                  <li>Easy to Moderate trek</li>
                  <li>Beautiful landscapes</li>
                  <li>Offers you great views of the Greater Himalayas</li>
                </ul>
              </div>
              <div>
                When to visit
              </div>
              <div>
                <p>INCLUSIONS</p>
                <ul>
                  <li>Accommodations at Trek</li>
                  <li>Trek Leader and Guides</li>
                  <li>Services of a Professional Trekking Team</li>
                  <li>Meals</li>
                </ul>
              </div>
              <div>
                <p>EXCLUSIONS</p>
                <ul>
                  <li>GST and Other Taxes</li>
                  <li>Beautiful landscapes</li>
                  <li>Personal Equipment</li>
                </ul>
              </div>

            </div>
          </div>
          <div className='right_main_col'>
            <Image
              src={require('../public/assets/dar2.jpg')}
              alt="Mountain Peek"
              className="img"
            />
           <Image
              src={require('../public/assets/dar2.jpg')}
              alt="Mountain Peek"
              className="img"
            />
             <Image
              src={require('../public/assets/dar2.jpg')}
              alt="Mountain Peek"
              className="img"
            />
            <Image
              src={require('../public/assets/dar2.jpg')}
              alt="Mountain Peek"
              className="img"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default treks

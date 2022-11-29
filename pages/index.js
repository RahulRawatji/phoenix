import Head from 'next/head'
import Image from 'next/image';
import Footer from '../components/Footer';
import {MdOutlineSettingsSuggest} from 'react-icons/md';
import {GiSchoolBag} from 'react-icons/gi';
import {RiHeartsLine} from 'react-icons/ri';

import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';
import imgHead from '../assets/dar1.jpg';
import Card from '../components/Card';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Trek </title>
        <meta name="description" content="The Best Trek" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <main>
        <section className='main-content'>
            <h1 style={{textAlign:'center', paddingTop:'30px'}}>The Pahadi Company.</h1>
        </section>

        <section className='card__section'>
          <h3>Upcoming Treks</h3>
          <p>Ready for Adventure</p>
          <div className='card__container'>
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </section>

        <section className='whyUs__section'>
          <div className='whyUs__header'>
            <h3 style={{fontSize:'2rem', fontWeight:'lighter'}}>Why Us?</h3>
          </div>
          <div className='whyUs__content'>
            <div>
              <h3><MdOutlineSettingsSuggest size={20}/>Tailormade Adventures</h3>
              <p style={{ maxWidth: '40ch'}}>We specialize in tailoring each journey around our guest specific interests or expectations. Our collection of perfect moments are often exclusive to Trekmunk, ensuring a unique adventure.</p>
            </div>
            <div>
              <h3><GiSchoolBag size={20} />Finest Guides</h3>
              <p  style={{ maxWidth: '40ch'}}>You can expect the finest experience from our incredible private, specialist and trained trek leaders, guides and local support team</p>
            </div>
            <div>
              <h3><RiHeartsLine/>Travel with Heart</h3>
              <p style={{ maxWidth: '40ch'}}>Our core ethos of Care of the Land and People drives all that we do. When you travel with us you make a small contribution to the “Trek for a Cause” initiative which helps people and nature in the remote areas.</p>
            </div>
          </div>
        </section>

        <section className='review'>
          <h3>Reviews</h3>
          <p>Ready for Adventure</p>
        </section>

      </main>
      <Footer />
    </div>
  )
}

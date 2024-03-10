import React from 'react'
import Carrousel from '../components/Carrousel';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <>
      <Hero />
      <main className='flex flex-col grow'>
        <Carrousel />
      </main>
    </>
  )
}

export default Home;
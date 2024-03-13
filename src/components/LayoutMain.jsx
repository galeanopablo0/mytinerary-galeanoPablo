import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const LayoutMain = ( {children} ) => {
  return (
    <>
        <Header />
          <main className='flex flex-col min-h-[60vh]'>
            {children}
          </main>
        <Footer />
    </>
  )
}

export default LayoutMain
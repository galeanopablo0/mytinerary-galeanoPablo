import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <footer className='flex flex-col items-center gap-5 p-9'>
            <nav className='flex gap-10'>
              <Link to="/whatsapp"><i className='fa-brands fa-whatsapp scale-150 pr-[5px]'></i>Whatsapp</Link>
              <Link to="/instagram"><i className='fa-brands fa-instagram scale-150 pr-[5px]'></i>Instagram</Link>
              <Link to="/facebook"><i className='fa-brands fa-facebook scale-150 pr-[5px]'></i>Facebook</Link>
              <Link to="/twitter"><i className='fa-brands fa-twitter scale-150 pr-[5px]'></i>Twitter</Link>
              <Link to="/gmail"><i className='fa-brands fa-google scale-150 pr-[5px]'></i>Gmail</Link>
            </nav>
            <p className='p-2'>Galeano Pablo - Mindhub B2B050 ©</p>
        </footer>
    </>    
  )
}

export default Footer
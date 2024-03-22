import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <footer className='flex flex-col items-center gap-5 p-9 border-t-2 border-black'>
            <nav className='p-1 flex gap-10'>
                <Link className='text-xl hover:scale-95 text-black hover:text-gray-600 hover:bg-blue-300 p-2 px-8 border border-black' to="/">Home</Link>
                <Link className='text-xl hover:scale-95 text-black hover:text-gray-600 hover:bg-blue-300 p-2 px-8 border border-black' to="/cities">Cities</Link>
            </nav>
            <nav className='flex flex-wrap justify-center gap-10'>
              <a target='_blank' href="https://whatsapp.com"><i className='fa-brands fa-whatsapp scale-150 pr-[5px]'></i>Whatsapp</a>
              <a target='_blank' href="https://instagram.com"><i className='fa-brands fa-instagram scale-150 pr-[5px]'></i>Instagram</a>
              <a target='_blank' href="https://facebook.com"><i className='fa-brands fa-facebook scale-150 pr-[5px]'></i>Facebook</a>
              <a target='_blank' href="https://twitter.com"><i className='fa-brands fa-twitter scale-150 pr-[5px]'></i>Twitter</a>
              <a target='_blank' href="https://gmail.com"><i className='fa-brands fa-google scale-150 pr-[5px]'></i>Gmail</a>
            </nav>
            <p className='p-2'>Galeano Pablo - Mindhub B2B050 ©</p>
        </footer>
    </>    
  )
}

export default Footer
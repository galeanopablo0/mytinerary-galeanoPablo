import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
      <>
        <header className='bg-gray-50 flex justify-center'>
            <div className='flex justify-between p-5 py- md:py-10 items-center w-[95%] sm:w-[80%]'>
              <h1><Link to={'/'} className='text-2xl md:text-3xl font-bold flex align-center'>My Tinerary</Link></h1>
              <nav className='flex items-center gap-6 lg:gap-10'>
                <Link className='text-xl hover:scale-95 hover:text-gray-600' to="/">Home</Link>
                <Link className='text-xl hover:scale-95 hover:text-gray-600' to="/cities">Cities</Link>
                <a href="#"><img className='w-10 mr-3' src="src/assets/login.png" alt="" /></a>
              </nav>
            </div>
        </header>
      </>
  )
}

export default Header;


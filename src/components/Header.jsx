import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Header = () => {

  const location = useLocation()
  const links = [
    {path:"/", title:"Home", active:"/" == location.pathname},
    {path:"/Cities", title:"Cities", active:"/Cities" == location.pathname}
  ]
  
  return (
      <>
        <header className='flex justify-center'>
            <div className='flex justify-between p-5 py- md:py-10 items-center w-[95%] sm:w-[80%]'>
              <h1><Link to={'/'} className='text-2xl md:text-3xl font-bold flex align-center'>My Tinerary</Link></h1>
              <nav className='flex items-center gap-6 lg:gap-10'>
                {links.map((link) => (
                  <Link to={link.path} key={link.title} className={`text-xl hover:scale-95 hover:text-orange-500 ${link.active ? "border-b-[3px] border-orange-700 hover:text-black hover:scale-100" : ""}`}>{link.title}</Link>
                ))}
                <a href="#"><img className='w-10 mr-3' src="src/assets/login.png" alt="" /></a>
              </nav>
            </div>
        </header>
      </>
  )
}

export default Header;


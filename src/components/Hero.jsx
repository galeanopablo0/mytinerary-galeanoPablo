import React from 'react'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>
      <div className="bg-hero-img h-[320px] xl:h-[520px] flex items-center justify-center bg-cover bg-center">
        <div className="text-center">
          <h1 className="text-5xl inline-block font-bold text-white text-stroke-2 bg-gray-300/50 px-10 p-3 mb-5 rounded-lg">My Tinerary</h1>
          <p className="text-3xl text-white text-stroke-1 bg-gray-500/60 backdrop-blur-sm p-2 mt-10 mx-2 mb-5 rounded-lg">Find your perfect trip, designed by insiders who know and love their cities!</p>
          <Link to="/cities" className="w-60 m-auto flex justify-center border-black border bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">Find your dream trip!</Link>
        </div>
      </div>
    </>
  )
}

export default Hero;
import React from 'react'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>
      <div className="bg-hero-img h-[320px] xl:h-[520px] flex items-center justify-center bg-cover bg-center">
        <div className="text-center">
          <h1 className="text-5xl inline-block font-bold text-white bg-gray-300/50 px-10 p-3 mb-5 rounded-lg">My Tinerary</h1>
          <p className="text-2xl italic text-black bg-gray-300/70 p-2 mt-10 mx-4 mb-5 rounded-lg">Find your perfect trip, designed by insiders who know and love their cities!</p>
          <Link to="/cities" className="w-60 m-auto flex justify-center border-blue-700 border bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Find your dream trip!</Link>
        </div>
      </div>
    </>
  )
}

export default Hero;
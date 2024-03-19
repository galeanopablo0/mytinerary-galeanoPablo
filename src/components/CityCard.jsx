import React from 'react'
import { Link } from 'react-router-dom'

const CityCard = ( { cities } ) => {
  return (
            <article key={cities._id} className="w-[210px] sm:w-[260px] md:w-[320px] h-[125px] md:h-[200px] lg:w-[420px] xl:w-[520px] relative hover:scale-105">
            <img
            className="w-full h-full m-auto object-cover"
            src={cities.image}
            alt={"Imagen de: " + cities.name}
            />
            <footer className="w-full p-1 absolute bottom-0 left-0 right-0 m-auto text-white bg-gray-800/60">
              <h2 className="sm:text-lg md:text-2xl font-bold">{cities.name}</h2>
              <div className='relative block'>
                <img src="src/assets/icono-ubicacion.png" className='inline-block w-[10%] md:w-[5%] mb-1 mr-1' alt="" /><h3 className="sm:text-sm md:text-md inline-block">{cities.country}</h3>
                <Link to={"/cities/" + cities._id} className='inline-block absolute right-0 bottom-1 bg-white/40 p-1 rounded hover:text-gray-200 hover:scale-[93%]'>Details</Link>
              </div>
            </footer>
        </article>
  )
}

export default CityCard
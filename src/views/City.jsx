import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { getCityById } from '../services/citiesQueries'

const City = () => {
    const params = useParams()
    const [ciudad, setCiudad] = useState({})
    const [cargando, setCargando] = useState(true);
    const navigate = useNavigate()
    useEffect(() => {
        getCityById(params.id)
        .then((data)=> {
          if (data._id) {
            setCiudad(data)
          } else {
            alert("There's no city with that name.");
            navigate("/cities");
          }
        })
        .finally(() => {setCargando(false)})
    }, [])

  return (
    <>
      {cargando ? (
        <main className='flex justify-center min-h-[60vh]'>
          <h2 className='text-3xl pt-10'>Loading city...</h2>
        </main>
      ) : (    
      <main className='min-h-[60vh] flex flex-col items-center m-auto my-10 gap-10 w-[70%] md:w-[50%]'>
        <div>
          <img src={ciudad.image} className='w-[95%] xl:h-[410px] xl:w-[620px] m-auto' alt="" />
          <h2 className='text-3xl flex justify-center pt-2 font-bold'>{ciudad.name}</h2>
          <h3 className='text-xl flex justify-center italic'>{ciudad.country}</h3>
        </div>
        <div className='flex flex-col items-center'>
          <legend className='text-md font-bold text-red-600'>Under construction</legend>
        <Link to={'/cities'} className='text-xl hover:scale-95 text-black hover:text-gray-600 hover:bg-slate-200 p-2 px-8 border border-black'>Back to Cities</Link>
        </div>
      </main>
      )}
    </>
  )
}

export default City
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { getCityById } from '../services/citiesQueries'

const City = () => {
    const params = useParams()
    const [ciudad, setCiudad] = useState({})
    const [cargando, setCargando] = useState(true);
    const [itineraries, setItineraries] = useState({})
    const navigate = useNavigate()
    useEffect(() => {
        getCityById(params.id)
        .then((data)=> {
          if (data._id) {
            setCiudad(data)
          } else {
            alert("There's no a city with that name.");
            navigate("/cities");
          }
          setItineraries(data.itineraries)
        })
        .finally(() => {setCargando(false)})
    }, [])
    function imprimirBilletes(itinerarie) {
      let billetesPrice = ""
      for (let i = 0; i < itinerarie; i++) {
      billetesPrice += "💸"
    }
    return billetesPrice;
    }
    function imprimirImageActivities(itinerarie) {
      let imagesElements = []
      for (let i = 0; i < itinerarie.length; i++) {
        imagesElements.push(<img className='w-4/5 md:w-3/5 border border-gray-400 rounded hover:scale-[102%]' key={i} src={itinerarie[i]} />)
      }
      return imagesElements
    }

    return (
      <>
        {cargando ? (
          <h2 className='text-3xl pt-10'>Loading city...</h2>
        ) : (
          <div className='min-h-[75vh] flex flex-col items-center m-auto my-10 gap-10 w-[70%] md:w-[50%]'>
            <div>
              <img src={ciudad.image} className='w-[95%] xl:h-[410px] xl:w-[620px] m-auto' alt="" />
              <h2 className='text-3xl flex justify-center pt-2 font-bold'>{ciudad.name}</h2>
              <h3 className='text-xl flex justify-center italic'>{ciudad.country}</h3>
            </div>
            <div className='flex flex-col items-center'>
              <legend className='text-md font-bold text-red-600'>Under construction</legend>
              <Link to={'/cities'} className='text-xl hover:scale-95 text-black hover:text-gray-600 hover:bg-blue-300 p-2 px-8 border border-black'>Back to Cities</Link>
            </div>
            {itineraries.length > 0 ? ( // Verifica si hay itinerarios
              <div>
                {itineraries.map((itinerarie) => ( // Lo mapea e imprime los itinerarios correspondientes de cada guia
                  <div key={itinerarie.id}>
                    <div className='flex flex-col sm:flex-row'>
                      <div className='flex flex-col items-center mb-3 mr-3'>
                        <img className='w-2/3 min-w-[80px] max-w-[150px]' src={itinerarie.guide_image} alt="" />
                        <h1 className='text-md'>{itinerarie.guide}</h1>
                      </div>
                      <div>
                        <h2 className='text-xl font-bold'>{itinerarie.title}</h2>
                        <p className='italic pb-5'>"{itinerarie.description}"</p>
                      </div>
                    </div>
                    <div>
                      <div className='bg-blue-300 p-2 rounded'>
                        <p><strong>Price:</strong> {imprimirBilletes(itinerarie.price)}</p>
                        <p><strong>Duration:</strong> {itinerarie.duration}hs</p>
                        <p><strong>Likes:</strong> 0</p>
                        <p>{(itinerarie.hashtags).join(" ")}</p>
                      </div>
                      <h2 className='text-center text-2xl font-bold pt-5'>Some activities</h2>
                      <div className='flex flex-wrap md:flex-nowrap justify-center gap-10 py-3 px-4'>
                        {imprimirImageActivities(itinerarie.activities)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <h2 className='font-bold text-xl'>There's no itineraries with that name</h2> //En caso de no haber itinerarios, imprime este mensaje
            )}
          </div>
        )}
      </>
    );
  }
    export default City;
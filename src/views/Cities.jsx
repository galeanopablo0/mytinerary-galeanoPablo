import React, { useRef, useState, useEffect } from 'react'
import { getCities } from '../services/citiesQueries'
import CityCard from '../components/CityCard'

const Cities = () => {
  const [ciudades, setCiudades] = useState([]);
  const [filtradas, setFiltradas] = useState([]);
  const inputBusqueda = useRef(null);

    useEffect(() => {
        getCities().then((data) => {
          setCiudades(data);  
          setFiltradas(data);
        })
    }, [])

    const filterByName = (arrayCiudades, value) => {
      return arrayCiudades.filter((ciudad) => ciudad.name.toLowerCase().startsWith(value.toLowerCase()))
    }

    const handleInput = () => {
      let filtered = filterByName(ciudades, inputBusqueda.current.value.trim());
      setFiltradas(filtered);
    }

    const ciudadesCards = filtradas.map((ciudad) => (
        <CityCard key={ciudad._id} cities={ciudad} />
    ));

    if (filtradas.length === 0){
      return (
        <main className='flex flex-col grow pb-10 min-h-[60vh]'>
        <section className='w-full flex flex-col gap-8 justify-center'>
        <h2 className='text-3xl text-center'>Cities</h2>
          <search className='flex justify-center'>
            <input
            placeholder='Insert city name'
            type="text" 
            className='border border-black bg-gray-100 p-1 w-[40%] md:w-[30%] lg:w-[20%]'
            onInput={handleInput}
            ref={inputBusqueda}
            />
          </search>
          <h2 className='text-2xl text-center text-black pt-10'>There's no cities with the name entered.</h2>
          </section>
        </main>
      )
    }

  return (
    <>
      <main className='flex flex-col grow pb-10'>
        <section className='w-full flex flex-col gap-8 justify-center'>
          <h2 className='text-3xl text-center'>Cities</h2>
          <search className='flex justify-center'>
            <input
            placeholder='Insert city name'
            type="text" 
            className='border border-black p-1 w-[40%] md:w-[30%] lg:w-[20%]'
            onInput={handleInput}
            ref={inputBusqueda}
            />
          </search>
          <div className='flex flex-wrap gap-7 mx-10 justify-center'>
            {filtradas.length > 0 && ciudadesCards}
          </div>
        </section>
      </main>
    </>
  )
}

export default Cities
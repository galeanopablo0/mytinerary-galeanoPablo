import React, { useRef, useState, useEffect } from 'react'
import { getCities } from '../services/citiesQueries'
import CityCard from '../components/CityCard'
import { useDispatch, useSelector } from 'react-redux'
import { filterByName, load } from '../redux/actions/ciudadesActions'

const Cities = () => {
  const inputBusqueda = useRef(null);

  const dispatch = useDispatch( );
  const {all, filtered, search} =  useSelector((store) => store.cities)

    useEffect(() => {
        if (all.length == 0) {
          getCities().then((data) => {        
            dispatch(load(data))
          })
        }
    }, [])
    console.log(search)

    const handleInput = () => {
      dispatch(filterByName(inputBusqueda.current.value))
    }

    const ciudadesCards = filtered.map((ciudad) => (
        <CityCard key={ciudad._id} cities={ciudad} />
    ));

    if (filtered.length === 0){
      return (
        <main className='flex flex-col py-10 min-h-[70vh]'>
          <section className='w-full flex flex-col gap-5 justify-center'>
            <h2 className='text-3xl'>Cities</h2>
            <search className='flex justify-center'>
              <input
              placeholder='Insert city name'
              type="text" 
              className='border border-black bg-gray-100 p-1 w-[40%] md:w-[30%] lg:w-[20%]'
              onInput={handleInput}
              ref={inputBusqueda}
              defaultValue={search}
              />
            </search>
            <h2 className='text-2xl text-center text-black pt-10'>There's no cities with the name entered.</h2>
          </section>
        </main>
      )
    }

  return (
    <>
      <main className='flex flex-col grow pb-10 min-h-[70vh]'>
        <section className='w-full flex flex-col gap-8 justify-center'>
          <h2 className='text-3xl text-center'>Cities</h2>
          <search className='flex justify-center'>
            <input
            placeholder='Insert city name'
            type="text" 
            className='border border-black p-1 w-[40%] md:w-[30%] lg:w-[20%]'
            onInput={handleInput}
            ref={inputBusqueda}
            defaultValue={search}
            />
          </search>
          <div className='flex flex-wrap gap-7 mx-10 justify-center'>
            {filtered.length > 0 && ciudadesCards}
          </div>
        </section>
      </main>
    </>
  )
}

export default Cities
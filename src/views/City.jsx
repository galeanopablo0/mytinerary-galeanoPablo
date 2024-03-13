import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getCityById } from '../services/citiesQueries'

const City = () => {
    const params = useParams()
    const [ciudad, setCiudad] = useState({})
    useEffect(() => {
        getCityById(params.id).then((data)=> {
            setCiudad(data)
        })
    }, [])
    console.log(ciudad)

 

  return (
    <main className='min-h-[60vh]'>

    </main>
  )
}

export default City
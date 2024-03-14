import React from "react";
import { useState } from "react";
import cities from "../data/data";

const Carrousel = () => {
  const citiesSlices = [cities.slice(0, 4), cities.slice(4, 8), cities.slice(8, 12)]
  const [ citiesSlides, setCitiesSlides ] = useState(citiesSlices[0]);
  const [ index, setIndex] = useState(0);

 const next = () => {
  let aux = index == 2 ? 0 : index + 1;
  setIndex(aux);
  setCitiesSlides(citiesSlices[aux]);
 }

 const prev = () => {
  let aux = index == 0 ? 2 : index - 1;
  setIndex(aux);
  setCitiesSlides(citiesSlices[aux]);
 }
 
  return (
    <>
        <div className="flex items-center w-11/12 py-5 md:py-9 m-auto gap-5">
          <div>
            <button className="flex p-3 bg-slate-400/80" onClick={prev}>◀</button>
          </div>
          <div className="flex flex-wrap gap-8 justify-center">
            {citiesSlides.map((city, index) => (
              <article key={`${city._id}_${index}`} className="w-[230px] sm:w-[230px] md:w-[290px] h-[120px] md:h-[200px] lg:w-[400px] xl:w-[520px] relative hover:scale-105">
              <img
                className="w-full h-full m-auto object-cover"
                src={city.image}
                alt={"Imagen de: " + city.name}
              />
              <footer className="w-full p-1 absolute bottom-0 left-0 right-0 m-auto text-white bg-gray-800/60">
                <h2 className="sm:text-lg md:text-2xl lg:text-3xl font-bold">{city.name}</h2>
                <h3 className="sm:text-sm md:text-xl lg:text-2xl italic">{city.country}</h3>
              </footer>
            </article>
            ))}
          </div>
          <div>
            <button className="flex p-3 bg-slate-400/80" onClick={next}>▶</button>
          </div>
        </div>
    </>
  );
};

export default Carrousel;

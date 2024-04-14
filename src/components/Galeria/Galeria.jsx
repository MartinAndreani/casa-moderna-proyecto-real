import React from 'react'
import BannerContacto from './BannerContacto/BannerContacto'



const GaleriaContainer = () => {

  const images= [
    "images/galeria/gal1.webp",
    "images/galeria/gal2.webp",
    "images/galeria/gal3.webp",
    "images/galeria/gal4.webp",
    "images/galeria/gal5.webp",
    "images/galeria/gal6.webp",
    "images/galeria/gal7.webp",
    "images/galeria/gal8.webp",
    "images/galeria/gal9.webp",
    "images/galeria/gal10.webp",
    "images/galeria/gal11.webp",
  ]

  return (
    <div id='galeria' >
      <div className=' py-6 text-center text-xl text-gray-700'>Galeria</div>
      <div className='flex justify-center pb-6'>
        <div className='grid grid-cols-4  gap-4'>
          {images.map((image,i) => (
              <img className='w-56'
                  key = {i}
                  src= {image}
                  alt=''
              />
            ))}
        </div>
      </div>
      
    <div>
      <BannerContacto/>
    </div>
      
    </div>
  )
}

export default GaleriaContainer
import React from 'react'
import BannerContacto from './BannerContacto/BannerContacto'



const GaleriaContainer = () => {

  const images= [
    "public/images/galeria/gal1.webp",
    "public/images/galeria/gal2.webp",
    "public/images/galeria/gal3.webp",
    "public/images/galeria/gal4.webp",
    "public/images/galeria/gal5.webp",
    "public/images/galeria/gal6.webp",
    "public/images/galeria/gal7.webp",
    "public/images/galeria/gal8.webp",
    "public/images/galeria/gal9.webp",
    "public/images/galeria/gal10.webp",
    "public/images/galeria/gal11.webp",
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
import React from 'react'
import BannerContacto from './BannerContacto/BannerContacto'



const GaleriaContainer = () => {

  const images= [
    "src/assets/gal1.webp",
    "src/assets/gal2.webp",
    "src/assets/gal3.webp",
    "src/assets/gal4.webp",
    "src/assets/gal5.webp",
    "src/assets/gal6.webp",
    "src/assets/gal7.webp",
    "src/assets/gal8.webp",
    "src/assets/gal9.webp",
    "src/assets/gal10.webp",
    "src/assets/gal11.webp",
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
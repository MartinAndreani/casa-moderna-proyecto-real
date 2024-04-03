import React from 'react'

import CarouselContainer from './Carousel/CarouselContainer';

const Sistemas = () => {
  return (
    <div >
        <div className='bg-black text-white py-5 h-[48rem]  ' id='sistemas'>
          <div>
            <p className="text-center  text-xl" >Sistemas</p>
          </div>
          <div>
            <h2 className="text-center text-5xl lg:text-6xl font-extrabold  py-2">Conoce nuestros sistemas</h2>

          </div>
          <div className='h-[36rem]'>
          <CarouselContainer/>

          </div>
        </div>
        
    </div>
  )
}

export default Sistemas
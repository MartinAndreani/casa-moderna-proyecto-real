
import React from 'react'
import CarouselContainer from './Carousel/CarouselContainer';

const Sistemas = () => {
  return (
    <div >
      <div className='bg-black text-white py-5 lg:h-[46rem]' id='sistemas'>
          <div>
            <p className="text-center  text-xl" >Sistemas</p>
          </div>
          <div>
            <h2 className="text-center text-4xl lg:text-5xl font-extrabold  pt-4">Conoce nuestros sistemas</h2>

          </div>
          <div className='h-[36rem]'>
          <CarouselContainer/>

          </div>
        </div>
        
    </div>
  )
}

export default Sistemas


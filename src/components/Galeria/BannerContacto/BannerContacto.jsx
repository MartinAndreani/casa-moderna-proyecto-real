import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

const BannerContacto = () => {
  return (
    <div>
        <div className='bg-nav my-4 text-white max-h-[26rem] overflow-hidden'>
          <div className='flex flex-row justify-center items-center gap-10 '>
            <div className=' lg:w-1/2 flex flex-col gap-5 lg:gap-14 pl-6 my-8 lg:pb-10'>
              <div className='text-2xl lg:text-4xl font-bold'>¿Listo para hacer realidad tus proyectos?</div>
              <div className=' lg:text-xl'>¡Contáctanos ahora y descubre cómo Casa Moderna puede convertir tus ideas en espacios estupendos!.</div>
               <div className=''>
                <a  target='_blank' href="https://wa.link/hlvljp" className='flex bg-cursomGreen text-2xl justify-center items-center w-44 h-10 gap-2 rounded-md'>
                  <div><FaWhatsapp /></div>
                  <div className='text-lg'>Escribinos</div>
                  </a>
                </div>
            </div>
            <div className='hidden lg:block'>
              <img src="public/images/galeria/bannercontacto.webp" alt="" className=''/>
            </div>

          </div>
          
        </div>
        
    </div>
  )
}

export default BannerContacto
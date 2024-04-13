import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

const BannerContacto = () => {
  return (
    <div>
        <div className='bg-nav my-4 text-white '>
          <div className='flex flex-row justify-center items-center gap-10 '>
            <div className=' w-1/2 flex flex-col gap-5 lg:gap-14 pl-6'>
              <div className='text-2xl lg:text-4xl font-bold'>¿Listo para hacer realidad tus proyectos?</div>
              <div className=' lg:text-xl'>Contáctanos ahora y descubre cómo Casa Moderna puede convertir tus ideas en espacios excepcionales.</div>
               <div className=''>
                <a  target='_blank' href="https://wa.link/hlvljp" className='flex bg-cursomGreen text-2xl justify-center items-center w-44 h-10 gap-2 rounded-md '>
                  <div><FaWhatsapp /></div>
                  <div>Escribinos</div>
                  </a>
                </div>
            </div>
            <div >
              <img src="src/assets/bannercontacto.webp" alt="" className=''/>
            </div>

          </div>
          
        </div>
        
    </div>
  )
}

export default BannerContacto
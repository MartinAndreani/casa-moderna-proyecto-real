import React from 'react'
import logo from '../../assets/logo.webp'

const Navbar = () => {
  return (
    <div>
        {/* Container */}
        <div className='bg-nav h-28 flex items-center justify-around  w-full  '>

            {/* logo */}
            <div className='flex justify-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300  '>
              <a href="/">
                <img src={logo} alt="/" className='h-24  '/>
              </a>
              
            </div>


            {/* Opciones */}
            <div className=' relative left-12'>
              <ul className='flex gap-5 justify-center items-center'>
                <li className='flex justify-center items-center w-28  text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 '><a href="/">Sobre Nosotros</a></li>
                <li className='flex justify-center w-28 text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300'><a href="/">Sistemas</a></li>
                <li className='flex justify-center w-28 text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300'><a href="/">Servicios</a></li>
                <li className='flex justify-center w-28 text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300'><a href="/">Contactos</a></li>
                <li className='flex justify-center w-28 text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300'><a href="/">Galería</a></li>

              </ul>
              
            </div>


            {/* BOTON  */}
            <div className='bg-botones flex justify-start items-center relative right-12  rounded-2xl text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300  '>
              <button className='px-5 py-3'>Solicitar cotización</button>
            </div> 

        </div>


    </div>
  )
}

export default Navbar
import React from 'react'
import logo from '../../assets/logo.webp'

const Navbar = () => {
  return (
    <div>
        {/* Container */}
        <div className='bg-nav h-28 flex items-center justify-around  w-full  '>

            {/* logo */}
            <div className='flex justify-center'>
              <a href="/">
                <img src={logo} alt="/" className='h-24 '/>
              </a>
              
            </div>


            {/* Opciones */}
            <div className=' relative left-16'>
              <ul className='flex gap-x-8 justify-center items-center'>
                <li className='flex justify-center items-center w-28 text-white '><a href="/">Sobre Nosotros</a></li>
                <li className='flex justify-center w-28 text-white '><a href="/">Sistemas</a></li>
                <li className='flex justify-center w-28 text-white '><a href="/">Servicios</a></li>
                <li className='flex justify-center w-28 text-white '><a href="/">Contactos</a></li>

              </ul>
              
            </div>


            {/* BOTON  */}
            <div className='bg-botones flex justify-start items-center relative right-12  rounded-2xl text-white '>
              <button className='px-5 py-3'>Solicitar cotización</button>
            </div>

        </div>


    </div>
  )
}

export default Navbar
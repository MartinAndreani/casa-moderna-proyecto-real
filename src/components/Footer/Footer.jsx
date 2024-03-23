import React from 'react'
import logo from '../../assets/logo.webp'
import { FiFacebook } from "react-icons/fi"
import { FaInstagram } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";
import { MdMailOutline } from "react-icons/md";


const Footer = () => {
  return (
    <div className='bg-nav text-white grid grid-cols-4 gap-4 py-4'>
        
        {/* LOGO */}
        <div className=' flex justify-center' >
          <a href="/">
            <img src={logo} alt="" className='h-28  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 '/>
          </a>
        </div>

        {/* SERVICIOS */}
        <div className='w-64'>
          <div className='grid gap-2'>
            <div className='font-bold text-xl '>Servicios</div>
            <hr className='w-20 ' />
          </div>

          <div className='grid gap-2 py-2'  >
            <div><a href="/">Diseño</a></div>
            <div><a href="/">Recidencial</a></div>
            <div><a href="/">Obra Comercial</a></div>
            <div><a href="/">Remodelación, ampliación y matenimiento</a></div>
            <div><a href="/">Capacitación</a></div>
          </div>
          
        </div>


        {/* NAVEGACION */}
        <div >
          <div className='grid gap-2 '>
            <div className='font-bold text-xl'>Navegación</div>
            <hr className='w-20 ' />
          </div>
          <div className='grid gap-2 py-2'>
            <div><a href="/">Home</a></div>
            <div><a href="/">Servicios</a></div>
            <div><a href="/">Sobre Nosotros</a></div>
            <div><a href="/">Contacto</a></div>
          </div>
          
        </div>


        {/* DATOS DE CONTACTO */}
        <div >
          <div className='grid gap-2'>
            <div className='font-bold text-xl'>Datos de Contacto</div>
            <hr className='w-20 ' />  
          </div>

          <div className='grid gap-2 py-2 '>

            <div >
              <a href="/" className='flex gap-2'>
                <div >
                  <MdMailOutline  className='relative top-1 text-lg  '/>
                </div>
                
                <div >
                  <p> E-mail</p>
                </div>
              </a>
              
              
            </div>

            <div>
              <a href="/" className='flex gap-2'>
                <div>
                <TiLocation className='relative top-1 text-lg ' />

                </div>
                <div>
                  <p>Mendoza, Argentina</p>
                </div>
              </a>
            </div>
          </div>


          <div className='flex justify-end relative  gap-5 w-40 top-20 ' >
            <div className=' flex justify-center items-center text-3xl  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 '><a href="https://www.facebook.com/casamodernamza"><FiFacebook /></a></div>
            <div className=' flex justify-center items-center text-3xl  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 '><a href="https://www.instagram.com/casa_moderna_mza?fbclid=IwAR1eyR-eROt_txlDmKaOI3fJqvDKjdLwTd3tumQx3SwtdEIkjjvPmoIwKEo"><FaInstagram /></a></div>
            <div className=' flex justify-center items-center text-3xl  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 '><a href=""><FaWhatsapp /></a></div>
          </div>
        </div>

    </div>
  )
}

export default Footer
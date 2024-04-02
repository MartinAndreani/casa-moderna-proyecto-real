import React from 'react'
import logo from '../../assets/logo.webp'
import { FiFacebook } from "react-icons/fi"
import { FaInstagram } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";
import { MdMailOutline } from "react-icons/md";
import { Link } from "react-scroll"


const Footer = () => {
  return (
    <div className='bg-nav text-white grid grid-cols-4  py-4'>
        
        {/* LOGO */}
        <div className=' flex justify-center' >
          <Link  to='home' spy={true} smooth={true} offset={-100} duration={800} className='cursor-pointer'>
            <img src={logo} alt="" className='h-28  transition ease-in-out delay-150  md:hover:-translate-y-1 md:hover:scale-110  duration-300 '/>
          </Link>
        </div>

        {/* SERVICIOS */}
        <div className='lg:w-64'>
          <div className='grid gap-2'>
            <div className='font-bold text-xl '>Servicios</div>
            <hr className='w-20 ' />
          </div>

          <div className='grid gap-2 py-2 pr-20 lg:pr-0'  >
            <div><a href="/">Diseño</a></div>
            <div><a href="/">Recidencial</a></div>
            <div><a href="/">Obra Comercial</a></div>
            <div ><a href="/" >Remodelación, ampliación y matenimiento</a></div>
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
            <div><Link to='home' spy={true} smooth={true} offset={-100} duration={800} className='cursor-pointer'>Home</Link></div>
            <div><Link  to='home' spy={true} smooth={true} offset={-100} duration={800} className='cursor-pointer'>Sobre Nosotros</Link></div>
            <div><Link  to='sistemas' spy={true} smooth={true} offset={-100} duration={800} className='cursor-pointer'>Sistemas</Link></div>
            <div><Link  to='servicios' spy={true} smooth={true} offset={-100} duration={800} className='cursor-pointer'>Servicios</Link></div>
            <div><Link  to='contacto' spy={true} smooth={true} offset={-100} duration={800} className='cursor-pointer'>Contacto</Link></div>
            <div><Link  to='galeria' spy={true} smooth={true} offset={-100} duration={800} className='cursor-pointer'>Galeria</Link></div>
          </div>
          
        </div>


        {/* DATOS DE CONTACTO */}
        <div className='' >
          <div className='grid gap-2'>
            <div className='font-bold text-xl'>Datos de Contacto</div>
            <hr className='w-20 ' />  
          </div>

          <div className='grid gap-2 py-2 '>

            <div className='flex gap-2' >
              
                <div >
                  <MdMailOutline  className='relative top-1 text-lg  '/>
                </div>

                <div className='flex-1'>
                  <a target='_blank' href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJTKWgkLXBksBZRBgrcljslwzmsqXbRQNpWttgKtMXFjkdmxCTgDhgJlWfVScgBZQJSsKfL"><p> E-mail</p></a>
                  {/* <p className='bg-red-400 w-10 items-center justify-center relative right-24 md:right-20 lg:static '>casamoderna.mza@gmail.com</p> */}

                </div>
             
              
              
            </div>

            <div className='flex gap-2'>
              
                <div>
                <TiLocation className='relative top-1 text-lg ' />

                </div>
                <div>
                  <p>Mendoza, Argentina</p>
                </div>
              
            </div>
          </div>


          <div className='flex justify-end relative gap-3  md:gap-5 w-40 md:top-20 right-16 md:right-0 top-12' >
            <div className=' flex justify-center items-center text-3xl  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 '><a target='_blank' href="https://www.facebook.com/casamodernamza"><FiFacebook /></a></div>
            <div className=' flex justify-center items-center text-3xl  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 '><a target='_blank' href="https://www.instagram.com/casa_moderna_mza?fbclid=IwAR1eyR-eROt_txlDmKaOI3fJqvDKjdLwTd3tumQx3SwtdEIkjjvPmoIwKEo"><FaInstagram /></a></div>
            <div className=' flex justify-center items-center text-3xl  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 '><a target='_blank' href="https://wa.link/hlvljp"><FaWhatsapp /></a></div>
          </div>
        </div>

    </div>
  )
}

export default Footer
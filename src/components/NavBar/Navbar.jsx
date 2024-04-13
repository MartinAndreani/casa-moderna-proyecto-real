import React from 'react'
import logo from '../../assets/logo.webp'
import ButtonGetInfo from '../common/ButtonGetInfo/ButtonGetInfo'
import { Link } from 'react-scroll'
import { IoIosMenu } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { useState } from 'react';
const Navbar = () => {
  let Links = [
    {name: 'Home', link:'home'},
    {name: 'Sistemas', link:'sistemas'},
    {name: 'Servicios', link:'servicios'},
    {name: 'Nosotros', link:'nosotros'},
    {name: 'Galeria', link:'galeria'},
    {name: 'Contacto', link:'contacto'},
    
  ]

  let [isOpen, setisOpen] = useState(false)
  
  return (
    <div>
        {/* Container */}
        <div className='bg-nav h-28 flex items-center lg:justify-center justify-around  w-full xl:gap-16 fixed z-50 '>

          {/* Menu icon */}

            <div onClick={() => setisOpen(!isOpen)} className='text-3xl text-white  cursor-pointer lg:hidden' >
              
              {
                isOpen ? <IoIosClose/> : <IoIosMenu/>
              }
              
            </div>



            {/* logo */}
            <div className='flex justify-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300  '>
                 <Link to='home' spy={true} smooth={true} offset={-100} duration={800} className='cursor-pointer'>
                 <img src={logo} alt="/" className='h-24  '/>
                 </Link> 
              
              
            </div>
            
            


            {/* Opciones */}
            <div className={`lg:ml-28 absolute lg:static left-0 top-28 px-16 lg:px-0 py-2 lg:py-0 bg-nav  lg:z-auto z-[-1] transition-all duration-1000 ease-in ${isOpen ? 'left-0' : 'left-[-490px]'} `}>
              <ul className='flex lg:flex-row flex-col  justify-center items-center lg:right-10 xl:right-0 relative'>

                {Links.map(link => (
                  <li key={link.name} className='flex justify-center m-2  items-center w-28  text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 -mx-1.5'>
                    <Link to={link.link} spy={true} smooth={true} offset={-100} duration={800} className='cursor-pointer'>
                      {link.name}
                    </Link>
                  </li>)
                )}

                
                </ul>
              
            </div>


            {/* BOTON  */}
            <div className='  items-center  text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300  '>
              <a target='_blank' href='https://wa.link/hlvljp'>
                <ButtonGetInfo msg={"Solicitar cotización"} addStyle={"w-40 h-12 text-[1rem] flex items-center justify-center rounded-2xl "} />
              </a>
            </div> 

        </div>


    </div>
  )
}

export default Navbar
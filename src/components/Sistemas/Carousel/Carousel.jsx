import {React,useState} from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import { VscCircleLargeFilled } from "react-icons/vsc";
import { VscCircleLarge } from "react-icons/vsc";

const Carousel = () => {
  const [next,setNext] = useState(false)

  return (
    <div>
      <div className='h-[35rem] flex justify-center  '>
            <div  className={` h-full w-full ${next ? 'hidden ' : 'visible '}  mx-10 md:mx-16  `}>

              {/* Emmedue */}
                <div className=' font-extrabold text-3xl py-6 xl:mx-12 2xl:mx-56'>Sistema Constructivo Emmedue</div>

                <div className='flex justify-center lg:gap-10 gap-4 '>
                    <div className=' w-[30rem]  lg:text-xl'>
                        <p>Es  un sistema de construcción ingenioso y alternativo, a los sistemas tradicionales, que ha logrado grandes éxitos en los últimos 40 años. El corazón del sistema es el panel Emmedue de poliestireno expandido: modular, encerrado entre dos mallas de acero galvanizado.</p>
                        <br/>
                        <p>En el ámbito de los sistemas constructivos, el sistema constructivo sismorresistente Emmedue ha logrado un prestigio considerable gracias a la experiencia lograda a través del tiempo, y las certificaciones internacionales recibidas.</p>
                    </div>

                    <div className=''>
                        <img src="src/assets/emedue.webp" alt="" className='' />
                    </div>
                </div>
            </div>
            
            <div className={` h-full w-full   ${(!next) ? 'hidden' : 'visible'} mx-10 md:mx-16`}>
            <div className=' font-extrabold text-2xl py-6 xl:mx-7 2xl:mx-40'>Sistema Constructivo Construccion en Seco</div>

                <div className='flex justify-center lg:gap-10 gap-4 '>
                    <div className=' w-[32rem]  lg:text-xl '>
                        <p>La construcción en seco es un método de construcción que implica la utilización de materiales prefabricados o semielaborados, los cuales se ensamblan en el lugar de construcción sin la necesidad de utilizar agua como principal medio de unión.</p>
                        <br />
                        <p>Este enfoque se basa en la rapidez de ejecución, la eficiencia en el uso de materiales y la reducción de residuos, lo que lo convierte en una opción popular para proyectos de construcción residencial, comercial e industrial. Los sistemas de construcción en seco pueden incluir paneles de yeso, paneles de madera, estructuras metálicas, entre otros.</p>
                    </div>

                    <div className=' '>
                        <img src="src\assets\seco.webp" alt="" className='' />
                    </div>
                </div>
            </div>
                
            
        </div>
        
        <div  className='bg-pink flex justify-between bottom-64 relative md:px-6 text-5xl'>
                
            
                
                <button  onClick={() => setNext(!next)}>
                    <IoIosArrowBack className='transition-all hover:translate-y-[-7px]  duration-500 ease-in-out'/>                
                </button>
                <button onClick={() => setNext(!next)} >
                    <IoIosArrowForward className='transition-all hover:translate-y-[-7px]  duration-500 ease-in-out'/>
                </button> 
            </div>


        <div className='flex justify-center  relative lg:px-6 text-3xl gap-2 cursor-pointer'onClick={() => setNext(!next)}  >
            
            {
                next ? <VscCircleLarge/> : <VscCircleLargeFilled/>
            }
            {
                !next ?   <VscCircleLarge/>  : <VscCircleLargeFilled/>  
            }
            
            
        </div>

    </div>
  )
}

export default Carousel
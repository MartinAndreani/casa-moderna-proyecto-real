import GalleryExperience from "./GalleryExperience/GalleryExperience";

const OurExperience = () => {
	return (
		<div className="mt-16 flex flex-col lg:flex-row-reverse justify-between mx-20 gap-3 lg:gap-16 py-6"id='nosotros' >
			
			<div className="flex flex-col gap-4 mb-8  ">
				<p className="text-gray-500 lg:text-xl text-center lg:self-start" >Sobre Nosotros</p>
				<h2 className="text-3xl lg:text-5xl leading-[3.5rem] font-extrabold text-gray-600 lg:text-start text-center">
					Construyendo con excelencia, calidad y liderazgo
				</h2>
				<p className="text-gray-500 lg:mb-4 lg:text-2xl  lg:w-[27rem] mt-4">
					Nuestra pasión es transformar tus sueños en realidad. <br />
					Con una trayectoria de más de 10 años en la industria de la construcción, nos
					orgullece haber dejado una huella duradera en la vida de nuestros clientes.
					<br />
					Creamos espacios únicos que reflejen tu personalidad y te brinden la comodidad y
					el bienestar que mereces.
				</p>
			</div>

			<div classnName=''>
				<GalleryExperience />
			</div>
		</div>
	);
};
export default OurExperience;

import GalleryExperience from "./GalleryExperience/GalleryExperience";

const OurExperience = () => {
	return (
		<div className="mt-16 flex flex-row justify-between mx-14 gap-16">
			<div>
				<GalleryExperience />
			</div>
			<div className="flex flex-col gap-4 w-[29rem] mb-8">
				<p className="text-gray-500 text-xl self-start">Sobre Nosotros</p>
				<h2 className="text-5xl leading-[3.5rem] font-extrabold text-gray-600">
					Construyendo con excelencia, calidad y liderazgo
				</h2>
				<p className="text-gray-500 mb-4 text-2xl w-[27rem] mt-4">
					Nuestra pasión es transformar tus sueños en realidad. <br />
					Con una trayectoria de más de 10 años en la industria de la construcción, nos
					orgullece haber dejado una huella duradera en la vida de nuestros clientes.
					<br />
					Creamos espacios únicos que reflejen tu personalidad y te brinden la comodidad y
					el bienestar que mereces.
				</p>
			</div>
		</div>
	);
};
export default OurExperience;

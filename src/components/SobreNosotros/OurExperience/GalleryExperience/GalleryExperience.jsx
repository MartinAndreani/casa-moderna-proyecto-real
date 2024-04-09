const GalleryExperience = () => {
	const className = "w-96 h-[17.5rem] object-cover rounded-md" ;

	return (
		<div className="flex items-center justify-center -z-50" >
			<div className="-mx-4 flex flex-row gap-5 relative -z-10">
				<div className="flex flex-col gap-5">
					<img
						src="/images/sobre-nosotros/gallery-1.jpg"
						alt="Imagen 1"
						className={className}
					/>
					<img
						src="/images/sobre-nosotros/gallery-3.jpg"
						alt="Imagen 2"
						className={className}
					/>
				</div>
				<div className="flex flex-col gap-5">
					<img
						src="/images/sobre-nosotros/gallery-2.jpg"
						alt="Imagen 3"
						className={className}
					/>
					<img
						src="/images/sobre-nosotros/gallery-4.jpg"
						alt="Imagen 4"
						className={className}
					/>
				</div>
			</div>
			<div className="bg-white w-[11rem] h-[11rem] rounded-full absolute -z-10 flex flex-col justify-center">
				<p className="text-[40px] text-center font-bold text-cursomGreen -mb-2 -ml-2">+10</p>
				<p className="text-[28px] text-center font-[600] text-gray-600 leading-8 mb-6">Años de experiencia</p>
			</div>
		</div>
	);
};
export default GalleryExperience;

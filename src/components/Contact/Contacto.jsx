import ContactForm from "./ContactForm/ContactForm";

const Contacto = () => {
	const classNameSection = "w-64 h-60 border-[1px] border-black flex flex-col justify-center gap-5 rounded-xl"
	const classNameSectionSelected = "text-white bg-cursomGreen"
	const classNameH5 = "font-bold text-2xl"
	const classNameParagraph = "mx-auto max-w-56 font-normal text-2xl";
	return (
		<div className="text-center flex flex-col gap-8 mt-4 mx-20">
			<p className=" text-gray-500 text-xl -mb-5
      ">Contacto</p>
			<h2 className=" text-[3.55rem] font-bold text-gray-600">
				Contáctate con nosotros
			</h2>
			<p className=" text-gray-500 text-2xl mb-10">
				Elegí el canal de comunicación que mejor se ajuste a tus preferencias
			</p>
      <div className="flex">
			<div className="p-10 pt-0 mx-3 text-[#5F5F5F] flex flex-col gap-7">
				<div className={`${classNameSection} ${classNameSectionSelected}`}>
					<h5 className={classNameH5}>Formulario</h5>
					<p className={classNameParagraph}>Completa un pequeño formulario para conocerte mejor</p>
				</div>
				<div className={classNameSection}>
					<h5 className={classNameH5}>Videollamada</h5>
					<p className={classNameParagraph}>Agenda una videollamada con nosotros</p>
				</div>
				<div className={classNameSection}>
					<h5 className={classNameH5}>Email</h5>
					<p className={classNameParagraph}>Escribinos un mail con tu consulta</p>
				</div>
			</div>

			<ContactForm/>
		</div>
		</div>
	);
};
export default Contacto;

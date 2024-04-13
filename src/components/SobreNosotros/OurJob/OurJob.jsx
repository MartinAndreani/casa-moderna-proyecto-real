import iconMsg from "../../../assets/vector-msg.svg";
import iconNotebook from "../../../assets/vector-notebook.svg";
import iconCalendar from "../../../assets/vector-calendar.svg";
const OurJob = () => {
	const classNameH4 = "-mb-2 text-cursomGreen font-bold lg:text-[1.7rem] leading-8 lg:w-[42rem]";
	const classNameParagraph = "text-gray-500 mb-4  lg:text-2xl lg:max-w-[42rem] lg:mt-4";
	const className = "lg:size-16 size-10 ";
	const classNameDiv = "flex flex-row gap-5";
	
	return (
		<div className="bg-gray-100 flex flex-row justify-between mt-10">
			<div className="lg:pl-20 pl-12 my-16 flex flex-col">
				<div className="mb-5">
					<h2 className="text-3xl lg:text-5xl leading-[3.5rem] font-extrabold text-gray-600 text-center lg:text-start">
						Nuestro proceso de trabajo
					</h2>
					<p className={classNameParagraph}>
						Desde la cotización gratuita hasta la entrega final, nuestro proceso de
						trabajo eficiente y centrado en el cliente garantiza resultados excepcionales
						en cada proyecto.
					</p>
				</div>
				<div className={classNameDiv}>
					<img className={className} src={iconMsg} alt="icono de mensaje" />
					<div className="max-w-[30rem]">
						<h4 className={classNameH4}>Cotización gratuita</h4>
						<p className={classNameParagraph}>
							Solicita una cotización gratuita o agenda una consulta para discutir tus
							necesidades y objetivos.
						</p>
					</div>
				</div>
				<div className={classNameDiv}>
					<img className={className} src={iconNotebook} alt="icono de cuaderno" />
					<div className="max-w-[30rem]">
						<h4 className={classNameH4}>Planificación y ejecución</h4>
						<p className={classNameParagraph}>
							Nos encargamos de la planificación y ejecución del proyecto, asegurando
							resultados excepcionales.
						</p>
					</div>
				</div>
				<div className={classNameDiv}>
					<img className={className} src={iconCalendar} alt="icono de calendario" />
					<div className="max-w-[30rem]">
						<h4 className={classNameH4}>Entrega y satisfacción del cliente</h4>
						<p className={classNameParagraph}>
							Realizamos una revisión exhaustiva y nos aseguramos de que estés
							completamente satisfecho con el resultado final.
						</p>
					</div>
				</div>
			</div>
			{/* <picture> */}
			<img
				className="bg-cover lg:w-[42rem] hidden lg:block overflow-hidden"
				src="/images/sobre-nosotros/ourjob.jpg"
				alt=""
			/>
			{/* </picture> */}
		</div>
	);
};
export default OurJob;

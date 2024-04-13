import { useState } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ShowEmail from "./ShowEmail/ShowEmail";
import { InlineWidget } from "react-calendly";

const Contacto = () => {
	const [state, setState] = useState("form");

	let showContact;
	if (state === "form") showContact = () => <ContactForm />;
	else if (state === "meet")
		showContact = () => (
			<div className="flex flex-col h-full">
				<div className="self-center my-[25%] absolute z-0">
				<div
					className="h-20 w-20 animate-spin rounded-full border-8 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"
					role="status"
				></div>
				</div>
				<InlineWidget
					url="https://calendly.com/allannara99/meeting-allan"
					styles={{ height: "100%", zIndex: 1 }}
				/>
			</div>
		);
	else if (state === "email") showContact = () => <ShowEmail />;

	const classNameSection =
		"w-64 h-60 border-[1px] border-black flex flex-col justify-center gap-5 rounded-xl";
	const classNameSectionSelected = "text-white bg-cursomGreen";
	const classNameH5 = "font-bold text-2xl";
	const classNameParagraph = "mx-auto max-w-56 font-normal text-2xl";
	return (
		<div className="text-center flex flex-col gap-8 mt-4 mx-20">
			<p className=" text-gray-500 text-xl -mb-5">Contacto</p>
			<h2 className=" text-[3.55rem] font-bold text-gray-600">Contáctate con nosotros</h2>
			<p className=" text-gray-500 text-2xl mb-10">
				Elegí el canal de comunicación que mejor se ajuste a tus preferencias
			</p>
			<div className="flex">
				<div className="p-10 pt-0 mx-3 text-[#5F5F5F] flex flex-col gap-7">
					<button
						onClick={() => setState("form")}
						className={`${classNameSection} ${
							state === "form" && classNameSectionSelected
						}`}
					>
						<h5 className={classNameH5}>Formulario</h5>
						<p className={classNameParagraph}>
							Completa un pequeño formulario para conocerte mejor
						</p>
					</button>
					<button
						onClick={() => setState("meet")}
						className={`${classNameSection} ${
							state === "meet" && classNameSectionSelected
						}`}
					>
						<h5 className={classNameH5}>Videollamada</h5>
						<p className={classNameParagraph}>Agenda una videollamada con nosotros</p>
					</button>
					<button
						onClick={() => setState("email")}
						className={`${classNameSection} ${
							state === "email" && classNameSectionSelected
						}`}
					>
						<h5 className={classNameH5}>Email</h5>
						<p className={classNameParagraph}>Escribinos un mail con tu consulta</p>
					</button>
				</div>

				<div className="text-[#5F5F5F] border-[1px] border-gray-300 rounded-3xl w-[50rem] min-h-[55rem] pb-5">
					{showContact()}
				</div>
			</div>
		</div>
	);
};
export default Contacto;

import ButtonGetInfo from "../../common/ButtonGetInfo/ButtonGetInfo";

const ContactForm = () => {
	return (
			<form className="flex flex-col">
				<h5 className="font-bold text-2xl text-left p-8 -mb-12">Para comenzar. ¿Quién eres?</h5>
				<div className="flex flex-wrap mt-10 gap-5 justify-center">
					<input type="text" placeholder="Tu nombre..." className="w-1/2 border-[1px] border-gray-300 rounded-xl h-14 basis-[20rem] p-5"/>
					<input type="text" placeholder="Ubicación..." className="w-1/2 border-[1px] border-gray-300 rounded-xl h-14 basis-[20rem] p-5" />
					<input type="number" placeholder="Telefono..." className="w-1/2 border-[1px] border-gray-300 rounded-xl h-14 basis-[20rem] p-5" />
					<input type="email" placeholder="Email..." className="w-1/2 border-[1px] border-gray-300 rounded-xl h-14 basis-[20rem] p-5" />
				</div>
				<h5 className="font-bold text-2xl text-left -mb-5 p-8">¿Qué tipo de revestimiento necesitas?</h5>
				<select className="w-[90%] rounded-xl h-auto p-5 bg-white border-[1px] border-gray-300 self-center">
					<option value="Microcemento y Porcelanato liquido">
						Microcemento y Porcelanato liquido
					</option>
					<option value="Construcción">
						Construcción
					</option>
				</select>
				<h5 className="font-bold text-2xl text-left p-8 -mb-5">Tipo y estado de la superficie actual</h5>
				<input
					type="text"
					className="w-[90%] rounded-xl h-auto p-4 bg-white border-[1px] border-gray-300 self-center"
					placeholder="Ej. Cerámicas, Revoque, Carpeta, Pintura, Piso, Pared "
				/>
				<h5 className="font-bold text-2xl text-left p-8 -mb-5">Cantidad total de metros cuadrados</h5>
				<input className="w-[90%] rounded-xl h-auto p-4 bg-white border-[1px] border-gray-300 self-center" type="number" placeholder="Ej. 20, 30" />
				<h5 className="font-bold text-2xl text-left p-8 -mb-5">Zona de trabajo</h5>
				<input className="w-[90%] rounded-xl h-auto p-4 bg-white border-[1px] border-gray-300 self-center" type="text" placeholder="Ej. San Rafael, Mendoza" />
				<div className="self-end mt-7 mr-14">
					<ButtonGetInfo msg="Enviar" addStyle={"w-[16rem] text-[1.3rem]"}/>
				</div>
			</form>
	);
};
export default ContactForm;

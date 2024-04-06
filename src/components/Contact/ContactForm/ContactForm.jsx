const ContactForm = () => {
	/*
		width: 362px;
		height: 65px;
		top: 9093px;
		left: 493px;
		gap: 0px;
		border-radius: 15px 0px 0px 0px;
		border: 1px 0px 0px 0px;
		opacity: 0px;
	 */
	return (
		<div className="text-[#5F5F5F] flex flex-col border-[1px] border-gray-300 rounded-3xl max-w-[50rem]">
			<form>
				<h5 className="font-bold text-2xl text-left p-8 -mb-10">Para comenzar. ¿Quién eres?</h5>
				<div className="flex flex-wrap mt-10 gap-5 justify-center">
					<input type="text" placeholder="Tu nombre..." className="w-1/2 border-[1px] border-gray-300 rounded-xl h-14 basis-[20rem] p-5"/>
					<input type="text" placeholder="Ubicación..." className="w-1/2 border-[1px] border-gray-300 rounded-xl h-14 basis-[20rem] p-5" />
					<input type="number" placeholder="Telefono..." className="w-1/2 border-[1px] border-gray-300 rounded-xl h-14 basis-[20rem] p-5" />
					<input type="email" placeholder="Email..." className="w-1/2 border-[1px] border-gray-300 rounded-xl h-14 basis-[20rem] p-5" />
				</div>
				<h5 className="font-bold text-2xl text-left -mb-4 p-8">¿Qué tipo de revestimiento necesitas?</h5>
				<select className="w-[90%] rounded-xl h-auto p-5 bg-white border-[1px] border-gray-300 ">
					<option value="Microcemento y Porcelanato liquido">
						Microcemento y Porcelanato liquido
					</option>
					<option value="Construcción">
						Construcción
					</option>
				</select>
				<h5 className="font-bold text-2xl text-left p-8 -mb-10">Tipo y estado de la superficie actual</h5>
				<input
					type="text"
					placeholder="Ej. Cerámicas, Revoque, Carpeta, Pintura, Piso, Pared "
				/>
				<h5 className="font-bold text-2xl text-left p-8 -mb-10">Cantidad total de metros cuadrados</h5>
				<input type="number" placeholder="Ej. 20, 30" />
				<h5 className="font-bold text-2xl text-left p-8 -mb-10">Zona de trabajo</h5>
				<input type="text" placeholder="Ej. San Rafael, Mendoza" />
				<button type="submit">Enviar</button>
			</form>
		</div>
	);
};
export default ContactForm;

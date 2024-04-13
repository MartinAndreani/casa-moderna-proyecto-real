import PropTypes from "prop-types";

const Revestimiento = ({ formData, onChange }) => {
	return (
		<>
			<h5 className="font-bold text-2xl text-left -mb-5 p-8">
				¿Qué tipo de revestimiento necesitas?
			</h5>
			<select
				onChange={onChange}
				defaultValue={formData.revestimiento}
				name="revestimiento"
				className="w-[90%] rounded-xl h-auto p-5 bg-white border-[1px] border-gray-300 self-center"
			>
				<option value=""></option>
				<option value="Microcemento">Microcemento</option>
				<option value="Estuco Veneciano">Estuco Veneciano</option>
				<option value="epp/galpones">Epoxi o Poliuretano p/galpones</option>
				<option value="epp/galpones">
					Fibra de vidrio, epoxi o poliuretano p/piscinas
				</option>
				<option value="epp/galpones">Texturado Plástico</option>
			</select>
			<h5 className="font-bold text-2xl text-left p-8 -mb-5">
				Tipo y estado de la superficie actual
			</h5>
			<input
				onChange={onChange}
				value={formData.superficie}
				type="text"
				name="superficie"
				className="w-[90%] rounded-xl h-auto p-4 bg-white border-[1px] border-gray-300 self-center"
				placeholder="Ej. Cerámicas, Revoque, Carpeta, Pintura, Pared"
			/>
			<h5 className="font-bold text-2xl text-left p-8 -mb-5">
				Cantidad total de metros cuadrados
			</h5>
			<input
				onChange={onChange}
				value={formData.m2}
				name="m2"
				className="w-[90%] rounded-xl h-auto p-4 bg-white border-[1px] border-gray-300 self-center"
				type="number"
				placeholder="Ej. 20, 30"
			/>
			<h5 className="font-bold text-2xl text-left p-8 -mb-5">Zona de trabajo</h5>
			<input
				onChange={onChange}
				value={formData.zona}
				name="zona"
				className="w-[90%] rounded-xl h-auto p-4 bg-white border-[1px] border-gray-300 self-center"
				type="text"
				placeholder="Ej. San Rafael, Mendoza"
			/>
		</>
	);
};

Revestimiento.propTypes = {
	formData: PropTypes.object.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default Revestimiento;

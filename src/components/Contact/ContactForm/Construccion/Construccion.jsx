import PropTypes from "prop-types";

const Construccion = ({ formData, onChange }) => {
	return (
		<>
			<h5 className="font-bold text-2xl text-left -mb-5 p-8">
				Indicar sistema constructivo:
			</h5>
			<select
				onChange={onChange}
				defaultValue={formData.sistema}
				className="w-[90%] rounded-xl h-auto p-5 bg-white border-[1px] border-gray-300 self-center"
				name="sistema"
			>
				<option value=""></option>
				<option value="Emmedue">Emmedue</option>
				<option value="Sistema EIFS">Sistema EIFS</option>
			</select>
			<fieldset onChange={onChange} value={formData.plantas} name="plantas">
				<h5 className="font-bold text-2xl text-left p-8 -mb-5">
					¿El proyecto de construcción consiste en una o dos plantas?
				</h5>
				<div className="flex justify-center gap-6 lg:gap-20">
					<div className="flex gap-2">
					<input type="radio" id="primero" name="plantas" value="1" />
					<label htmlFor="primero">Una planta</label>
					</div>
					<div className="flex gap-2">
					<input type="radio" id="segundo" name="plantas" value="2" />
					<label htmlFor="segundo">Dos plantas</label>
					</div>
					<div className="flex gap-2">
					<input type="radio" id="tercero" name="plantas" value="+2" />
					<label htmlFor="tercero">Mas de dos plantas</label>
					</div>
				</div>
			</fieldset>
			<h5 className="font-bold text-2xl text-left p-8 -mb-5">
				Localidad y Barrio de trabajo
			</h5>
			<input
				onChange={onChange}
				value={formData.zona}
				name="zona"
				className="w-[90%] rounded-xl h-auto p-4 bg-white border-[1px] border-gray-300 self-center"
				type="text"
				placeholder="Ej. Las Margaritas II, San Rafael, Mendoza"
			/>
		</>
	);
};

Construccion.propTypes = {
	formData: PropTypes.object.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default Construccion;

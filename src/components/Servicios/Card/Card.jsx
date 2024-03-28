import PropTypes from "prop-types";
import ButtonGetInfo from "../../common/ButtonGetInfo/ButtonGetInfo";

const Card = ({ img, title, body }) => {
	return (
		<div className="flex flex-col justify-around bg-white max-w-[393px] max-h-[774px] w-[373px] h-[774px] rounded-md shadow-lg px-2 border">
			<img
				src={`images/servicios/${img}`}
				alt="Descripción de la imagen"
				className="min-w-[340px] min-h-[309px] max-h-[309px] object-cover mb-4 rounded-md shadow-xl"
			/>

			<div className="p-5 pt-0 h-64">
				<h2 className="text-2xl text-gray-600 mb-4">{title}</h2>

				<p className="text-gray-500 mb-4 text-xl ">{body}</p>
			</div>
			<div className="self-center mb-3">
				<ButtonGetInfo msg={"Solicitar info vía WhatsApp"} />
			</div>
		</div>
	);
};

Card.propTypes = {
	img: PropTypes.string,
	title: PropTypes.string,
	body: PropTypes.string,
};

export default Card;

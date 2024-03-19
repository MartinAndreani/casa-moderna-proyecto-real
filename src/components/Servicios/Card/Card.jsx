import PropTypes from "prop-types";

const Card = ({ img, title, body }) => {
	return (
		<div className="flex flex-col justify-evenly bg-white max-w-[393px] max-h-[774px] w-[373px] h-[774px] rounded-md shadow-lg px-2 border pt-4">
			<img
				src={`images/${img}`}
				alt="Descripción de la imagen"
				className="w-[373px] min-h-[309px] object-cover mb-4 rounded-md shadow-xl"
			/>

			<div className="mt-4 p-5">
				<h2 className="text-2xl text-gray-600 mb-4">{title}</h2>

				<p className="text-gray-500 mb-4 text-xl ">{body}</p>
			</div>
			<button className="bg-cursomGreen hover:bg-lime-900 w-80 text-white py-4 rounded-lg self-center text-2xl bottom-0">
				Solicitar info vía WhatsApp
			</button>
		</div>
	);
};

Card.propTypes = {
	img: PropTypes.string,
	title: PropTypes.string,
	body: PropTypes.string,
};

export default Card;

import BackgroundBanner from "./BackgroundBanner/BackgroundBanner";
import CardContainer from "./Card/CardContainer";

const Servicios = () => {
	return (
		<div id="servicios">
			<div className="px-16 py-10" >
				<p className="text-center text-gray-500 text-xl">Servicios</p>
				<CardContainer />
			</div>
			<BackgroundBanner />
		</div>
	);
};

export default Servicios;

import ButtonGetInfo from "../../common/ButtonGetInfo/ButtonGetInfo";

const BackgroundBanner = () => {
	return (
		<div className="bg-service bg-no-repeat bg-cover w-full flex h-dvh">
			<div className="flex flex-col justify-center items-center gap-14 bg-black bg-opacity-50 w-dvw">
				<h2 className="text-white text-6xl font-bold text-center ">
					¡Contáctanos hoy mismo para convertir tus sueños en realidad!
				</h2>
				<ButtonGetInfo msg={"CONTACTANOS"} />
			</div>
		</div>
	);
};
export default BackgroundBanner;

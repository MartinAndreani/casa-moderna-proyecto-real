import ButtonGetInfo from "../../common/ButtonGetInfo/ButtonGetInfo";

const BackgroundBanner = () => {
	return (
		<div className="bg-service bg-no-repeat bg-cover w-full flex h-dvh">
			<div className="flex flex-col justify-center items-center gap-14 bg-black bg-opacity-50 w-dvw">
				<h2 className="text-white text-4xl lg:text-6xl font-bold text-center ">
					¡Contactanos hoy mismo y hacé tu sueño realidad!
				</h2>
				<a target="_blank" href="https://wa.link/hlvljp">
					<ButtonGetInfo msg={"CONTACTANOS"} />
				</a>
			</div>
		</div>
	);
};
export default BackgroundBanner;

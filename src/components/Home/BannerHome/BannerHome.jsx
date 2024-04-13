import ButtonGetInfo from "../../common/ButtonGetInfo/ButtonGetInfo";

const BannerHome = () => {
	return (
		<section className="flex flex-row lg:p-24 gap-3 lg:gap-14 py-40 ml-5 lg:ml-[5rem]" id="home">
			<div className="flex flex-col justify-center gap-10 lg:basis-1/2 w-80  text-left">
				<p className="text-gray-500 text-xl -my-5">Casa Moderna</p>
				<div className="flex flex-col gap-10">
					<h1 className="lg:text-5xl text-4xl  font-extrabold text-gray-600">
						Construcciones y ampliaciones industrializadas de excelencia
					</h1>
					<p className="text-gray-500 mb-4 text-xl lg:w-[27rem]">
						Servicios de construcción, edificación, remodelaciones y mantenimiento en
						general para el sector publico y privado.
					</p>
				</div>
				<div>
					<ButtonGetInfo msg={"Solicitar cotización"} addStyle={"w-60 h-14"} />
				</div>
			</div>
			<div className="pt-1.5 bg-[url('images/home.png')]  h-[31rem] w-64 lg:w-[28rem] rounded-t-[12.5rem] shadow-2xl shadow-black bg-cover"></div>
		</section>
	);
};

export default BannerHome;

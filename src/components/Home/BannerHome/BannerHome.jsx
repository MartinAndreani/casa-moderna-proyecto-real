import ButtonGetInfo from "../../common/ButtonGetInfo/ButtonGetInfo";

const BannerHome = () => {
	return (
		<section className="flex flex-row  gap-3 lg:gap-14 ml-5 lg:ml-[5rem] pt-32 py-10 pr-5 " id="home">
			<div className="flex flex-col justify-center gap-10 lg:basis-1/2 w-96  text-left lg:pt-14">
				<p className="text-gray-500 text-xl ">Casa Moderna</p>
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
					<a target='_blank' href="https://wa.link/hlvljp">
					<ButtonGetInfo msg={"Solicitar cotización"} addStyle={"w-60 h-14"} />
					</a>
				</div>
			</div>
			<div className="pt-1.5 bg-[url('public/images/home.png')]  h-[31rem] w-96 lg:w-[28rem] rounded-t-[12.5rem] shadow-2xl shadow-black bg-cover lg:mt-16"></div>
		</section>
	);
};

export default BannerHome;

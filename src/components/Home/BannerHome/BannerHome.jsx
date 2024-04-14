import ButtonGetInfo from "../../common/ButtonGetInfo/ButtonGetInfo";

const BannerHome = () => {
	return (
		<section className="flex flex-row  gap-3 lg:gap-14 -ml-5 lg:ml-[5rem] lg:pr-5 lg:pt-24 pt-32 lg:pb-20 pb-10 lg:pl-5 h- lg:h-auto " id="home">
			<div className="flex flex-col justify-center gap-10 lg:basis-3/4 w-80 ml-9 lg:ml-10 text-left lg:pt-14">
				<p className="text-gray-500 lg:text-xl -mb-4">Casa Moderna</p>
				<div className="flex flex-col gap-10">
					<h1 className="lg:text-5xl text-2xl  font-extrabold text-gray-600 lg:leading-[1.11] -mb-5 lg:mb-auto">
						Construcciones y ampliaciones industrializadas de excelencia
					</h1>
					<p className="text-gray-500 mb-4 lg:text-xl lg:w-[27rem]">
						Servicios de construcción, edificación, remodelaciones y mantenimiento en
						general para el sector público y privado.
					</p>
				</div>
				<div>
					<a target='_blank' href="https://wa.link/hlvljp">
					<ButtonGetInfo msg={"Solicitar cotización"} addStyle={"w-36 lg:w-60 h-12 lg:h-14 text-xs md:text-xl -mt-5 lg:mt-auto"} />
					</a>
				</div>
			</div>
			<div className="lg:pt-1.5 bg-home lg:h-[32rem] w-[50%] lg:w-[42rem] lg:rounded-t-[12.5rem] shadow-2xl shadow-black bg-cover lg:mt-16 lg:mr-28 -my-10"></div>
		</section>
	);
};

export default BannerHome;

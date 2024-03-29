import ButtonGetInfo from "../../common/ButtonGetInfo/ButtonGetInfo";

const BannerHome = () => {
	return (
		<section className="flex flex-row p-28 gap-5 py-36" id="home">
			<div className="flex flex-col justify-center gap-10 basis-1/2 text-left">
				<p className="text-gray-500 text-xl -my-5">Casa Moderna</p>
				<div className="flex flex-col gap-10">
					<h1 className="text-5xl leading-[3.5rem] font-extrabold text-gray-600">
						Construcciones y ampliaciones industrializadas de excelencia
					</h1>
					<p className="text-gray-500 mb-4 text-xl w-[27rem]">
						Servicios de construcción, edificación, remodelaciones y mantenimiento en
						general para el sector publico y privado.
					</p>
				</div>
				<div>
					<ButtonGetInfo msg={"Solicitar cotización"} addStyle={"w-60 h-16"} />
				</div>
			</div>
      <div >
          <img
            src="/images/home.png"
            alt="home casa moderna"
            className="basis-1/2 h-[520px] w-[28rem] rounded-t-[12.5rem] shadow-2xl shadow-black"
          />
      </div>
		</section>
	);
};

/*
width: 484px;
height: 573px;
top: 273px;
left: 814px;
gap: 0px;
border-radius: 200px 200px 0px 0px;
opacity: 0px;

*/

export default BannerHome;

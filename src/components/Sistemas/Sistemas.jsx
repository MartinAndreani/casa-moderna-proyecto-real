const Sistemas = () => {
	return (
		<div className="bg-black flex h-dvh flex-col px-16 gap-5">
			<p className="mx-auto pt-10 text-white text-[28px]">Sistemas</p>
			<h2 className="mx-auto text-5xl text-white leading-[3.5rem] font-extrabold">
				Conoce nuestros sistemas
			</h2>
			<div className="flex">
				<div>
					<h4 className="text-white font-bold text-[1.7rem] leading-8 w-[42rem]">
						Sistema constructivo Emmedue
					</h4>
					<p className="text-white mb-4 text-2xl max-w-[42rem] mt-4">
						Es un sistema de construcción ingenioso y alternativo, a los sistemas
						tradicionales, que ha logrado grandes éxitos en los últimos 40 años. El
						corazón del sistema es el panel Emmadue de poliestireno expandido: modular,
						encerrado entre dos mallas de acero galvanizado.
					</p>
					<p className="text-white mb-4 text-2xl max-w-[42rem] mt-4">
						En el ámbito de los sistemas constructivos, el sistema constructivo
						sismorresistente Emmedue ha logrado un prestigio considerable gracias a la
						experiencia lograda a través del tiempo, y las certificaciones internacionales
						recibidas.
					</p>
				</div>
				<img src="/images/sistemas/emmedue.png" alt="" />
			</div>
		</div>
	);
};
export default Sistemas;

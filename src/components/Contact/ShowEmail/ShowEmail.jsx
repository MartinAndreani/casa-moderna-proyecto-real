const ShowEmail = () => {
	return (
		<div className="flex flex-col items-start gap-7">
			<h5 className="font-bold text-2xl -mb-5 p-8">
				Envíanos un mail directamente nuestro correo
			</h5>

			<a
				href="mailto:casamoderna.mza@gmail.com"
				className="text-blue-400 text-xl hover:underline border-[1px] border-gray-300 p-4 self-stretch lg:mx-10 mx-5 rounded-xl text-left pl-10"
			>
				casamoderna.mza@gmail.com
			</a>
		</div>
	);
};
export default ShowEmail;

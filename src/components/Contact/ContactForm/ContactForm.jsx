import { useState } from "react";
import ButtonGetInfo from "../../common/ButtonGetInfo/ButtonGetInfo";
import emailjs from "@emailjs/browser";
import Revestimiento from "./Revestimiento/Revestimiento";
import Construccion from "./Construccion/Construccion";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
	const [loading, setLoading] = useState(false);
	const [send, setSend] = useState(false);
	const [formData, setFormData] = useState({
		nombre: "",
		ubicacion: "",
		telefono: "",
		email: "",
		servicio: "",
		zona: "",
		revestimiento: "",
		superficie: "",
		m2: "",
		sistema: "",
		plantas: "",
	});

	const handleChange = ({ target: { name, value } }) => {
		if (!name) throw new Error(`Internal error, input: ${{ name }}`);
		setFormData({ ...formData, [name]: value });
	};

	const serviceId = import.meta.env.VITE_SERVICE_ID;
	const publicKey = import.meta.env.VITE_PUBLIC_KEY;
	const templateId = import.meta.env.VITE_TEMPLATE_ID;

	const sendEmail = (e) => {
		e.preventDefault();
		if (Object.values(formData).some((key) => key === "")) {
			toast.error("¡Faltan campos por completar!", {
				position: "bottom-right",
				autoClose: 2000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
				transition: Flip,
			});
			return;
		}
		setLoading(true);
		emailjs
			.send(serviceId, templateId, formData, { publicKey })
			.then(() => {
				setSend(true);
				console.log("SUCCESS!");
			})
			.catch((error) => {
				toast.error("Ocurrio un error insesperado, contactarse por mail...", {
					position: "bottom-right",
					autoClose: 2000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
					transition: Flip,
				});
				console.log("FAILED...", error);
			})
			.finally(() => {
				setFormData({
					nombre: "",
					ubicacion: "",
					telefono: "",
					email: "",
					servicio: "",
					zona: "",
					revestimiento: "",
					superficie: "",
					m2: "",
					sistema: "",
					plantas: "",
				});
				setLoading(false);
			});
	};

	if (loading) {
		return (
			<div className="flex flex-col justify-center items-center gap-5 h-full">
				<div
					className="h-20 w-20 animate-spin rounded-full border-8 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"
					role="status"
				></div>
				<span className="text-lg">Enviando...</span>
				<div className="self-end mt-36 mr-14">
					<ButtonGetInfo
						msg="Enviar"
						addStyle={"w-[16rem] text-[1.3rem] bg-gray-500 hover:bg-gray-500"}
						disable={true}
					/>
				</div>
			</div>
		);
	}

	if (send) {
		return (
			<div className="mx-20 text-xl mt-28">
				<p>¡Muchas gracias por contactarte con nosotros!</p>
				<p>
					El formulario ha sido procesada con éxito! En las próximas horas nos estaremos
					comunicando con usted.
				</p>
			</div>
		);
	}

	return (
		<form className="flex flex-col h-full" onSubmit={sendEmail}>
			<ToastContainer
				position="bottom-right"
				autoClose={2000}
				hideProgressBar
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
			<h5 className="font-bold text-2xl text-left p-8 -mb-12">
				Para comenzar. ¿Quién eres?
			</h5>
			<div className="flex flex-wrap mt-10 gap-5 justify-center">
				<input
					onChange={handleChange}
					value={formData.nombre}
					name="nombre"
					type="text"
					placeholder="Tu nombre..."
					className="w-1/2 border-[1px] border-gray-300 rounded-xl h-14 basis-[20rem] p-5"
				/>
				<input
					onChange={handleChange}
					value={formData.ubicacion}
					name="ubicacion"
					type="text"
					placeholder="Ubicación..."
					className="w-1/2 border-[1px] border-gray-300 rounded-xl h-14 basis-[20rem] p-5"
				/>
				<input
					onChange={handleChange}
					value={formData.telefono}
					name="telefono"
					type="number"
					placeholder="Telefono..."
					className="w-1/2 border-[1px] border-gray-300 rounded-xl h-14 basis-[20rem] p-5"
				/>
				<input
					onChange={handleChange}
					value={formData.email}
					name="email"
					type="email"
					placeholder="Email..."
					className="w-1/2 border-[1px] border-gray-300 rounded-xl h-14 basis-[20rem] p-5"
				/>
			</div>
			<h5 className="font-bold text-2xl text-left -mb-5 p-8">
				¿Qué servicios te interesan?
			</h5>
			<select
				name="servicio"
				onChange={({ target: { name, value } }) => {
					if (value === "Revestimientos") {
						setFormData({
							...formData,
							sistema: "NO APLICA.",
							plantas: "NO APLICA.",
							revestimiento: "",
							superficie: "",
							m2: "",
							[name]: value,
						});
					} else if (value === "Construccion") {
						setFormData({
							...formData,
							sistema: "",
							plantas: "",
							revestimiento: "NO APLICA.",
							superficie: "NO APLICA.",
							m2: "NO APLICA.",
							[name]: value,
						});
					} else
						setFormData({
							...formData,
							revestimiento: "",
							superficie: "",
							m2: "",
							sistema: "",
							plantas: "",
							[name]: value,
						});
				}}
				className="w-[90%] rounded-xl h-auto p-5 bg-white border-[1px] border-gray-300 self-center"
				defaultValue={formData.servicio}
			>
				<option value=""></option>
				<option value="Revestimientos">Revestimientos</option>
				<option value="Construccion">Construcción / Obra Nueva</option>
			</select>
			{formData.servicio === "Revestimientos" ? (
				<Revestimiento formData={formData} onChange={handleChange} />
			) : formData.servicio === "Construccion" ? (
				<Construccion formData={formData} onChange={handleChange} />
			) : (
				""
			)}
			<div className="self-end mt-7 mr-14">
				<ButtonGetInfo msg="Enviar" addStyle={"w-[16rem] text-[1.3rem]"} />
			</div>
		</form>
	);
};
export default ContactForm;

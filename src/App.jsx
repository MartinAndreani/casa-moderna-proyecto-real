import BannerHome from "./components/Home/BannerHome/BannerHome";
import Navbar from "./components/NavBar/Navbar";
import Servicios from "./components/Servicios/Servicios";
import Footer from "./components/Footer/Footer";
import SobreNosotros from "./components/SobreNosotros/SobreNosotros";
import Sistemas from "./components/Sistemas/Sistemas";
import Contacto from "./components/Contact/Contacto";

const App = () => {
	return (
		<div className="font-roboto">
			<Navbar />
			<div className="bg-gradient-to-b from-white via-gray-200 to-gray-300 h-auto">
				<BannerHome />
				<Sistemas/>
				<Servicios />
			</div>
			<SobreNosotros />
			<Contacto/>
			<Footer />
		</div>
	);
};


export default App;

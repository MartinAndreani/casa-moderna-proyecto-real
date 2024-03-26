import BannerHome from './components/Home/BannerHome/BannerHome' 
import Navbar from './components/NavBar/Navbar' 
import Servicios from './components/Servicios/Servicios'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <div className="bg-gradient-to-b from-white via-gray-200 to-gray-400 h-auto font-roboto ">
      <Navbar/>
      <BannerHome/>
      <Servicios/>
      <Footer/>
    </div>
  )
}

export default App
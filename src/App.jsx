import BannerHome from './components/Home/BannerHome/BannerHome'
import Navbar from './components/NavBar/Navbar'
import Servicios from './components/Servicios/Servicios'


const App = () => {
  return (
    <div className="bg-gradient-to-b from-white via-gray-200 to-gray-400 h-auto font-roboto">
      <Navbar/>
      <BannerHome/>
      <Servicios/>
    </div>
  )
}

export default App

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "../Pages/index.jsx";
import { Navbar } from "../Components/Navbar.jsx";
import { Footer } from "../Components/Footer.jsx";
import ContactUs from "../Pages/contactUs.jsx";
import OurTeam from "../Pages/ourTeam.jsx";
import AboutUs from "../Pages/aboutUs.jsx";
import Curses from "../Pages/curses.jsx";
const RouteG = () => {

  return <>

    <Router>
      <Navbar />
      <Routes>

        <Route path="/inicio" element={<Index />} />
        <Route path="/contactanos" element={<ContactUs />} />
        <Route path="/sobre-nosotros" element={<AboutUs />} />
        <Route path="/nuestro-equipo" element={<OurTeam />} />
        <Route path="/cursos" element={<Curses />} />
        <Route path="*" element={<Index />} />
      </Routes>
      <Footer></Footer>
    </Router>
  </>
}

export default RouteG;


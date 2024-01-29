import "../styles/Apps.css"
import Navbar from "./Navbar";
import Footer from "./Footer";
import Homes from "../pages/Homes";
import Menu from "../pages/Menu";
import About from "../pages/About";
import Contact from "../pages/Contact";
import { Route, Routes } from "react-router-dom";

function Res() {
  return (
    <div className="Apps">
      <Navbar />
      <Routes>
        <Route path="/"  element={<Homes/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Res;
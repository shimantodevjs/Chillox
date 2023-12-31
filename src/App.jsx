import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SpecialOffer from "./components/SpecialOffer";
import OurMenu from "./components/OurMenu";
import Feedback from "./components/Feedback";
import Location from "./components/Location";
import ReturnToTop from "./components/ReturnToTop";
 
const App=()=> {
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroOffset, setHeroOffset] = useState(0);

  const handleMenuToggle= (isOpen)=>{
    setMenuOpen(isOpen)
    setHeroOffset(isOpen ? 250: 0)
  }


  return (
    <div className="relative">
      <Navbar onMenuToggle={handleMenuToggle} />
      <Hero offset={heroOffset} />
      <SpecialOffer />
      <OurMenu />
      <Feedback />
      <Location />
      <Footer />
      <ReturnToTop />
    </div>
  )
}

export default App;
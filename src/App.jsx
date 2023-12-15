import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar"; 
 
const App=()=> {
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroOffset, setHeroOffset] = useState(0);

  const handleMenuToggle= (isOpen)=>{
    setMenuOpen(isOpen)

    
    setHeroOffset(isOpen ? 250: 0)
  }
  return (
    <>
      <Navbar onMenuToggle={handleMenuToggle} />
      <Hero offset={heroOffset} />
    </>
  )
}

export default App;
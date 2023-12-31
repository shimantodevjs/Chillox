import React from 'react'
import { Link } from 'react-scroll'
import { FaArrowUp } from "react-icons/fa";

const ReturnToTop = () => {
  return (
    
     <Link to='home' smooth={true} duration={500} 
     className='flex items-center gap-1 fixed bottom-5 right-5 z-40 bg-red-400 
     hover:bg-brand text-white p-2 cursor-pointer rounded-md'>
        <FaArrowUp /> Return to Top
    </Link>
  )
}

export default ReturnToTop

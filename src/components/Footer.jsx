import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { TiSocialLinkedin } from "react-icons/ti";

const Footer = () => {
  return (
    <div className='bg-gray-900'>
        <div className="py-[5rem] flex justify-evenly items-center flex-col h-[80vh]">
           <div className="flex justify-between items-center w-[30%] max-lg:w-[60%]">
           <div className="footer-icons">
              <a href="https://www.facebook.com/chillox.burgers" target="_blank">
              <FaFacebookF />
              </a>
           </div>

           <div className="footer-icons">
              <a href="https://www.instagram.com/chillox.burgers?igsh=MTdiMmg5dTA0eTg2ZQ==" target="_blank">
              <FaInstagram />
              </a>
           </div>

           <div className="footer-icons">
              <a href="https://www.youtube.com/results?search_query=chillox" target="_blank">
              <AiOutlineYoutube />
              </a>
           </div>

           <div className="footer-icons">
              <a href="https://www.linkedin.com/company/chillox/?originalSubdomain=bd" target="_blank">
              <TiSocialLinkedin />
              </a>
           </div>
           </div>
           <img src="./chillox.jpg" alt="Chillox" className=" h-[100px] w-[100px] max-sm:h-[50px] max-sm:w-[50px]"/>
           <div className="flex flex-col justify-center items-center gap-4">
              <div className="max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:gap-2">
                <span className="text-sm text-gray-200 px-5 border-r border-brand max-sm:border-none">Chillox restaurant</span>
                <span className="text-sm text-gray-200 px-5 border-r border-brand max-sm:border-none" >Dhaka,Chattogram & Mymensingh</span>
                <span className="text-sm text-gray-200 px-5 border-r border-brand max-sm:border-none">Telephone- +09678361361</span>
                <span className="text-sm text-gray-200 px-5 ">chillox.burgers@gmail.com</span>
              </div>
              <div className="text-gray-500 text-sm">
                Copyright © 2024 Chillox. All rights reserved.
              </div>
           </div>
        </div>
    </div>
  )
}

export default Footer
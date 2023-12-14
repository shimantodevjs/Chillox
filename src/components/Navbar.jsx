import {useState} from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import {BsFillCartFill} from 'react-icons/bs'
import { FaLocationDot } from "react-icons/fa6";


const Navbar = () => {

    const [isDeliveryActive, setDeliveryActive] = useState(true);
    const [isPickupActive, setPickupActive] = useState(false);

    const toggleDelivery = () => {
      setDeliveryActive(true);
      setPickupActive(false);
     };

    const togglePickup = () => {
       setPickupActive(true);
       setDeliveryActive(false);
     };

    const [isDhakaActive, setDhakaActive] = useState(true);
    const [isChattoActive, setChattoActive] = useState(false);

    const toggleDhaka = () => {
      setDhakaActive(true);
      setChattoActive(false);
     };

    const toggleChatto = () => {
       setChattoActive(true);
       setDhakaActive(false);
     };

  return (
    <div className='mx-auto h-[80px] max-w-[1640px] flex items-center justify-between p-4'>
        {/* left */}
        <div className='flex items-center gap-4 max-sm:gap-2'>

        <div className='cursor-pointer'>
          <AiOutlineMenu size={30} />
        </div>
        <img src="../../public/logo.png" alt="Chillox" className= 'h-[4rem] max-sm:h-[3rem]' />
        <div className='flex items-center bg-gray-200 rounded-full text-[14px] max-sm:text-[12px]'>
             <p
            className={`cursor-pointer p-3 max-sm:p-2 ${isDeliveryActive ? 'bg-red-600 text-white rounded-full ' : ''}`}
            onClick={toggleDelivery}
             >
               Delivery
            </p>
            <p
            className={`cursor-pointer p-3 max-sm:p-2 ${isPickupActive ? 'bg-red-600 text-white rounded-full' : ''}`}
            onClick={togglePickup}
            >
            Pickup
            </p>
        </div>
        </div>
        {/* middle */}

        <div className='flex items-center justify-center gap-2 max-lg:hidden'>
            <FaLocationDot size={30}/>
            <div className='flex items-center bg-gray-200 text-[14px] '>
             <p
            className={`cursor-pointer px-10 py-2  ${isDhakaActive ? 'bg-red-600 text-white ' : ''}`}
            onClick={toggleDhaka}
             >
               Dhaka
            </p>
            <p
            className={`cursor-pointer px-10 py-2  ${isChattoActive ? 'bg-red-600 text-white' : ''}`}
            onClick={toggleChatto}
            >
             Chattogram
            </p>
        </div>

        </div>

        

        {/* right */}
        <button className='flex justify-center items-center gap-2 
                         hover:bg-red-500 '>

              <BsFillCartFill /> Cart
        </button>

    </div>
  )
}

export default Navbar

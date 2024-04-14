import {useState} from 'react'
import { BsCart4 } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/reducers/cartSlice';

const BurgerCard = ({burger}) => {
    
  const dispatch = useDispatch();
  const [showTick, setShowTick] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...burger, quantity: 1 }));
    setShowTick(true);
    
    setTimeout(() => {
      setShowTick(false);
    }, 2000);
  };

  return (
    
    <div className='flex justify-center items-center  bg-white shadow-lg h-[150px] w-[400px] max-lg:flex-col max-lg:scale-90 max-lg:h-[300px] max-lg:w-[180px]'>
      <img src={burger.img} alt="" className=' h-full w-[70%] max-lg:w-full object-cover' />

      <div className='flex flex-col justify-between items-start p-3 h-full w-full max-lg:h-[70%] max-lg:flex-col'>
      <div className='text-xl pt-2'>{burger.name}</div>
      <div className='flex justify-between items-center w-full '>
        <div >{burger.price} ৳</div>
      
        <div
        className={`flex items-center gap-1 text-brand border border-brand p-1 rounded-lg cursor-pointer hover:bg-brand hover:text-white ${
          showTick ? 'tick-animation' : ''
        }`}
        onClick={handleAddToCart}
      >
        {showTick ? (
          <>
            <span className='max-lg:hidden'>Added</span><TiTick className='text-xl' />
          </>
        ) : (
          <>
            <span className='max-lg:hidden'>Cart</span>
            <BsCart4 className='text-xl'/>
          </>
        )}
      </div>
        
      </div>
      </div>
    </div>
  )
}

export default BurgerCard


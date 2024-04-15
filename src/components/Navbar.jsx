import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-scroll';
import Cart from './Cart';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
import { IoIosCloseCircleOutline } from 'react-icons/io';

const Navbar = ({onMenuToggle}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [cartOpen , setCartOpen] = useState(false);
    const [isDeliveryActive, setDeliveryActive] = useState(true);
    const [isPickupActive, setPickupActive] = useState(false);

    const cartItems = useSelector(state => state.cart.items);
    const totalCartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    const toggleNavbar = () => {
        setMenuOpen(!menuOpen);
        onMenuToggle(!menuOpen);
    };

    const toggleCart = () =>{
        setCartOpen(!cartOpen);
    };

    const toggleDelivery = () => {
        setDeliveryActive(true);
        setPickupActive(false);
    };

    const togglePickup = () => {
        setPickupActive(true);
        setDeliveryActive(false);
    };

    return (
        <div className={'mx-auto h-[80px] lg:h-[100px] max-w-full flex items-center justify-between p-4 bg-white z-[999]'} id='home'>

            {/* left */}
            <div className='flex items-center gap-4 max-sm:gap-2'>
                <div className='cursor-pointer lg:hidden' onClick={toggleNavbar}>
                    {menuOpen ? <IoIosCloseCircleOutline size={30} /> : <AiOutlineMenu size={30} />}
                </div>

                <img src="./logo.png" alt="Chillox" className='h-[4rem] max-sm:h-[3rem]' />

                <div className='flex items-center bg-gray-200 rounded-full text-[14px] max-sm:text-[12px]'>
                    <p className={`cursor-pointer p-3 max-sm:p-2 transition-all duration-300 ease-in-out ${isDeliveryActive ? 'bg-brand text-white rounded-full ' : ''}`} onClick={toggleDelivery}>
                        Delivery
                    </p>
                    <p className={`cursor-pointer p-3 max-sm:p-2 transition-all duration-300 ease-in-out ${isPickupActive ? 'bg-brand text-white rounded-full' : ''}`} onClick={togglePickup}>
                        Pickup
                    </p>
                </div>
            </div>

            {/* right */}
        <div className='flex items-center justify-center gap-2 '>

            <div className={`${menuOpen ? '' : 'max-lg:hidden'}`}>
                <div className={'flex items-center justify-center gap-2 max-lg:flex-col max-lg:absolute max-lg:top-[80px] max-lg:left-0 max-lg:w-full bg-white pb-2'}>
                <Link to='home' smooth={true} duration={500} className='nav-link'>Home</Link>
                <Link to='special' smooth={true} duration={500} className='nav-link'>Special Offer</Link>
                <Link to='menu' smooth={true} duration={500} className='nav-link'>Menu</Link>
                <Link to='feedbacks' smooth={true} duration={500} className='nav-link'>Feedbacks</Link>
                <Link to='location' smooth={true} duration={500} className='nav-link'>Outlet Location</Link>
                </div>
            </div>


                <button className='flex justify-center items-center gap-2 hover:bg-red-500 lg:mt-[-6px] relative' onClick={toggleCart}>
                    <BsFillCartFill /> Cart {cartItems.length > 0 && <span className='absolute top-[-15px] right-[-5px] bg-black p-1 rounded-full'>{totalCartQuantity}</span>}
                </button>
            </div>

            {cartOpen && <Cart toggleCart={toggleCart}/>}
        </div>
    );
};

export default Navbar;


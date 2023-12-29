import { TbCircleArrowRightFilled } from "react-icons/tb";
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart } from '../Redux/reducers/cartSlice';
import { MdOutlineDelete } from "react-icons/md";

const Cart = ({ toggleCart }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveItem = (itemId) => {
  dispatch(removeFromCart({ id: itemId }));
};

  const handleResetCart = () => {
    dispatch(clearCart());
  };

  const totalPrice = () => {
    let total = 0;
    cart.items.forEach((item) => (total += item.price * item.quantity));
    return total;
  };

  return (
    <div className="fixed top-0 right-0 bg-white  z-10 overflow-auto h-[100vh] w-[30%] border-b-2 p-[30px] shadow-md">

      <div className="flex justify-between">
      <h1 className="text-4xl mb-5">Cart</h1>
      <TbCircleArrowRightFilled onClick={toggleCart} className="text-4xl text-brand cursor-pointer"/>
      </div>
      
      <div className="flex flex-col gap-4">
      {cart.items?.map((item) => (
        <div className="flex justify-between items-center w-full" key={item.id}>
          <img src={item.img} alt="" className="h-[100px] w-[100px] object-cover" />
          <div className="details">
            <h1>{item.title}</h1>
            <div className="price">
              {item.quantity}  ×  {item.price} ৳
            </div>
          </div>
          <span onClick={() => handleRemoveItem(item.id)}>
            <span className="text-3xl text-brand cursor-pointer"><MdOutlineDelete /></span>
          </span>
        </div>
      ))}
      </div>

      <div className="mt-10 flex flex-col gap-4 justify-start items-start">

      <div>
        <span>SUBTOTAL: </span>
        <span className="priceTotal">{totalPrice()} ৳</span>
      </div>

     
      <div className="flex justify-between items-center w-full">
      <button>PROCEED TO CHECKOUT</button>
      <span onClick={handleResetCart} className="cursor-pointer bg-red-200 rounded-md p-2">Reset Cart</span>
      </div>

    </div>
  
    </div>
  );
};

export default Cart;

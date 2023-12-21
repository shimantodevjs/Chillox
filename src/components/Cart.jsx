import { TbCircleArrowRightFilled } from "react-icons/tb";
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart } from '../Redux/reducers/cartSlice';

const Cart = ({ toggleCart }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId));
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
    <div className="fixed top-0 right-0 bg-white  z-10 overflow-auto h-[100vh] border-b-2 p-[30px] shadow-md">
      <div className="flex justify-between items-center">
      <h1 className="text-4xl">Cart</h1>
      <TbCircleArrowRightFilled onClick={toggleCart} className="text-4xl text-brand cursor-pointer"/></div>
      {cart.items?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <div className="price">
              {item.quantity} x {item.price} ₽
            </div>
          </div>
          <span onClick={() => handleRemoveItem(item.id)}>
            {/* Replace with your Delete icon */}
            <span>Delete</span>
          </span>
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span className="priceTotal">{totalPrice()} ₽</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span onClick={handleResetCart}>Reset Cart</span>
    </div>
  );
};

export default Cart;

import { useEffect , useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBurgers , setBurgerTypeFilter } from '../Redux/reducers/menuSlice';
import BurgerCard from './BurgerCard';

const OurMenu = () => {
  const [cartOpen , setCartOpen] = useState(false)
  const dispatch = useDispatch();
  const { burgers, status, error , burgerTypeFilter } = useSelector((state) => state.menu);

  useEffect(() => {
    dispatch(fetchBurgers());
    dispatch(setBurgerTypeFilter('beef'));
  }, [dispatch]);

  const handleFilter = (type) => {
      dispatch(setBurgerTypeFilter(type));
  };

  const toggleCart = () =>{
    setCartOpen(!cartOpen)
  }

  const filteredBurgers = burgerTypeFilter
    ? burgers.filter((burger) => burger.type === burgerTypeFilter)
    : burgers;

   if (status === 'loading') {
    return (
    <div className="flex justify-center items-center h-screen">
      <img
        src='./Infinity.gif'
        alt="Loading"
      />
    </div>
  );
  }
  
  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='bg-[#F0EAD6] mt-[-5rem] pb-[5rem]' id='menu'>
      <h1 className='section-header pt-[5rem] pb-[2rem]'>Our Menu</h1>
      <div className=' grid grid-cols-6 max-sm:grid-cols-2 max-lg:grid-cols-3 gap-2 max-lg:gap-3 px-[5rem] max-sm:px-[2rem] mb-[3rem]'>
      <button
          className={` ${burgerTypeFilter === 'beef' ? 'bg-white text-brand outline-brand rounded' : 'bg-brand text-white'}`}
          onClick={() => handleFilter('beef')}
        >
          Beef
      </button>

      <button
          className={` ${burgerTypeFilter === 'chicken' ? 'bg-white text-brand outline-brand rounded' : 'bg-brand text-white'}`}
          onClick={() => handleFilter('chicken')}
        >
          Chicken
      </button>

      <button
          className={` ${burgerTypeFilter === 'Snacks' ? 'bg-white text-brand outline-brand rounded' : 'bg-brand text-white'}`}
          onClick={() => handleFilter('Snacks')}
        >
          Snacks
      </button>

      <button
          className={` ${burgerTypeFilter === 'fish' ? 'bg-white text-brand outline-brand rounded' : 'bg-brand text-white'}`}
          onClick={() => handleFilter('fish')}
        >
          Fish
      </button>

      <button
          className={` ${burgerTypeFilter === 'desserts' ? 'bg-white text-brand outline-brand rounded' : 'bg-brand text-white'}`}
          onClick={() => handleFilter('desserts')}
        >
          Desserts
      </button>

      <button
          className={` ${burgerTypeFilter === 'drinks' ? 'bg-white text-brand outline-brand rounded' : 'bg-brand text-white'}`}
          onClick={() => handleFilter('drinks')}
        >
          Drinks
      </button>
      </div>
      
      

      <div className='flex justify-center items-center'>
      <div className='grid grid-cols-2 max-lg:grid-cols-4 max-sm:grid-cols-2 gap-2'>
      {filteredBurgers.map((burger) => (
        <BurgerCard
          burger={burger} 
          key={burger.id}
        />
      ))}
      </div>
      </div>
    </div>
  );
};

export default OurMenu;



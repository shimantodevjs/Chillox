import {useEffect} from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { fetchBurgers } from '../Redux/reducers/menuSlice'
import BurgerCard from './BurgerCard';

const OurMenu = () => {

  const dispatch = useDispatch();
  const { burgers , status , error}= useSelector((state)=> state.menu)

  useEffect(() =>{
    dispatch(fetchBurgers());
  },[dispatch]);

  if(status === 'loading'){
    return <div>Loading...</div>
  }

  if (status === 'failed'){
    return <div>Error: {error}</div>  
  }

  return (
    <div className='bg-[#e7e7e5] mt-[-5rem]'>
      <h1 className='section-header p-[5rem]'>Our Menu</h1>
        {burgers.map((burger) => (
          <BurgerCard burger={burger} key={burger.name} />
        ))}
    </div>
  )
}

export default OurMenu


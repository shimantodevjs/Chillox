import React from 'react'

const BurgerCard = ({burger}) => {
  return (
    
    <div className='flex justify-start items-start w-[500px] max-sm:w-[300px] h-[150px]  bg-white shadow-lg'>
      <img src={burger.img} alt="" className='h-[150px] min-w-[160px]  object-cover' />
      <div className='flex flex-col justify-center items-start p-3 w-full gap-[2.5rem]'>
      <div className='text-xl'>{burger.name}</div>
      <div className='flex justify-between items-center p-2 gap-[8rem]'>
        <div className='text-xl'>{burger.price} ৳</div>
        <button>Add to Cart</button>
      </div>
      </div>
    </div>
  )
}

export default BurgerCard


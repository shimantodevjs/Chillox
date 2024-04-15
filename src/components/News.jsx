import React from 'react'
    
const News = () => {

   
  
      return (
        <div className='flex max-lg:flex-col gap-7 max-lg:gap-0'>
         {/* left */}

          <div className='w-[50%] max-lg:w-[100%]  border-r-[1px] border-gray-400 mt-5 mb-5 px-10 '>
            <div className='py-5'>
            <img src="/hero6.jpg" alt="" className='news-img' />
            <div className='flex justify-center '>
            <a href="tel:+09678361361" className=' border-brand border border-t-0 p-2 bg-red-100 hover:bg-brand hover:text-white'>Call Now: 09678361361</a>
            </div>
            </div>

            <div>
            <img src="/hero1.png" alt="" className='news-img' />
            <h1 className='text-2xl mt-5 text-brand'>Banani</h1>
            <h1 className='text-2xl mt-1'>New opening in Dhaka!</h1>
            <h1 className='mt-1'>Get 10% Discount in Banani Outlet, dont miss the chance</h1>
            </div>
          </div>

          {/* right */}

          <div className='p-5 mb-5 flex justify-center  items-center'>
            
            <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-[60px] max-sm:gap-5 '>

            <div className='news-card '>
            <img src="/hero2.png" alt="" className='cursor-pointer max-sm:h-[100px] max-sm:w-[100px]' />
            <div>
            <h1 className='text-brand mt-2'>Happiness!</h1>
            <h1>Get 15% Discount! More ADDA with friends</h1>
            </div>
            </div>

            <div className='news-card'>
            <img src="/hero3.png" alt="" className='cursor-pointer max-sm:h-[100px] max-sm:w-[100px] ' />
            <div>
            <h1 className='text-brand mt-2'>I-MISS-U</h1>
            <h1>Share desserts with loved ones</h1>
            </div>
            </div>

            <div className='news-card'>
            <img src="/hero4.png" alt="" className='cursor-pointer max-sm:h-[100px] max-sm:w-[100px]'/>
            <div>
            <h1 className='text-brand mt-2'>Beef or Chicken</h1>
            <h1>Which one you prefer? Tell us</h1>
            </div>
            </div>

            <div className='news-card'>
            <img src="/hero5.jpg" alt="" className='cursor-pointer max-sm:h-[100px] max-sm:w-[100px] '/>
            <div>
            <h1 className='text-brand mt-2'>Meme contest!</h1>
            <h1>Its your Chance, be the WINNER</h1>
            </div>
            </div>

            </div>

          </div>
        </div>
      )
    }
    
    export default News
    
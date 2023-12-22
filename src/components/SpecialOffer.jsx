import React from 'react'

const SpecialOffer = () => {
  return (
    <div className='mb-10 bg-[#e7e7e5] pb-[2rem]'>
      <h1 className='section-header'
       >Special Offer</h1>

      <div className='grid grid-cols-3 gap-10 px-10 max-lg:grid-cols-2 max-sm:flex max-sm:flex-col'>

          <div className='specialOffer-container'>
          
          <div className='overflow-hidden'>
            <img src="./special1.jpg" alt="" className='specialOffer-img' />
          </div>

            <div>

            <div className='text-2xl max-lg:text-xl text-brand px-5 pt-2'>Signature Burger</div>

            <div className='flex gap-5 text-xl max-lg:text-sm items-center px-5 pb-5 mt-4'>
            <div className='text-line-through'>499৳</div>
            <div>450৳</div>
            </div>

            </div>

          </div>

         <div className='specialOffer-container'>
          
          <div className='overflow-hidden'>
            <img src="./special2.jpg" alt="" className='specialOffer-img' />
          </div>

            <div>

            <div className='text-2xl max-lg:text-xl text-brand px-5 pt-2'>Beef Bacon Burger</div>

            <div className='flex gap-5 text-xl max-lg:text-sm items-center px-5 pb-5 mt-4'>
            <div className='text-line-through'>319৳</div>
            <div>270৳</div>
            </div>

            </div>

          </div>

          <div className='specialOffer-container'>
          
          <div className='overflow-hidden'>
            <img src="./special3.jpg" alt="" className='specialOffer-img' />
          </div>

            <div>

            <div className='text-2xl max-lg:text-xl text-brand px-5 pt-2'>Special Combo</div>

            <div className='flex gap-5 text-xl max-lg:text-sm items-center px-5 pb-5 mt-4'>
            <div className='text-line-through'>799৳</div>
            <div>699৳</div>
            </div>

            </div>

          </div>

      </div>
    </div>
  )
}

export default SpecialOffer

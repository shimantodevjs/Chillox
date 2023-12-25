import React from 'react'

const SpecialOffer = () => {
  return (
    <div className='mb-10 mt-[-2rem] bg-[#e7e7e5] pb-[2rem]'>
      <h1 className='section-header'
       >Special Offer</h1>

      <div className='grid grid-cols-4 gap-5 px-10 max-lg:grid-cols-2 max-sm:flex max-sm:flex-col'>

          <div className='specialOffer-container'>
          
          <div className='overflow-hidden'>
            <img src="https://images.unsplash.com/photo-1673166516558-3f1b88a22db8?q=80&w=1407&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='specialOffer-img' />
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
            <img src="https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=1444&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='specialOffer-img' />
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
            <img src="https://images.unsplash.com/photo-1606149059549-6042addafc5a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='specialOffer-img' />
          </div>

            <div>

            <div className='text-2xl max-lg:text-xl text-brand px-5 pt-2'>Mega Combo</div>

            <div className='flex gap-5 text-xl max-lg:text-sm items-center px-5 pb-5 mt-4'>
            <div className='text-line-through'>799৳</div>
            <div>699৳</div>
            </div>

            </div>

          </div>

          <div className='specialOffer-container'>
          
          <div className='overflow-hidden'>
            <img src="https://images.unsplash.com/photo-1630431343545-e9d2e0880487?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='specialOffer-img' />
          </div>

            <div>

            <div className='text-2xl max-lg:text-xl text-brand px-5 pt-2'>Crispy fries</div>

            <div className='flex gap-5 text-xl max-lg:text-sm items-center px-5 pb-5 mt-4'>
            <div className='text-line-through'>199৳</div>
            <div>150৳</div>
            </div>

            </div>

          </div>

      </div>
    </div>
  )
}

export default SpecialOffer

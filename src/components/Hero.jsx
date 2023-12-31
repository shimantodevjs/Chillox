import {useState} from 'react'
import { FaArrowRight } from "react-icons/fa";
import News from './News';

const Hero = ({offset}) => {

  const [message, setMessage]=useState('')
  const [inputValue, setInputValue] = useState('');

  const handleMessage= () =>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (emailRegex.test(inputValue)) {
    setMessage('Succesfully subscribed')
    setTimeout(() => {
        setMessage('');
      }, 5000);
    } else{
        setMessage('No email address found')
        setTimeout(() => {
        setMessage('');
      }, 5000);
    }
  }
  return (
    <div className='bg-[#F0EAD6]' style={{marginTop:offset}}>
      <div className='bg-brand text-white flex max-lg:flex-col justify-between items-center'>
            {/* right */}
            <div className='pt-[3rem] pb-[3rem] max-lg:pt-[2rem] max-sm:pb-[5rem] px-[2rem]'>
                <div className='border-l-[2px] border-solid px-[1rem] flex flex-col justify-start items-start gap-10'>
                <div className='flex justify-start items-center'>
                  <img src="/chillox.jpg" alt="" className='h-20 w-20' />
                  <h1 className='text-5xl max-sm:text-2xl font-bold'>Newsletter</h1>
                </div>
                <div className='text-4xl max-sm:text-2xl leading-10'>
                    New year, New Burgers 🍔! Sign Up for <br/>
                    our daily Newsletter & Recipes
                </div>
                </div>
            </div>

            {/* left */}

             <div className='pr-[1rem] flex flex-col max-lg:pb-10 gap-5 transform max-sm:scale-75 max-sm:mt-[-80px]'>
                <div className='text-3xl font-bold'>Subscribe</div>
                <div className='flex justify-start items-center'>
                    <input 
                         type="text" 
                         placeholder='Enter email address'
                         value={inputValue}
                         onChange={(e) => setInputValue(e.target.value)} 
                         className=' text-white outline-none rounded-l-[10px] border-l-[1px] border-t-[1px] border-b-[1px] h-[4rem] p-5 text-3xl
                       bg-brand placeholder:text-white  ' />
                       
                    <div onClick={handleMessage} className='bg-brand cursor-pointer rounded-r-[10px] border-r-[1px] border-t-[1px] border-b-[1px] h-[4rem] p-5 text-3xl flex justify-center items-center'> <FaArrowRight /> </div>
                    
                </div>

                <div className=' font-bold text-center text-yellow-500'>{message}</div>
                   
                <div className='text-xl'>
                    By subscribing you agree to our <a href="#" className='underline'>Terms of Use</a> <br />and <a href="#" className='underline'>Privacy Policy</a>
                </div>
             </div>
      </div>
        <div><News /></div>
    </div>
  )
}

export default Hero

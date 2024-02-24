import React from 'react'
import welcomeBanner from "../assets/newBorn.png"
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className='w-full bg-[#FFF6E7] px-5 lg:px-10 py-8 lg:py-0 flex flex-col lg:flex-row justify-center items-center lg:h-[775px]'>
       <div className='lg:w-1/2'>
            <img src={welcomeBanner} alt='' className='w-60 lg:w-[557px] lg:h-[537px] object-cover' />
       </div>
       <div className='mt-8 lg:w-1/2'>
        <p className='lg:w-[257px] text-3xl lg:text-[48px] lg:leading-[48.48px] font-custom font-normal text-[#003249]'>Welcome to <span className='text-[#6ADB84] font-bold font-custom'>Gjelbër</span></p>
        <p className='mt-5 text-lg font-custom leading-[25px] lg:text-[18px] font-normal text-justify tracking-tighter text-[#003249]'>
            Your trusted partner for high-quality outsourcing services. Whether you're a small business owner 
            looking to free some time or a large corporation seeking to streamline your processes and increase 
            efficiency, we have the expertise and experience to help you succeed. 
                <br /> <br /> 
            we have the expertise and experience to help you succeed. Whether you're a small business owner 
            looking to free up some time or a large corporation seeking to streamline your processes and 
            increase efficiency, we have the expertise and experience to help you succeed.
        </p>
        <Link>
          <button className='border-[2px] border-[#6ADB84] rounded-[4px] mt-7 text-[#1E1E1E] hover:bg-[#6ADB84] hover:text-[#FFF6E7] hover:scale-110 duration-300 w-[164px] h-[40px] font-custom text-[16px] font-normal'>Shiko më shumë</button>
        </Link>
       </div>
    </div>
  )
}

export default Welcome
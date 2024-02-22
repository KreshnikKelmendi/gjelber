import React from 'react'
import flowerLogo from "../assets/Vector_veprimtarite.png";
import circle from "../assets/circle.png"
import VeprimtariteData from './VeprimtariteData';

const Veprimtarite = () => {
  return (
    <>
    <div className='flex flex-col lg:flex-row w-full px-7 lg:px-10 py-8'>
        <div className='lg:w-1/2'>
            <div className='w-full items-center justify-center h-[10vh] lg:h-[189px] rounded-[6px] flex bg-[#6ADB84] text-white'>
                <img className='w-[33px] h-[40px] object-cover' src={flowerLogo} alt='' />
                <p className='font-custom text-3xl lg:text-[48px] text-[#006646] font-semibold mx-3'>Veprimtaritë</p>
            </div>
            <div className='lg:w-[575px] lg:h-[225px] mt-4 font-custom tracking-tighter lg:tracking-[0.5%] text-[18px] leading-[25px] text-justify text-[#003249]'>
                <p>
                   Your trusted partner for high-quality outsourcing services. Whether you're a small business 
                   owner looking to free some time or a large corporation seeking to streamline your processes
                   and increase efficiency, we have the expertise and experience to help you succeed. 
                   <br /> <br />
                   we have the expertise and experience to help you succeed. Whether you're a small business 
                   owner looking to free up some time or a large corporation seeking to streamline your 
                   processes and increase efficiency, we have the expertise and experience to help you 
                   succeed.
                </p>
            </div>
        </div>
        <div className='lg:w-1/2 bg-[#6ADB84] justify-center items-center grid lg:mx-2 mt-4 lg:mt-0 rounded-[6px]'>
            <img className='object-cover p-5 lg:p-0' src={circle} alt='' />
        </div>
    </div>
    <div className=''>
        <VeprimtariteData />
    </div>
    </>
  )
}

export default Veprimtarite
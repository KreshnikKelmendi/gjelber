import React from 'react'
import flowerLogo from "../assets/Vector.png"
import aboutUsImage from "../assets/rrethNeshImage.png"

const AboutUs = () => {
  return (
    <>
    <div className='flex flex-col lg:flex-row w-full px-5 lg:px-10 py-8'>
        <div className='lg:w-1/2'>
            <div className='w-full items-center justify-center h-[10vh] lg:h-[189px] rounded-[6px] flex bg-[#003249] text-white'>
                <img className='w-[33px] h-[40px] object-cover' src={flowerLogo} alt='' />
                <p className='font-custom text-3xl lg:text-[48px] text-[#FFF6E7] font-semibold mx-3'>Rreth Nesh</p>
            </div>
            <div className='lg:w-[575px] lg:h-[225px] mt-4 font-custom tracking-tighter lg:tracking-[0.5%] text-[18px] leading-[25px] text-justify text-[#1E1E1E]'>
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
        <div className='lg:w-1/2 justify-center items-center grid lg:ml-2 mt-4 lg:mt-0 rounded-[6px]'>
            <img className='object-cover lg:p-0' src={aboutUsImage} alt='' /> 
        </div>
    </div>

    <p className='text-[#6ADB84] text-[34px] font-medium px-5 lg:px-10 lg:mt-12'>Lorem ipsum</p>
    <div className='flex flex-col px-5 lg:px-10 lg:flex-row mt-2'>
    
        <div className='lg:w-1/2 font-custom'>
            
            <p className='mt-4 text-[#1E1E1E] tracking-tighter lg:tracking-[0.5%] lg:w-[575px] lg:h-[225px] text-justify text-[18px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum cumque eaque odit explicabo natus 
                aspernatur quos voluptas vitae voluptatibus molestias rem reprehenderit, magni ullam beatae 
                obcaecati libero asperiores, eligendi cupiditate. <br /> <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi iusto sunt quod. Cumque ipsum 
                explicabo, magnam, ea obcaecati quia tenetur optio corrupti quod, similique incidunt. Harum a 
                pariatur omnis molestias.
            </p>
        </div>
        <div className='lg:w-1/2 font-custom'>
        <p className='mt-4 text-[#1E1E1E] tracking-tighter lg:tracking-[0.5%] lg:w-[575px] lg:h-[225px] text-justify text-[18px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum cumque eaque odit explicabo natus 
                aspernatur quos voluptas vitae voluptatibus molestias rem reprehenderit, magni ullam beatae 
                obcaecati libero asperiores, eligendi cupiditate. <br /> <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi iusto sunt quod. Cumque ipsum 
                explicabo, magnam, ea obcaecati quia tenetur optio corrupti quod, similique incidunt. Harum a 
                pariatur omnis molestias.
            </p>
        </div>
    </div>
    </>
  )
}

export default AboutUs
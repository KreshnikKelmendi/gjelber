import React from 'react';
import noraCimili from "../assets/noraCimili.png"

const Kryeshefi = () => {
  return (
    <div className=' px-5 lg:px-10 py-5 lg:mt-0 lg:py-8 bg-[#006646] h-screen lg:h-[100%]'>
      <div className='lg:w-1/2 items-center justify-center h-[10vh] lg:h-[189px] rounded-[6px] flex bg-[#6ADB84] text-white'>
        <p className='font-custom text-2xl text-center lg:leading-[56.88px] text-[#003249] lg:text-[48px] font-normal mx-auto lg:px-[13%]'>
          Kryeshefi Ekzekutiv
        </p>
      </div>
      <div className='py-5 lg:py-20 w-full lg:px-[10%] flex flex-col lg:flex-row'>
        <img src={noraCimili} alt='' className='lg:w-[336px] rounded-[6px] h-[377px] object-cover' />
        <p className='lg:mx-24 mt-5 lg:mt-14 text-3xl lg:text-[48px] font-custom font-medium text-[#6ADB84]'>Nora Cimili Gagica</p>
      </div>
    </div>
  );
};

export default Kryeshefi;

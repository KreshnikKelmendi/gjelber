import React from 'react';
import noraCimili from "../assets/noraCimili.png"

const Kryeshefi = () => {
  return (
    <div className=' px-5 lg:px-10 py-5 lg:mt-0 lg:py-8 bg-[#006646] h-[100%] lg:h-[100%]'>
      <div className='lg:w-1/2 items-center justify-center h-[10vh] lg:h-[189px] rounded-[6px] flex bg-[#6ADB84] text-white'>
        <p className='font-custom text-2xl text-center lg:leading-[56.88px] text-[#003249] lg:text-[48px] font-normal mx-auto lg:px-[13%]'>
          Kryeshefi Ekzekutiv
        </p>
      </div>
      <section className='w-full lg:pl-[10%] flex flex-col lg:flex-row mt-4 lg:mt-24'>
        <div>
          <img src={noraCimili} alt='' className='object-cover w-full lg:w-[336px] lg:h-[377px] rounded-[6px]' />
        </div>
        <div className='lg:px-16'>
          <p className='text-3xl lg:text-[48px] font-custom text-[#6ADB84] font-medium mt-4 lg:mt-16'>Nora Cimili Gagica</p>
          <p className='text-[#FFF6E7] mt-4 lg:mt-6 text-justify tracking-tighter text-[18px] w-full lg:w-[575px] h-[225px] leading-[25px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur illo dolores fugit, libero in error placeat porro minima earum? Sequi similique, recusandae ipsa quia quam reprehenderit maiores at iure iste.</p>
        </div>
      </section>
    </div>
  );
};

export default Kryeshefi;

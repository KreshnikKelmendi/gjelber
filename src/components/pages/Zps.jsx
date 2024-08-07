import React from 'react';

const Zps = () => {
  return (
    <div className='px-5 lg:px-10 py-8 font-custom'>
      <div className=''>
        <div className='w-full items-center justify-center h-[189px] rounded-[6px] flex bg-[#003249] text-white'>
          <p className='font-custom text-3xl lg:text-[48px] font-normal mx-3'>
            Zyrtare përgjegjëse për sinjalizim
          </p>
        </div>
        <div className='lg:w-[545px] mt-4 '>
          <p className='lg:text-lg font-normal leading-[24px] text-[#003249]'>
            Për çdo informacion, hollësi apo detaje tjera të nevojshme mos ngurroni të shkruani në e-mail adresën: 
           
          </p>
          <p className='lg:text-lg font-normal leading-[24px] text-[#003249] mt-4 uppercase'>
            Merita Zeka
          </p>
          <p><i>Zyrtare përgjegjëse për sinjalizim</i></p>
          <a href="mailto:merita.zeka@gjelber.com">
              <b className='underline hover:text-[19px] hover:text-green-700 hover:duration-500'> merita.zeka@gjelber.com </b>
            </a>
        </div>
      </div>
    </div>
  );
}

export default Zps;

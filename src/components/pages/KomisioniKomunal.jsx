import React from 'react';

const KomisioniKomunal = () => {
  return (
    <div className='w-full px-5 lg:px-10 py-5 lg:mt-0 lg:py-8 bg-[#003249] h-screen'>
      <div className='lg:w-1/2 items-center justify-center h-[10vh] lg:h-[189px] rounded-[6px] flex bg-[#F18934] text-white'>
        <p className='font-custom text-2xl text-center lg:leading-[56.88px] text-[#003249] lg:text-[48px] font-normal mx-auto lg:px-[13%]'>
          Komisioni Komunal i Aksionarëve
        </p>
      </div>
      <div className='lg:w-[566px] h-[46px] mt-8'>
        <p className='text-[20px] leading-[25px] font-normal text-[#FFF6E7] font-custom'>Anëtarët e Komisionit Komunal të Aksionarëve të Ndërmarrjes Publike Banesore janë:</p>
        <ul className="list-disc mx-3 list-inside text-[#F18934] text-[18px] font-custom my-4">
            <li>Kumrije Ramadani</li>
            <li>Rrahman Qerimi</li>
            <li>Arbnora Ajeti</li>
        </ul>
      </div>
    </div>
  );
};

export default KomisioniKomunal;

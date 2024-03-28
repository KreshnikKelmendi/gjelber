import React from 'react';
import FetchData from '../hooks/FetchData';
import noraCimili from "../assets/noraCimili.png"


const Kryeshefi = () => {
  // const apiUrl = "http://localhost:1337";
  // const { loading, error, data } = FetchData(`${apiUrl}/api/kryeshefi-ekzekutivs?populate=*`);

  // console.log("dataw", data);


  return (
    <div className=' px-5 lg:px-10 py-5 lg:mt-0 lg:py-8 bg-[#006646] h-[100%] lg:h-[100%]'>
      <div className='lg:w-1/2 items-center justify-center h-[10vh] lg:h-[189px] rounded-[6px] flex bg-[#6ADB84] text-white'>
        <p className='font-custom text-2xl text-center lg:leading-[56.88px] text-[#003249] lg:text-[48px] font-normal mx-auto lg:px-[13%]'>
          Kryeshefi Ekzekutiv
        </p>
      </div>
      <section className='w-full lg:pl-[10%] flex flex-col lg:flex-row mt-4 lg:mt-24'>
        <div>
          <img src={noraCimili} alt='' />
          {/* {console.log("pdf", data?.data[0]?.attributes?.image?.data?.attributes?.url)} */}
        </div>
        <div className='lg:px-16'>
          <p className='text-3xl lg:text-[48px] font-custom text-[#6ADB84] font-medium mt-4 lg:mt-16'>Nora Cimili Gagica</p>
          <p className='text-[#FFF6E7] mt-4 lg:mt-6 text-justify tracking-tighter text-[18px] w-full lg:w-[575px] h-[225px] leading-[25px]'></p>
        </div>
      </section>
    </div>
  );
};

export default Kryeshefi;

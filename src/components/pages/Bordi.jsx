import React from 'react';

const Bordi = () => {
  return (
    <div className='w-full px-5 lg:px-10 py-5 lg:mt-0 lg:py-8 bg-[#6ADB84] h-screen'>
      <div className='lg:w-1/2 items-center justify-center h-[10vh] lg:h-[189px] rounded-[6px] flex bg-[#003249] text-white'>
        <p className='font-custom text-2xl text-center lg:leading-[56.88px] text-[#FFF6E7] lg:text-[48px] font-normal mx-auto lg:px-[13%]'>
          Bordi i Drejtorëve
        </p>
      </div>
      <div className='lg:w-[566px] h-[46px] mt-8'>
        <p className='text-[20px] leading-[25px] font-normal text-[#FFF6E7] font-custom'>Anëtarët e Bordit të Drejtorëve të Ndërmarrjes Publike Gjelbër janë:</p>
        <ul className="list-disc mx-3 list-inside text-[#003249] text-[18px] font-custom my-4">
            <li>Dren Kafexholli</li>
            <li>Mimoza Blakaj</li>
            <li>Besarta Morina</li>
            <li>Kreshnik Domi</li>
        </ul>
      </div>
    </div>
  );
};

export default Bordi;

// import React from 'react';
// import FetchData from '../hooks/FetchData';
// import { apiUrl } from '../api/apiUrl';

// const Bordi = () => {
//   const { loading, error, data } = FetchData(`${apiUrl}/api/bordi-i-drejtoreves?populate=*`);

//   console.log("bordi", data);

//   return (
//     <div className='w-full px-5 lg:px-10 py-5 lg:mt-0 lg:py-8 bg-[#6ADB84] h-screen'>
//       <div className='lg:w-1/2 items-center justify-center h-[10vh] lg:h-[189px] rounded-[6px] flex bg-[#003249] text-white'>
//         <p className='font-custom text-2xl text-center lg:leading-[56.88px] text-[#FFF6E7] lg:text-[48px] font-normal mx-auto lg:px-[13%]'>
//           Bordi i Drejtorëve
//         </p>
//       </div>
//       <div className='lg:w-[566px] h-[46px] mt-8'>
//         <p className='text-[20px] leading-[25px] font-normal text-[#FFF6E7] font-custom'>Anëtarët e Bordit të Drejtorëve të Ndërmarrjes Publike Gjelbër janë:</p>
//         <ul className="list-disc mx-3 list-inside text-[#003249] text-[18px] font-custom my-4">
//             {data?.data?.map((item, index) => (
//                 <li key={index}>{item?.attributes?.emriMbiemri}</li>
//             ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Bordi;

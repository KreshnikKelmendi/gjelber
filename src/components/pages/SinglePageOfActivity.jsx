import React from 'react'
import { useParams } from 'react-router-dom';
import { data } from '../data/activityData';

const SinglePageOfActivity = () => {
    const { id } = useParams();

    const ads = data?.find((ad) => ad.id == id);

  if (!ads) {
    return <div className='font-custom text-2xl mt-5 justify-center items-center text-center'>WORK NOT FOUND. BAD REQUEST !</div>;
  }

  const { content, image } = ads;
  const { title, fullDescription } = content;

  return (
    <div className='bg-[#003249] lg:px-10 px-5 py-7 w-full flex flex-col lg:flex-row'>
        <div className='lg:w-1/2'>
            <p className='font-custom text-[30px] lg:text-[48px] lg:leading-[48.48px] text-[#6ADB84] font-bold'>{title}</p>
            <p className='text-[18px] leading-[25px] pt-[8px] tracking-tighter text-[#FFF6E7] lg:w-[575px] text-justify font-normal'>{fullDescription}</p>
            <p className='text-[#F18934] font-normal text-[22px] py-7'>{title}</p>
            <p className='text-[18px] leading-[25px] text-[#FFF6E7] lg:w-[575px] tracking-tighter text-justify font-normal'>{fullDescription}</p>
         </div>
         <div className='lg:w-1/2 lg:pl-16 mt-7 lg:mt-0'>
            <img src={image} alt='' className='object-cover lg:h-[429px] lg:w-[678px] h-[35vh] rounded-[6px]' />
         </div>
    </div>
  )
}

export default SinglePageOfActivity
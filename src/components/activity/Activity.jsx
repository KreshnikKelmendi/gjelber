import React, { useEffect, useState } from 'react';
import flowerLogo from "../assets/flowerLogo.png";
import untitled from "../assets/Untitle2223d-1 1.png";
import { data } from '../data/activityData';
import { Link } from 'react-router-dom';

const truncateText = (text, maxWords) => {
  const words = text.split(' ');

  if (words.length <= maxWords) {
    return text;
  }

  const truncatedText = words.slice(0, maxWords).join(' ');
  return `${truncatedText}...`;
};

const Activity = () => {
    const [isLargeDevice, setIsLargeDevice] = useState(window.innerWidth >= 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeDevice(window.innerWidth >= 1024);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div className='lg:flex w-full px-7 lg:px-10 py-8'>
                <div className='lg:flex w-full'>
                    <div className='w-full items-center justify-center h-[10vh] lg:h-[189px] rounded-[6px] flex bg-[#6ADB84] text-white'>
                        <img className='w-[33px] h-[40px] object-cover' src={flowerLogo} alt='' />
                        <p className='font-custom text-3xl lg:text-[48px] font-semibold mx-3'>Aktivitetet</p>
                    </div>
                    <div className='w-full h-[189px] mt-2 lg:mt-0 lg:ml-2'>
                        <img className='h-full w-full object-cover rounded-[6px]' src={untitled} alt='' />
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-2 px-7 lg:px-10'>
                {data?.map((column, index) => (
                    <div key={index} className='flex flex-col items-center' style={{ marginTop: isLargeDevice ? column.margin : 0 }}>
                        <img className='w-full h-[220px] object-cover rounded-t-[6px]' src={column.image} alt='' />
                        <div style={{ backgroundColor: column.backgroundColor }} className='w-full h-fit  rounded-b-[6px] px-5 py-10 justify-center items-center'>
                            <p className={`text-2xl lg:text-[22px] font-normal text-[${column.textColor}] leading-[22.22px] font-custom`}>{column.content.title}</p>
                            <p className={`py-5 text-[14px] leading-[25px] font-custom text-[${column.textColor}]`}>
                                {truncateText(column.content.description, 100)} {/* Adjust the second parameter for the desired word count */}
                            </p>
                            <Link to={`/aktivitetet/${column.id}`} onClick={() => window.scrollTo({ top: 0, left: 0 })}>
                                <button className={`border-b-[2px] font-medium text-[${column.buttonColor}] border-[${column.buttonColor}] text-[16px] font-custom hover:scale-110`}>Më shumë</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Activity;

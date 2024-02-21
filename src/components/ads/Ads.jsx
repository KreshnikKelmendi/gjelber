import React, { useEffect, useState } from 'react';
import flowerLogo from "../assets/Vector.png";
import ads1 from "../assets/image 1.png";
import { Link } from 'react-router-dom';
import untitled from "../assets/Untitle2223d-1 1.png";
import { shpalljet } from '../data/shpalljet';

const data = [
    {
      title: 'Lorem ipsum dolor',
      content: 'Your trusted partner for high-quality outsourcing services. Whether you\'re a small business owner looking to free some time or a large corporation seeking to streamline your processes and increase efficiency, we have the expertise and experience to help you succeed.',
      buttonText: 'Shiko më shumë',
      imageSrc: ads1,
      background: '#003249',
      margin: 'mx-2',
      buttonColor: "#6ADB84",
      textColor: "#FFF6E7"
    },{
      title: 'Lorem ipsum dolor',
      content: 'Your trusted partner for high-quality outsourcing services. Whether you\'re a small business owner looking to free some time or a large corporation seeking to streamline your processes and increase efficiency, we have the expertise and experience to help you succeed.',
      buttonText: 'Shiko më shumë',
      imageSrc: ads1,
      background: '#6ADB84',
 
    },
    {
      title: 'Lorem ipsum dolor',
      content: 'Your trusted partner for high-quality outsourcing services. Whether you\'re a small business owner looking to free some time or a large corporation seeking to streamline your processes and increase efficiency, we have the expertise and experience to help you succeed.',
      buttonText: 'Shiko më shumë',
      imageSrc: ads1,
      background: '#6ADB84',
     
    },{
      title: 'Lorem ipsum dolor',
      content: 'Your trusted partner for high-quality outsourcing services. Whether you\'re a small business owner looking to free some time or a large corporation seeking to streamline your processes and increase efficiency, we have the expertise and experience to help you succeed.',
      buttonText: 'Shiko më shumë',
      imageSrc: ads1,
      background: '#6ADB84',
     
    }
    // Add more data objects as needed
  ];
  



const Ads = () => {
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
    <div className='lg:flex w-full px-5 lg:px-10 mt-8 lg:mt-0 lg:py-6'>
    <div className='lg:flex w-full'>
        <div className='w-full items-center justify-center h-[10vh] lg:h-[189px] rounded-[6px] flex bg-[#003249] text-white'>
            <img className='w-[33px] h-[40px] object-cover' src={flowerLogo} alt='' />
            <p className='font-custom text-3xl lg:text-[48px] font-normal mx-3'>Shpalljet</p>
        </div>
        <div className='hidden lg:block w-full h-[189px] mt-2 lg:mt-0 lg:ml-2'>
            <img className='h-full w-full object-cover rounded-[6px]' src={untitled} alt='' />
        </div>
    </div>
</div>
    
   
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-2 mt-2 px-5 lg:px-10'>
                {shpalljet?.map((column, index) => (
                    <div key={index} className='flex flex-col lg:flex-row' style={{ marginTop: isLargeDevice ? column.margin : 0 }}>
                        <div style={{ backgroundColor: column.background }} className={`lg:w-1/2 lg:h-[466px] h-fit py-10 grid rounded-tl-[6px] rounded-tr-[6px] lg:rounded-tr-none lg:rounded-bl-[6px] px-5 lg:py-20 justify-center items-center text-[${column.textColor}]`}>
                            <p className={`lg:text-[20px] uppercase font-normal text-[${column.textColor}] lg:leading-[32.32px] font-custom`}>{column.title}</p>
                            <p className={`py-5 text-[15px] leading-[25px] font-custom text-[${column.textColor}]`}>
                                 {column?.description}
                            </p>
                            <p className={`py-5 text-[12px] leading-[25px] font-custom text-gray-500`}>Data e publikimit: {column.publicationDate}</p>
                            <Link to={`/shpalljet/${column.id}`} onClick={() => window.scrollTo({ top: 0, left: 0 })}>
                                <button className={`border-[2px] rounded-[4px] px-8 py-1 font-medium text-[${column.buttonColor}] border-[${column.buttonColor}] hover:bg-white hover:text-black hover:border-none text-[16px] font-custom`}>Më shumë</button>
                            </Link>
                        </div>
                        <div className='bg-[#6ADB84] text-[22px] text-white justify-centeri items-center grid lg:w-1/2 w-full h-56 lg:h-[466px] text-center font-custom lg:rounded-tr-[6px] rounded-bl-[6px] lg:rounded-bl-none rounded-br-[6px]'>
                        {/* <img className='lg:w-1/2 w-full h-56 lg:h-[466px] lg:rounded-tr-[6px] rounded-bl-[6px] lg:rounded-bl-none rounded-br-[6px] object-fill' src={column.imageUrl} alt='' /> */}
                             <p>KONKURS</p>
                        </div>
                    </div>
                ))}
            </div>

 </>

  );
}

export default Ads;



   {/* <div className=' mx-2'>
            <div className='flex'>
                <div className='bg-[#6ADB84] w-1/2 rounded-[6px] items-center justify-center px-5'>
                    <p className='text-[32px] font-custom text-[#003249] mt-[55px] font-medium'>Lorem ipsum dolor</p>
                    <p className='w-[264px] h-[200px] mt-2'>Your trusted partner for high-quality outsourcing services. Whether you're a small business owner looking to free some time or a large corporation seeking to streamline your processes and increase efficiency, we have the expertise and experience to help you succeed. .</p>
                    <button className='mt-10 border-[2px] text-[16px] border-[#003249] hover:bg-[#003249] hover:text-white transition-all duration-500 rounded-[4px] w-[164px] h-[40px] text-[#003249]'>Shiko më shumë</button>
                </div>
                <div className='w-1/2'>
                    <img className='w-full h-auto object-cover' src={ads1} alt='' />
                </div>
            </div>
            <div className='flex mt-2'>
                <div className='bg-[#6ADB84] w-1/2 rounded-[6px] items-center justify-center px-5'>
                    <p className='text-[32px] font-custom text-[#003249] mt-[55px] font-medium'>Lorem ipsum dolor</p>
                    <p className='w-[264px] h-[200px] mt-2'>Your trusted partner for high-quality outsourcing services. Whether you're a small business owner looking to free some time or a large corporation seeking to streamline your processes and increase efficiency, we have the expertise and experience to help you succeed. .</p>
                    <button className='mt-10 border-[2px] text-[16px] border-[#003249] hover:bg-[#003249] hover:text-white transition-all duration-500 rounded-[4px] w-[164px] h-[40px] text-[#003249]'>Shiko më shumë</button>
                </div>
                <div className='w-1/2'>
                    <img className='w-full h-auto object-cover' src={ads1} alt='' />
                </div>
            </div>
            
            
        </div> */}
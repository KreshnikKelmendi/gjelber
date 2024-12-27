import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import flowerLogo from '../assets/Vector.png';
import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.jpg'
import image4 from "../assets/4.jpg"
import image5 from "../assets/5.jpg"
import image6 from "../assets/6.jpg"

const items = [
  {
    // title: 'Horem disum fa veana 1997  trun borte',
    // description: 'Your trusted partner for high-quality outsourcing services. Whether you are a small business owner looking to.',
    image: image1,
  },
  {
    // title: 'Horem disum fa veana 1997  trun borte',
    // description: 'Your trusted partner for high-quality outsourcing services. Whether you are a small business owner looking to.',
    image: image2,
  },
  {
    // title: 'Gjelbër / Aktivitetet / Prishtina e pastër',
    // description: 'Your trusted partner for high-quality outsourcing services. Whether you are a small business owner looking to.',
    image: image3,
  },
  {
    // title: 'Horem disum fa veana 1997  trun borte',
    // description: 'Your trusted partner for high-quality outsourcing services. Whether you are a small business owner looking to.',
    image: image4,
  },
  {
    // title: 'Horem disum fa veana 1997  trun borte',
    // description: 'Your trusted partner for high-quality outsourcing services. Whether you are a small business owner looking to.',
    image: image5,
  },
  {
    // title: 'Horem disum fa veana 1997  trun borte',
    // description: 'Your trusted partner for high-quality outsourcing services. Whether you are a small business owner looking to.',
    image: image6,
  },
  // Add more items as needed
];

const HomePageActivity = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className='lg:h-[787px] bg-[#003249] py-5 lg:py-0'>
      <div className='flex justify-center items-center pt-5 lg:pt-16 font-custom text-[48px] leading-[48.48px] font-normal text-[#FFF6E7]'>
        <img className='w-[33px] h-[40px] object-cover' src={flowerLogo} alt='' />
        <p className='mx-4'>Aktivitetet</p>
      </div>
<div className='px-10'>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
      >
        {items?.map((item, index) => (
          <div key={index} className='carousel-item mt-5 lg:mt-16'>
            <img src={item.image} alt={item.title} className='lg:w-[336px] 2xl:w-full 2xl:h-[55vh] lg:h-[334px] object-cover rounded-[6px]' />
            <h3 className='text-[#6ADB84] text-[22px] font-custom font-normal leading-[22.22px] mt-5'>{item.title}</h3>
            <p className='lg:w-[256px] text-[14px] mt-5 text-[#FFF6E7] font-custom font-normal leading-[25px]'>{item.description}</p>
            {/* <button className='mt-5 text-[#F18934] text-[16px] font-medium font-custom border-b border-[#F18934] hover:scale-125'>Më shumë</button> */}
          </div>
        ))}
      </Carousel>
      </div>
    </div>
  );
};

export default HomePageActivity;

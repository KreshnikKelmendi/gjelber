import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import image1 from "../assets/imazhi1.png";
import image2 from "../assets/imazhi2.png"; // Import your second image

const sliderItems = [
  {
    title: 'Prishtina e freskët',
    spanText: ' Frymon Gjelbër!',
    spanTextColor: '#003249',
    image: image1,
    bgcolor: '#6ADB84', // Example color for the first item
  },
  {
    title: 'Prishtina e freskët',
    spanText: ' Frymon Gjelbër!',
    spanTextColor: '#6ADB84',
    image: image2,
    bgcolor: '#003249', // Example color for the second item
  }
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const SecondSlideHome = () => {
  return (
    <>
    <div className='lg:px-10'>
    <Carousel
      responsive={responsive}
      arrows={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      stopOnHover={false}
      showDots={true}
    >
      {sliderItems.map((item, index) => (
        <div key={index} className='w-full h-[722px] grid text-center mt-16 lg:rounded-[6px] justify-center items-center' style={{ backgroundColor: item.bgcolor }}>
          <h2 className='text-[48px] font-custom font-normal leading-[48.48px] text-white'>{item.title}<span className='font-bold' style={{ color: item.spanTextColor }}><br />{item.spanText}</span></h2>
          <img
            src={item.image}
            alt={item.title}
            className='w-full h-[301px] object-contain lg:object-cover p-5'
          />
        </div>
      ))}
    </Carousel>
    </div>
    </>
  );
}

export default SecondSlideHome;

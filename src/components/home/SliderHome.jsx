import React, { useState, useEffect } from 'react';
import sliderImage1 from "../assets/sliderHome.png";
import sliderImage2 from "../assets/sliderHome2.png";
// Import other images as needed

const SliderHome = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Prishtina më Gjelbër jeta më e bukur.",
      content: "Bashkohu në Mbrojtjen e Mjedisit!",
      image: sliderImage1,
      backgroundColor: '#6ADB84',
      textColor: '#003249', 
    },

    {
      title: "Another Slide Title",
      content: "Another Slide Content",
      image: sliderImage2,
      backgroundColor: '#003249',
      textColor: '#6ADB84', 
    },
  ];

  const changeSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  useEffect(() => {
    const intervalId = setInterval(changeSlide, 3000); // Change slide every 5 seconds (5000 milliseconds)

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className='w-full lg:h-[734px] flex z-30' style={{ backgroundColor: slides[currentSlide].backgroundColor }}>
      <div className='lg:ml-10 grid lg:block px-5 lg:px-0 lg:py-[150px] w-1/2 justify-center items-center h-[30vh]'>
        <p className={`text-3xl lg:text-[96px] font-custom lg:leading-[101px] w-full lg:w-[727px] font-bold`} style={{ color: slides[currentSlide].textColor }}>
          {slides[currentSlide].title}
        </p>
        <p className='text-base lg:mt-10 lg:text-[34px] text-[#FFF6E7] font-custom font-normal'>{slides[currentSlide].content}</p>
      </div>
      <div className='w-1/2 '>
        <img src={slides[currentSlide].image} alt='' className='lg:w-full w-[50vh] h-[30vh] lg:h-[662px] object-cover' />
      </div>
    </div>
  );
}

export default SliderHome;

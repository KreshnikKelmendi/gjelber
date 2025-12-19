import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import sliderImage1 from "../assets/sliderHome.png";
import sliderImage2 from "../assets/slide2.jpg";

const SliderHome = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Prishtina më Gjelbër",
      subtitle: "jeta më e bukur",
      content: "Bashkohu në Mbrojtjen e Mjedisit dhe kontribuo për një qytet më të gjelbër dhe më të pastër.",
      image: sliderImage1,
      backgroundColor: '#6ADB84',
      textColor: '#003249',
      buttonColor: '#003249',
      buttonTextColor: '#FFF6E7',
    },
    {
      title: "Bashkohu në Mbrojtjen",
      subtitle: "e Mjedisit",
      content: "Prishtina më Gjelbër jeta më e bukur. Bashkëpunojmë për një të ardhme më të qëndrueshme.",
      image: sliderImage2,
      backgroundColor: '#003249',
      textColor: '#6ADB84',
      buttonColor: '#6ADB84',
      buttonTextColor: '#003249',
    },
  ];

  const changeSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  useEffect(() => {
    const intervalId = setInterval(changeSlide, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const getShpalljetUrl = () => {
    return 'https://gjelber-shpalljet.vercel.app/shpalljet';
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className='w-full relative h-[40vh] lg:h-[734px] overflow-hidden z-0'>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className='w-full h-full flex flex-row absolute inset-0'
          style={{ backgroundColor: currentSlideData.backgroundColor }}
        >
          {/* Content Section */}
          <div className='w-1/2 flex flex-col justify-center items-start px-3 sm:px-5 lg:px-10 lg:pl-16 py-8 lg:py-0 '>
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 50, opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className='max-w-2xl'
            >
              <h1 
                className='text-xl sm:text-2xl md:text-3xl lg:text-6xl xl:text-7xl font-custom font-bold mb-2 sm:mb-3 lg:mb-6 leading-tight'
                style={{ color: currentSlideData.textColor }}
              >
                {currentSlideData.title}
                <br />
                <span className='text-[#FFF6E7]'>{currentSlideData.subtitle}</span>
              </h1>
              
              <p 
                className='text-xs sm:text-sm md:text-base lg:text-xl text-[#FFF6E7] font-custom font-normal mb-4 sm:mb-6 lg:mb-10 leading-relaxed max-w-xl'
              >
                {currentSlideData.content}
              </p>

              {/* Shpalljet Button */}
              <motion.a
                href={getShpalljetUrl()}
                onClick={() => window.scrollTo({ top: 0, left: 0 })}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className='inline-block'
              >
                <button
                  className='px-4 py-2 sm:px-6 sm:py-3 lg:px-10 lg:py-5 rounded-xl font-custom font-bold text-xs sm:text-sm lg:text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 lg:gap-3'
                  style={{ 
                    backgroundColor: currentSlideData.buttonColor,
                    color: currentSlideData.buttonTextColor
                  }}
                >
                  <span>Shpalljet</span>
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </motion.a>
            </motion.div>
          </div>

          {/* Image Section */}
          <div className='w-1/2 relative h-full overflow-hidden'>
            <motion.img
              key={`image-${currentSlide}`}
              src={currentSlideData.image}
              alt={currentSlideData.title}
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.1, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className='w-full h-full object-cover'
            />
            {/* Gradient Overlay */}
            <div 
              className='absolute inset-0 opacity-20'
              style={{ 
                background: `linear-gradient(to left, ${currentSlideData.backgroundColor}, transparent)` 
              }}
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators */}
      <div className='absolute bottom-4 lg:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 lg:gap-3'>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 lg:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white w-8 lg:w-8' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75 w-2 lg:w-3'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows - Hidden on mobile, shown on desktop */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className='absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm rounded-full p-2 lg:p-3 transition-all duration-300 hidden lg:block'
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className='absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm rounded-full p-2 lg:p-3 transition-all duration-300 hidden lg:block'
        aria-label="Next slide"
      >
        <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

export default SliderHome;

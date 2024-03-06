import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import greenPicture from '../assets/germiaGreen.png';


const AfterSlider = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
      triggerOnce: true,
    });
  
    useEffect(() => {
      if (inView) {
        controls.start({ opacity: 1, x: 0 });
      }
    }, [controls, inView]);
  
    return (
      <motion.div
        className='w-full flex flex-col lg:flex-row justify-center items-center bg-white'
        ref={ref}
        initial={{ opacity: 0, x: -50 }}
        animate={controls}
      >
        <motion.div
          className='lg:w-1/2 block justify-center items-center px-5 mt-16 lg:mt-0 lg:px-10'
          initial={{ opacity: 0, x: -50 }}
          animate={controls}
        >
          <p className='lg:w-[410px] text-3xl lg:text-[48px] font-custom font-normal lg:leading-[48px]'>
            Prishtina e freskët <span className='text-[#6ADB84] font-bold'>frymon gjelbër!</span>
          </p>
          <p className='lg:pr-16 mt-5 text-[18px] leading-[25px] font-normal text-justify text-[#003249] tracking-tighter'>
            Your trusted partner for high-quality outsourcing services. Whether you're a small business owner looking to free some time or a large corporation seeking to streamline your processes and increase efficiency, we have the expertise and experience to help you succeed. we have the expertise and experience to help you succeed. Whether you're a small business owner looking to free up some time or a large corporation seeking to streamline your processes and increase efficiency, we have the expertise and experience to help you succeed.
          </p>
        </motion.div>
        <motion.div className='lg:w-1/2 mt-8 lg:mt-0' initial={{ opacity: 0, x: 50 }} animate={controls}>
          <img src={greenPicture} alt='' className='lg:h-[1030px] object-cover' />
        </motion.div>
      </motion.div>
    );
  };
  
  export default AfterSlider;
  
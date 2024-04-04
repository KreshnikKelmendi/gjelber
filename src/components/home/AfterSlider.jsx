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
          Ndërmarrja NPL “Gjelbër” Sh.A. vazhdon me strategji të qarta 
të marketingut, shërbime të specializuara dhe angazhim të ekipit të kualifikuar, pritet që ky 
biznes të ketë sukses dhe të dominoj në tregun e mirëmbajtjes dhe projektimit të 
hapësirave të gjelbra. Përpjekjet e vazhdueshme për përmirësim dhe zgjerim do të 
ndihmojnë në rritjen e qëndrueshmërisë dhe suksesit të biznesit.
Ndërmarrja “Gjelbër” është e fokusuar që përmes veprimtarisë të saj të kontribuoj në 
përmirësimin e mirëqenies të ambientit dhe qytetarit.        
          </p>
        </motion.div>
        <motion.div className='lg:w-1/2 mt-8 lg:mt-0' initial={{ opacity: 0, x: 50 }} animate={controls}>
          <img src={greenPicture} alt='' className='w-full lg:h-[1030px] object-cover' />
        </motion.div>
      </motion.div>
    );
  };
  
  export default AfterSlider;
  
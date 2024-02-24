import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AdsBanner = () => {
  const [ref, inView] = useInView({
   threshold:0.2,
    rootMargin: '-100px 0px',
  });

  const bannerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={inView ? 'visible' : 'hidden'}
      variants={bannerVariants}
      transition={{ duration: 0.5 }}
      className='z-50 relative mx-5 h-[209px] bg-[#003249] justify-around items-center font-custom flex flex-col lg:flex-row mt-20 lg:mx-10 rounded-[6px]'
    >
      <p className='text-3xl text-center lg:text-left lg:text-[48px] text-[#FFF6E7] lg:w-[410px] font-custom font-bold lg:leading-[48.48px]'>
        Prishtina e freskët frymon gjelbër!{' '}
      </p>
      <Link to="/shpalljet" onClick={() => window.scrollTo({ top: 0, left: 0 })}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='border-[#6ADB84] border-[2px] text-[#FFF6E7] hover:bg-[#6ADB84] hover:text-[#003249] text-[16px] font-medium w-[248px] h-[56px] rounded-[6px]'
        >
          Shpalljet
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default AdsBanner;

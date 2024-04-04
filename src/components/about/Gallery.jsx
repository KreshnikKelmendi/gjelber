import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import gallery1 from '../assets/galery1.png';
import gallery2 from '../assets/firstGjelber.jpg';

const gallery = [
  { id: 1, type: 'image', src: gallery1 },
  { id: 2, type: 'text', content: 'Bashkohu në mbrojtjen e mjedisit', bgColor: 'bg-[#6ADB84]' },
  { id: 3, type: 'image', src: gallery2 , },
  { id: 4, type: 'text', content: 'Prishtina më Gjelbër jeta më e bukur.', bgColor: 'bg-[#6ADB97]' },
  { id: 5, type: 'text', content: 'Bashkohu në mbrojtjen e mjedisit', bgColor: 'bg-[#006646]' },
  { id: 6, type: 'image', src: gallery1 },
  { id: 7, type: 'text', content: 'Prishtina më Gjelbër jeta më e bukur.', bgColor: 'bg-[#FFF6E7]' },
  { id: 8, type: 'image', src: gallery1 },
];

const GalleryItem = ({ item }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    rootMargin: '-100px 0px',
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.5, delay: item.id * 0.2 }}
      className='col-span-1'
    >
      {item.type === 'image' ? (
        <img src={item.src} alt={`Gallery ${item.id}`} className={`h-[342px] w-full object-cover ${item.bgColor}`} />
      ) : (
        <div className={`text-div p-4 h-[342px] justify-center items-center grid ${item.bgColor}`}>
          <p className='text-[#003249] text-[24px] font-custom leading-[24.24px]'>{item.content}</p>
        </div>
      )}
    </motion.div>
  );
};

const Gallery = () => {
  return (
    <div className='w-full lg:px-10 lg:h-[684px] mt-20'>
      <div className='grid grid-cols-1 lg:grid-cols-4'>
        {gallery?.map((item) => (
          <GalleryItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;

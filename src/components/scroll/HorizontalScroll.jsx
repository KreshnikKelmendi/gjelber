import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import image1 from "../assets/germiaGreen.png";

const dataItems = [
  {
    id: 1,
    name: 'Lorem ipsum',
    nameColor: '#6ADB84',
    description: 'Your trusted partner for high-quality outsourcing services. Whether you are a small business owner looking to free some time or a large corporation seeking to streamline your processes and increase efficiency, we have the expertise and experience to help you succeed. we have the expertise and experience to help you succeed. Whether you are a small business owner looking to free up some time or a large corporation seeking to streamline your processes and increase efficiency, we have the expertise and experience to help you succeed.',
    descriptionColor: '#FFF6E7',
    image: image1,
    bgColor: '#006646',
  },
  {
    id: 2,
    name: 'Lorem ipsum',
    nameColor: '',
    description: 'Lorem ipsum dolor sit amet consectour',
    descriptionColor: '',
    image: image1,
    bgColor: '#008646',
  },
  {
    id: 3,
    name: 'Lorem ipsum',
    nameColor: '#6ADB84',
    description: 'Your trusted partner for high-quality outsourcing services. Whether you are a small business owner looking to free some time or a large corporation seeking to streamline your processes and increase efficiency, we have the expertise and experience to help you succeed. we have the expertise and experience to help you succeed. Whether you are a small business owner looking to free up some time or a large corporation seeking to streamline your processes and increase efficiency, we have the expertise and experience to help you succeed.',
    descriptionColor: '#FFF6E7',
    image: image1,
    bgColor: '#003249',
  },
  {
    id: 4,
    name: 'Lorem ipsum',
    nameColor: '#6ADB84',
    description: 'Your trusted partner for high-quality outsourcing services. Whether you are a small business owner looking to free some time or a large corporation seeking to streamline your processes and increase efficiency, we have the expertise and experience to help you succeed. we have the expertise and experience to help you succeed. Whether you are a small business owner looking to free up some time or a large corporation seeking to streamline your processes and increase efficiency, we have the expertise and experience to help you succeed.',
    descriptionColor: '#FFF6E7',
    image: image1,
    bgColor: '#F18934',
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

const HorizontalScroll = () => {
  return (
    <Carousel responsive={responsive} arrows={false}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              pauseOnHover={false}
   >
      {dataItems?.map((item) => (
        <div key={item.id} className='w-full lg:h-[807px] px-10 mt-20 flex flex-col lg:flex-row' style={{ backgroundColor: item.bgColor }}>
          <div className='lg:w-1/2 flex items-center'>
            <div>
                <p className='font-custom text-[48px] font-medium' style={{ color: item.nameColor }}>{item.name}</p>
                <p className='font-normal text-[18px] text-justify tracking-tighter lg:w-[575px] lg:h-[225px]' style={{ color: item.descriptionColor }}>{item.description}</p>
            </div>
          </div>
          <div className='lg:w-1/2 flex items-center'>
            <div>
                <img src={item.image} alt='' className='rounded-[6px] h-[345px] w-[680px] mt-6 lg:mt-0 object-cover' />
                <p className='text-[24px] font-custom font-normal mt-10'>{item.name}</p>
                <p className='text-[18px] leading-[25px] font-custom pr-10 text-justify' style={{ color: item.descriptionColor }}>{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default HorizontalScroll;

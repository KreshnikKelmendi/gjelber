import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import image1 from "../assets/germiaGreen.png";

const dataItems = [
  {
    id: 1,
    name: 'Stabiliteti dhe rritja financiare:',
    nameColor: '#6ADB84',
    description: 'Sigurimi i stabilitetit financiar afatshkurtër nëpërmjet menaxhimit efektiv të kostos dhe strategjive të optimizimit të të ardhurave. Zhvillimi i një plani financiar të qëndrueshëm për të siguruar rritje afatgjatë dhe qëndrueshmëri ndaj pasigurive ekonomike.',
    descriptionColor: '#FFF6E7',
    image: image1,
    bgColor: '#006646',
  },
  {
    id: 2,
    name: 'Efikasiteti operacional',
    nameColor: '',
    description: 'Rritja e efikasitetit operacional duke thjeshtuar proceset e brendshme dhe duke zbatuar zgjidhje teknologjike aty ku është e aplikueshme.Optimizimi i përdorimit të burimeve për të minimizuar humbjet dhe për të zvogëluar kostot operacionale.',
    descriptionColor: '',
    image: image1,
    bgColor: '#008646',
  },
  {
    id: 3,
    name: 'Praktikat e qëndrueshme',
    nameColor: '#6ADB84',
    description: "Forcimi dhe zgjerimi i praktikave të qëndrueshme të peizazhit për të minimizuar ndikimin mjedisor të operacioneve tona. Zbatimi i teknologjive të gjelbra dhe zgjidhjeve inovative për të rritur qëndrueshmërinë në mirëmbajtjen e hapësirës së gjelbër",
    descriptionColor: '#FFF6E7',
    image: image1,
    bgColor: '#003249',
  },
  {
    id: 4,
    name: 'Angazhimi i komunitetit:',
    nameColor: '#6ADB84',
    description: "Angazhimi aktiv me komunitetin lokal për të rritur ndërgjegjësimin për ruajtjen e mjedisit dhe praktikat e qëndrueshme. Bashkëpunimi me organizatat lokale, shkollat dhe banorët për të promovuar përfshirjen e komunitetit në iniciativat e gjelbra",
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

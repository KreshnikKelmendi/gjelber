import React from 'react';
import logoFooter from '../assets/logofooter.png';

const Footer = () => {
  return (
    <div className='mt-[-104.5px] bg-[#6ADB84] h-[100%] lg:h-[676px] py-40 flex justify-center items-center'>
      <div className='flex flex-col lg:flex-row lg:space-x-28'>
      <div className='mx-auto'>
        <img src={logoFooter} alt='' className='object-contain w-[214px] h-[47px]' />
        <p className='text-[15px] w-[178px] leading-[17.8px] mt-3 text-[#FFF6E7] font-normal font-custom'>we connect ton the world with awsome companies.</p>
        </div>
        <nav className='lg:ml-4 mt-6'>
          <ul className='flex flex-col lg:flex-row lg:space-x-28 space-y-12 lg:space-y-0'>
            <li>
              <a href='/about-gjelber' className='font-custom uppercase hover:text-gray-300 text-[15px] text-[#006646]'>
                About Gjelber
              </a>
              <ul className=''>
                <li className='mt-4'>
                  <a href='/rreth-nesh' className='text-white hover:text-gray-300'>
                    Rreth Nesh
                  </a>
                </li>
                <li className='mt-4'>
                  <a href='/ballina' className='text-white hover:text-gray-300'>
                    Ballina
                  </a>
                </li>
                <li className='mt-4'>
                  <a href='/faq' className='text-white hover:text-gray-300'>
                    FAQ'S
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href='/products' className='font-custom uppercase hover:text-gray-300 text-[15px] text-[#006646]'>
                Products
              </a>
              <ul className=''>
                <li className='mt-4'>
                  <a href='/category-1' className='text-white hover:text-gray-300'>
                    Category 1
                  </a>
                </li>
                <li className='mt-4'>
                  <a href='/category-2' className='text-white hover:text-gray-300'>
                    Category 2
                  </a>
                </li>
              </ul>
            </li>

            <li className=''>
              <a href='/products' className='font-custom uppercase hover:text-gray-300 text-[15px] text-[#006646]'>
                NOT QUITE READY FOR SURVEY?
              </a>
              <ul className='flex flex-col space-y-2'>
                <li className='mt-4'>
                  <a href='/category-1' className='text-white hover:text-gray-300'>
                    Join our online no-community for free. No spam, ever.
                  </a>
                </li>
                <li className='flex flex-col justify-center items-center lg:flex-row lg:space-x-2 space-y-4'>
                  <input type='email' placeholder='Your Email' className='mt-4 w-64 lg:w-[279px] lg:h-[52px] border-gray-300 p-2 rounded-[4px]' />
                  <button className='bg-[#006646] w-64 lg:w-[144px] lg:h-[52px] text-white p-2 rounded-[4px]'>Subscribe</button>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Footer;

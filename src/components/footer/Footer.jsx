import React from 'react';
import logoFooter from '../assets/logofooter.png';
import { Link } from 'react-router-dom';
import instagramIcon from "../assets/instagramLogs.png"
import facebookIcon from "../assets/fb-logo.png"

const Footer = () => {
  return (
    <div className='mt-[-104.5px] bg-[#6ADB84] h-[100%] lg:h-[676px] py-40 flex justify-center items-center'>
      <div className='flex flex-col lg:flex-row lg:space-x-28'>
      <div className='mx-auto'>
        <img src={logoFooter} alt='' className='object-contain w-[214px] h-[47px]' />
        <p className='text-[15px] w-[178px] leading-[17.8px] mt-3 text-[#FFF6E7] font-normal font-custom'>Bashkohu në Mbrojtjen e Mjedisit!

</p>
        </div>
        <nav className='lg:ml-4 mt-6'>
          <ul className='flex flex-col lg:flex-row lg:space-x-28 space-y-12 lg:space-y-0'>
            <li>
              <a href='/about-gjelber' className='font-custom uppercase hover:text-gray-300 text-[15px] text-[#006646]'>
                Gjelbër
              </a>
              <ul className=''>
                <li className='mt-4'>
                  <Link to="/"onClick={() => window.scrollTo({ top: 0, left: 0 })} className='text-white hover:text-gray-300'>
                    Ballina
                  </Link>
                </li>
                <li className='mt-4'>
                <Link to="/rrethNesh" onClick={() => window.scrollTo({ top: 0, left: 0 })} className='text-white hover:text-gray-300'>
                    Rreth Nesh
                  </Link>
                </li>
                <li className='mt-4'>
                <Link to="/aktivitetet" onClick={() => window.scrollTo({ top: 0, left: 0 })} className='text-white hover:text-gray-300'>
                    Aktivitetet
                  </Link>
                </li>
                <li className='mt-4'>
                <Link to="/veprimtarite" onClick={() => window.scrollTo({ top: 0, left: 0 })} className='text-white hover:text-gray-300'>
                    Veprimtaritë
                  </Link>
                </li>
                <li className='mt-4'>
                <Link to="/contact" onClick={() => window.scrollTo({ top: 0, left: 0 })} className='text-white hover:text-gray-300'>
                    Kontakti
                  </Link>
                </li>
                <li className='mt-4'>
                <Link to="/shpalljet" onClick={() => window.scrollTo({ top: 0, left: 0 })} className='text-white hover:text-gray-300'>
                    Shpalljet
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/rrethNesh" onClick={() => window.scrollTo({ top: 0, left: 0 })} className='font-custom uppercase hover:text-gray-300 text-[15px] text-[#006646]'>
                Rreth Nesh
              </Link>
              <ul className=''>
                <li className='mt-4'>
                  <Link to="/komisioniKomunal" onClick={() => window.scrollTo({ top: 0, left: 0 })} href='/category-1' className='text-white hover:text-gray-300'>
                    Komisioni Komunal i Aksionarëve
                  </Link>
                </li>
                <li className='mt-4'>
                <Link to="/bordi" onClick={() => window.scrollTo({ top: 0, left: 0 })} href='/category-1' className='text-white hover:text-gray-300'>
                    Bordi i Drejtorëve
                  </Link>
                </li>
                <li className='mt-4'>
                <Link to="/menaxhmenti-i-ndermarrjes" onClick={() => window.scrollTo({ top: 0, left: 0 })} href='/category-1' className='text-white hover:text-gray-300'>
                    Menaxhmenti i Ndërmarrjes
                  </Link>
                </li>
                <li className='mt-4'>
                <Link to="/korniza-ligjore" onClick={() => window.scrollTo({ top: 0, left: 0 })} href='/category-1' className='text-white hover:text-gray-300'>
                    Korniza Ligjore
                  </Link>
                </li>
                <li className='mt-4'>
                <Link to="/struktura-organizative-e-ndermarrjes" onClick={() => window.scrollTo({ top: 0, left: 0 })} href='/category-1' className='text-white hover:text-gray-300'>
                    Struktura Organizative e Ndërmarrjes
                  </Link>
                </li>
              </ul>
            </li>

<li className=''>
  <a href='/products' className='font-custom uppercase hover:text-gray-300 text-[15px] text-[#006646]'>
    Na ndiqni në rrjetet tona sociale.
  </a>
  <ul className='flex flex-col space-y-2'>
    {/* <li className='mt-4'>
      <a href='/category-1' className='text-white hover:text-gray-300'>
        Join our online no-community for free. No spam, ever.
      </a>
    </li> */}
    <li className='flex flex-row justify-center items-center lg:space-x-2 mt-4'>
      <a href='https://www.instagram.com/gjelber.sha/' target='_blank' rel="noreferrer" className='block'>
        <img src={instagramIcon} alt='Instagram' className='h-10 w-10 object-cover hover:text-gray-300' />
      </a>
      <a href='https://www.facebook.com/profile.php?id=100065067662030' target='_blank' rel="noreferrer" className='block'>
        <img src={facebookIcon} alt='Facebook' className='h-10 w-10 object-cover hover:text-gray-300' />
      </a>
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

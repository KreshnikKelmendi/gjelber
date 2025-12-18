import React from 'react';
import logoFooter from '../assets/logofooter.png';
import { Link } from 'react-router-dom';
import instagramIcon from "../assets/instagramLogs.png";
import facebookIcon from "../assets/fb-logo.png";
import { nextjsUrl } from "../assets/api/nextjsUrl";

const Footer = () => {
  return (
    <div className='bg-[#6ADB84] py-16 lg:py-24 px-4 lg:px-8 w-full mt-[-45px] relative'>
      <div className='mx-auto'>
        {/* Main Footer Content */}
        <div className='flex flex-col lg:flex-row justify-between gap-12 lg:gap-8'>
          
          {/* Logo and Tagline */}
          <div className='flex flex-col items-center lg:items-start'>
            <img 
              src={logoFooter} 
              alt='Gjelbër Logo' 
              className='w-[214px] h-[47px] object-contain'
            />
            <p className='text-[15px] text-center lg:text-left text-[#FFF6E7] font-normal font-custom mt-4 max-w-[250px]'>
              Bashkohu në Mbrojtjen e Mjedisit!
            </p>
          </div>

          {/* Navigation Sections */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8'>
            
            {/* Gjelbër Links */}
            <div className='space-y-4'>
              <h3 className='font-custom uppercase text-[15px] text-[#006646] font-semibold'>
                Gjelbër
              </h3>
              <ul className='space-y-3'>
                {[
                  { path: "/", text: "Ballina", isExternal: false },
                  { path: "/rrethNesh", text: "Rreth Nesh", isExternal: false },
                  { path: "/aktivitetet", text: "Aktivitetet", isExternal: false },
                  { path: "/veprimtarite", text: "Veprimtaritë", isExternal: false },
                  { path: "/contact", text: "Kontakti", isExternal: false },
                  { path: "/shpalljet", text: "Shpalljet", isExternal: true }
                ].map((item, index) => (
                  <li key={index}>
                    {item.isExternal ? (
                      <a 
                        href={nextjsUrl ? `${nextjsUrl}${item.path}` : item.path} 
                        onClick={() => window.scrollTo({ top: 0, left: 0 })} 
                        className='text-white hover:text-gray-300 transition-colors duration-200'
                      >
                        {item.text}
                      </a>
                    ) : (
                      <Link 
                        to={item.path} 
                        onClick={() => window.scrollTo({ top: 0, left: 0 })} 
                        className='text-white hover:text-gray-300 transition-colors duration-200'
                      >
                        {item.text}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Rreth Nesh Links */}
            <div className='space-y-4'>
              <h3 className='font-custom uppercase text-[15px] text-[#006646] font-semibold'>
                Rreth Nesh
              </h3>
              <ul className='space-y-3'>
                {[
                  { path: "/komisioniKomunal", text: "Komisioni Komunal i Aksionarëve" },
                  { path: "/bordi", text: "Bordi i Drejtorëve" },
                  { path: "/menaxhmenti-i-ndermarrjes", text: "Menaxhmenti i Ndërmarrjes" },
                  { path: "/korniza-ligjore", text: "Korniza Ligjore" },
                  { path: "/struktura-organizative-e-ndermarrjes", text: "Struktura Organizative" }
                ].map((item, index) => (
                  <li key={index}>
                    <Link 
                      to={item.path} 
                      onClick={() => window.scrollTo({ top: 0, left: 0 })} 
                      className='text-white hover:text-gray-300 transition-colors duration-200'
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media Section */}
            <div className='space-y-4'>
              <h3 className='font-custom uppercase text-[15px] text-[#006646] font-semibold'>
                Na ndiqni në rrjetet tona sociale
              </h3>
              <div className='flex flex-col space-y-4'>
                <div className='flex justify-center lg:justify-start space-x-6'>
                  <a 
                    href='https://www.instagram.com/gjelber.sha/' 
                    target='_blank' 
                    rel="noreferrer"
                    className='transition-transform duration-200 hover:scale-110'
                  >
                    <img 
                      src={instagramIcon} 
                      alt='Instagram' 
                      className='h-10 w-10 object-contain'
                    />
                  </a>
                  <a 
                    href='https://www.facebook.com/profile.php?id=100065067662030' 
                    target='_blank' 
                    rel="noreferrer"
                    className='transition-transform duration-200 hover:scale-110'
                  >
                    <img 
                      src={facebookIcon} 
                      alt='Facebook' 
                      className='h-10 w-10 object-contain'
                    />
                  </a>
                </div>
                <p className='text-white text-sm text-center lg:text-left'>
                  Bëhu pjesë e komunitetit tonë!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright/Bottom Section */}
        <div className='border-t border-[#006646] border-opacity-30 mt-12 pt-8'>
          <p className='text-white text-sm text-center'>
            © {new Date().getFullYear()} Gjelbër. Të gjitha të drejtat e rezervuara.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from './Button';
import menu from "../assets/menu.png";
import closeIcon from "../assets/remove.png";  // Replace with your close icon image
import logo from "../assets/Layer_1.png"

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div className='w-full sticky'>
      <div className='lg:flex bg-[#FFF6E7] items-center justify-between py-4 lg:px-10 px-5'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-custom text-gray-800'>
          <span className='text-3xl text-indigo-600 mr-1 pt-2'>
            <img className='w-[127px] h-auto' src={logo} alt='' />
          </span>
        </div>

        <div onClick={toggleMenu} className='text-3xl absolute right-5 top-5 cursor-pointer lg:hidden'>
          {open ? (
            <img className='w-7 h-7 object-cover' src={closeIcon} alt='' />
          ) : (
            <img className='w-7 h-7 object-cover' src={menu} alt='' />
          )}
        </div>

        <ul className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute font-normal text-[12px] lg:static bg-[#FFF6E7] lg:z-auto z-50 lg:space-x-14 left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-18' : 'top-[-490px]'}`}>
          <li className='lg:ml-8 lg:my-0 my-7 font-custom'>
            <NavLink onClick={closeMenu} exact to="/" className='text-gray-800 hover:text-gray-400 duration-500 active:text-red-500'>Ballina</NavLink>
          </li>
          <li className='lg:ml-8 lg:my-0 my-7 font-custom'>
            <NavLink onClick={closeMenu} to="/rreth-nesh" className='text-gray-800 hover:text-gray-400 duration-500 active:text-red-500'>Rreth Nesh</NavLink>
          </li>
          <li className='lg:ml-8 lg:my-0 my-7 font-custom'>
            <NavLink onClick={closeMenu} to="/aktivitetet" className='text-gray-800 hover:text-gray-400 duration-500 active:text-red-500'>Aktivitetet</NavLink>
          </li>
          <li className='lg:ml-8 lg:my-0 my-7 font-custom'>
            <NavLink onClick={closeMenu} to="/veprimtarite" className='text-gray-800 hover:text-gray-400 duration-500 active:text-red-500'>Veprimtaritë</NavLink>
          </li>
          <li className='lg:ml-8 lg:my-0 my-7 font-custom'>
            <NavLink onClick={closeMenu} to="/contact" className=' text-gray-800 hover:text-gray-400 duration-500 active:text-red-500'>Kontakti</NavLink>
          </li>
          <Link onClick={closeMenu} to="/shpalljet">

          <Button className='text-white hover:text-white duration-500 active:text-red-500'>
            Shpalljet
          </Button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;

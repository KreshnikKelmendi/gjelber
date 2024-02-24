import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from './Button';
import menu from "../assets/menu.png";
import closeIcon from "../assets/remove.png";
import logo from "../assets/Layer_1.png";

const DropdownMenu = ({ closeMenu }) => {
  return (
    <ul className='absolute bg-[#FFF6E7] z-30 top-full left-0 ml-[-10px] py-5 lg:w-[650px] h-[167px] rounded-[6px]'>
      <li>
        <NavLink onClick={closeMenu} to="/komisionikomunal" className='block mx-3 my-2 text-[10px] text-[#003249] font-custom font-normal hover:bg-gray-100'>Komisioni Komunal i Aksionarëve</NavLink>
      </li>
      <li>
        <NavLink onClick={closeMenu} to="/bordi" className='block mx-3 my-3 text-[10px] text-[#003249] font-custom font-normal hover:bg-gray-100'>Bordi i Drejtorëve</NavLink>
      </li>
      <li>
        <NavLink onClick={closeMenu} to="/kryeshefi-ekzekutiv" className='block mx-3 my-3 text-[10px] text-[#003249] font-custom font-normal hover:bg-gray-100'>Kryeshefi Ekzekutiv</NavLink>
      </li>
      <li>
        <NavLink onClick={closeMenu} to="" className='block mx-3 my-3 text-[10px] text-[#003249] font-custom font-normal hover:bg-gray-100'>Zyra e Auditimit të Brendshëm</NavLink>
      </li>
      <li>
        <NavLink onClick={closeMenu} to="" className='block mx-3 my-3 text-[10px] text-[#003249] font-custom font-normal hover:bg-gray-100'>Struktura Organizative e Ndërmarrjes</NavLink>
      </li>
    </ul>
  );
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className='w-full sticky'>
      <div className='lg:flex bg-[#FFF6E7] items-center justify-between py-4 lg:px-10 px-5 z-50'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-custom text-gray-800'>
          <span className='text-3xl text-indigo-600 mr-1 pt-2'>
            <Link to="/" onClick={() => window.scrollTo({ top: 0, left: 0 })}>
              <img className='w-[127px] h-auto' src={logo} alt='' />
            </Link>
          </span>
        </div>

        <div onClick={toggleMenu} className='text-3xl absolute right-5 top-5 cursor-pointer lg:hidden'>
          {open ? (
            <img className='w-7 h-7 object-cover' src={closeIcon} alt='' />
          ) : (
            <img className='w-7 h-7 object-cover' src={menu} alt='' />
          )}
        </div>

        <ul className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute font-normal text-[15px] lg:text-[13px] lg:static bg-[#FFF6E7] lg:z-auto z-50 lg:space-x-14 left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-18' : 'top-[-490px]'}`}>
          <li className='lg:ml-8 lg:my-0 my-7 font-custom'>
            <NavLink onClick={closeMenu} exact to="/" className='text-gray-800 hover:text-gray-400 duration-500 active:text-red-500'>Ballina</NavLink>
          </li>
          <li className='lg:ml-8 lg:my-0 my-7 font-custom relative'>
            <div
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}
              className='text-gray-800 hover:text-gray-400 duration-500 active:text-red-500 cursor-pointer flex items-center'
            >
              <NavLink to="/rrethNesh">Rreth Nesh</NavLink>
              <span className='ml-2'>
                {dropdownOpen ? (
                 
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className='w-4 h-4 inline-block'
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
                ) : (
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className='w-4 h-4 inline-block'
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                )}
              </span>
              {dropdownOpen && <DropdownMenu closeMenu={closeMenu} />}
            </div>
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
          <Link onClick={closeMenu} to="/shpalljet" className='z-50'>
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

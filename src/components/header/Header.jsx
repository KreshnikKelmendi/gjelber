import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from './Button';
import menu from "../assets/menu.png";
import closeIcon from "../assets/remove.png";
import logo from "../assets/Layer_1.png";
import { nextjsUrl } from "../assets/api/nextjsUrl";

const DropdownMenu = ({ closeMenu }) => {
  return (
    <ul className='lg:absolute lg:bg-[#FFF6E7] lg:z-50 lg:top-full lg:left-0 lg:ml-[-10px] lg:py-5 lg:w-[650px] lg:h-[167px] lg:rounded-[6px] lg:shadow-lg space-y-1'>
      <li>
        <NavLink onClick={closeMenu} to="/komisionikomunal" className='block px-4 py-2 lg:mx-3 lg:my-2 text-sm lg:text-[10px] text-[#003249] font-custom font-normal hover:bg-[#003249] hover:text-white lg:hover:bg-gray-100 lg:hover:text-[#003249] rounded-lg lg:rounded-none transition-all duration-200'>Komisioni Komunal i Aksionarëve</NavLink>
      </li>
      <li>
        <NavLink onClick={closeMenu} to="/bordi" className='block px-4 py-2 lg:mx-3 lg:my-3 text-sm lg:text-[10px] text-[#003249] font-custom font-normal hover:bg-[#003249] hover:text-white lg:hover:bg-gray-100 lg:hover:text-[#003249] rounded-lg lg:rounded-none transition-all duration-200'>Bordi i Drejtorëve</NavLink>
      </li>
      <li>
        <NavLink onClick={closeMenu} to="/menaxhmenti-i-ndermarrjes" className='block px-4 py-2 lg:mx-3 lg:my-3 text-sm lg:text-[10px] text-[#003249] font-custom font-normal hover:bg-[#003249] hover:text-white lg:hover:bg-gray-100 lg:hover:text-[#003249] rounded-lg lg:rounded-none transition-all duration-200'>Menaxhmenti i Ndërmarrjes</NavLink>
      </li>
      <li>
        <NavLink onClick={closeMenu} to="/korniza-ligjore" className='block px-4 py-2 lg:mx-3 lg:my-3 text-sm lg:text-[10px] text-[#003249] font-custom font-normal hover:bg-[#003249] hover:text-white lg:hover:bg-gray-100 lg:hover:text-[#003249] rounded-lg lg:rounded-none transition-all duration-200'>Korniza Ligjore</NavLink>
      </li>
      <li>
        <NavLink onClick={closeMenu} to="/struktura-organizative-e-ndermarrjes" className='block px-4 py-2 lg:mx-3 lg:my-3 text-sm lg:text-[10px] text-[#003249] font-custom font-normal hover:bg-[#003249] hover:text-white lg:hover:bg-gray-100 lg:hover:text-[#003249] rounded-lg lg:rounded-none transition-all duration-200'>Struktura Organizative e Ndërmarrjes</NavLink>
      </li>
    </ul>
  );
};

const ContactDropdownMenu = ({ closeMenu }) => {
  return (
    <ul className='lg:absolute lg:bg-[#FFF6E7] lg:z-50 lg:top-full lg:left-0 lg:ml-[-10px] lg:py-5 lg:w-[250px] lg:rounded-[6px] lg:shadow-lg space-y-1'>
      <li>
        <NavLink onClick={closeMenu} to="/contact" className='block px-4 py-2 lg:mx-3 lg:my-2 text-sm lg:text-[10px] text-[#003249] font-custom font-normal hover:bg-[#003249] hover:text-white lg:hover:bg-gray-100 lg:hover:text-[#003249] rounded-lg lg:rounded-none transition-all duration-200'>Kontakti</NavLink>
      </li>
      <li>
        <NavLink onClick={closeMenu} to="/zyrtare-pergjegjese-per-sinjalizim" className='block px-4 py-2 lg:mx-3 lg:my-3 text-sm lg:text-[10px] text-[#003249] font-custom font-normal hover:bg-[#003249] hover:text-white lg:hover:bg-gray-100 lg:hover:text-[#003249] rounded-lg lg:rounded-none transition-all duration-200'>Zyrtare Përgjegjëse për Sinjalizim</NavLink>
      </li>
    </ul>
  );
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [contactDropdownOpen, setContactDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
    setDropdownOpen(false);
    setContactDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleContactDropdown = () => {
    setContactDropdownOpen(!contactDropdownOpen);
  };

  const getShpalljetUrl = () => {
    return 'https://gjelber-shpalljet.vercel.app/shpalljet';
  };

  return (
    <div className='w-full sticky top-0 z-[100]'>
      <div className='lg:flex bg-[#FFF6E7] items-center justify-between py-4 lg:px-10 px-5 relative z-[100]'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-custom text-gray-800 relative z-[101]'>
          <span className='text-3xl text-indigo-600 mr-1 pt-2'>
            <Link to="/" onClick={() => window.scrollTo({ top: 0, left: 0 })}>
              <img className='w-[127px] h-auto' src={logo} alt='' />
            </Link>
          </span>
        </div>

        <button 
          onClick={toggleMenu} 
          className='text-3xl absolute right-5 top-5 cursor-pointer lg:hidden z-[101] p-2'
          aria-label="Toggle menu"
        >
          {open ? (
            <img className='w-7 h-7 object-cover' src={closeIcon} alt='Close menu' />
          ) : (
            <img className='w-7 h-7 object-cover' src={menu} alt='Open menu' />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        {open && (
          <div 
            className='lg:hidden fixed inset-0 bg-black bg-opacity-60 z-[99] transition-opacity duration-300'
            onClick={closeMenu}
          />
        )}

        {/* Mobile Menu Sidebar */}
        <div className={`lg:hidden fixed top-0 right-0 h-screen w-[85%] max-w-sm bg-[#FFF6E7] z-[100] shadow-2xl transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : 'translate-x-full'}`}>
          {/* Close Button */}
          <div className='flex justify-end p-5 border-b border-gray-200'>
            <button onClick={closeMenu} className='p-2 hover:bg-gray-100 rounded-full transition-colors'>
              <img className='w-6 h-6 object-cover' src={closeIcon} alt='Close menu' />
            </button>
          </div>

          {/* Menu Items */}
          <div className='h-[calc(100vh-80px)] overflow-y-auto px-6 py-8'>
            <ul className='flex flex-col space-y-1'>
              <li>
                <NavLink 
                  onClick={closeMenu} 
                  exact 
                  to="/" 
                  className='block px-4 py-3 text-gray-800 hover:bg-[#003249] hover:text-white rounded-lg transition-all duration-200 font-custom text-base'
                  activeClassName='bg-[#003249] text-white'
                >
                  Ballina
                </NavLink>
              </li>
              
              <li>
                <div>
                  <div
                    onClick={toggleDropdown}
                    className='flex items-center justify-between px-4 py-3 text-gray-800 hover:bg-[#003249] hover:text-white rounded-lg transition-all duration-200 cursor-pointer font-custom text-base'
                  >
                    <NavLink onClick={closeMenu} to="/rrethNesh" className='flex-1'>Rreth Nesh</NavLink>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className={`w-5 h-5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  {dropdownOpen && (
                    <div className='mt-1 ml-4 space-y-1 border-l-2 border-gray-300 pl-4'>
                      <DropdownMenu closeMenu={closeMenu} />
                    </div>
                  )}
                </div>
              </li>

              <li>
                <NavLink 
                  onClick={closeMenu} 
                  to="/aktivitetet" 
                  className='block px-4 py-3 text-gray-800 hover:bg-[#003249] hover:text-white rounded-lg transition-all duration-200 font-custom text-base'
                  activeClassName='bg-[#003249] text-white'
                >
                  Aktivitetet
                </NavLink>
              </li>

              <li>
                <NavLink 
                  onClick={closeMenu} 
                  to="/veprimtarite" 
                  className='block px-4 py-3 text-gray-800 hover:bg-[#003249] hover:text-white rounded-lg transition-all duration-200 font-custom text-base'
                  activeClassName='bg-[#003249] text-white'
                >
                  Veprimtaritë
                </NavLink>
              </li>

              <li>
                <div>
                  <div
                    onClick={toggleContactDropdown}
                    className='flex items-center justify-between px-4 py-3 text-gray-800 hover:bg-[#003249] hover:text-white rounded-lg transition-all duration-200 cursor-pointer font-custom text-base'
                  >
                    <NavLink onClick={closeMenu} to="/contact" className='flex-1'>Kontakti</NavLink>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className={`w-5 h-5 transition-transform duration-200 ${contactDropdownOpen ? 'rotate-180' : ''}`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  {contactDropdownOpen && (
                    <div className='mt-1 ml-4 space-y-1 border-l-2 border-gray-300 pl-4'>
                      <ContactDropdownMenu closeMenu={closeMenu} />
                    </div>
                  )}
                </div>
              </li>

              <li className='pt-4 mt-4 border-t border-gray-200'>
                <a 
                  onClick={closeMenu} 
                  href={getShpalljetUrl()}
                  className='block w-full'
                >
                  <Button className='w-full text-center text-white hover:text-white duration-500 active:text-red-500'>
                    Shpalljet
                  </Button>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className='hidden lg:flex lg:items-center lg:pb-0 lg:space-x-14 font-normal text-[13px]'>
          <li className='lg:ml-8 font-custom'>
            <NavLink onClick={closeMenu} exact to="/" className='text-gray-800 hover:text-gray-400 duration-500 active:text-red-500'>Ballina</NavLink>
          </li>
          <li className='lg:ml-8 font-custom relative'>
            <div
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}
              className='text-gray-800 hover:text-gray-400 duration-500 active:text-red-500 cursor-pointer flex items-center'
            >
              <NavLink onClick={closeMenu} to="/rrethNesh">Rreth Nesh</NavLink>
              <span className='ml-3'>
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
          <li className='lg:ml-8 font-custom'>
            <NavLink onClick={closeMenu} to="/aktivitetet" className='text-gray-800 hover:text-gray-400 duration-500 active:text-red-500'>Aktivitetet</NavLink>
          </li>
          <li className='lg:ml-8 font-custom'>
            <NavLink onClick={closeMenu} to="/veprimtarite" className='text-gray-800 hover:text-gray-400 duration-500 active:text-red-500'>Veprimtaritë</NavLink>
          </li>
          <li className='lg:ml-8 font-custom relative'>
            <div
              onMouseEnter={toggleContactDropdown}
              onMouseLeave={toggleContactDropdown}
              className='text-gray-800 hover:text-gray-400 duration-500 active:text-red-500 cursor-pointer flex items-center'
            >
              <NavLink onClick={closeMenu} to="/contact">Kontakti</NavLink>
              <span className='ml-3'>
                {contactDropdownOpen ? (
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
              {contactDropdownOpen && <ContactDropdownMenu closeMenu={closeMenu} />}
            </div>
          </li>
          <a onClick={closeMenu} href={getShpalljetUrl()}>
            <Button className='text-white hover:text-white duration-500 active:text-red-500'>
              Shpalljet
            </Button>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Header;

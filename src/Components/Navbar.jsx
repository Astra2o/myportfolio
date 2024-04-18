import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-zinc-900 dark:bg-gray-900  w-full z-20 top-0 start-0 border-b border-zinc-100 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
          <span className="self-center text-2xl font-semibold whitespace-nowrap italic text-[#CDEA68]">Aman Pal</span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a  type="button" href='#contact' className="text-zinc-900 bg-[#CDEA68] hover:bg-[#c8ef3c] font-medium rounded-lg text-sm px-4 py-2 text-center">Let`s Talk</a>
          <button type="button" onClick={toggleMenu} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-zinc-100 rounded-lg md:hidden hover:bg-[#c8ef3c] hover:text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded={isMenuOpen ? 'true' : 'false'}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className={`items-center z-50 justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-zinc-900 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#" className="block py-2 px-3 text-zinc-100 hover:text-[#CDEA68] rounded md:bg-transparent md:p-0" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#skills" className="block py-2 px-3 text-zinc-100 rounded hover:text-[#CDEA68] md:p-0">Skills</a>
            </li>
            <li>
              <a href="#projects" className="block py-2 px-3 text-zinc-100 rounded hover:text-[#CDEA68] md:p-0">Projects</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-zinc-100 rounded hover:text-[#CDEA68] md:p-0">Blogs</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

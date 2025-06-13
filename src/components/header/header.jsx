import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/icons/LogoShark.png";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Transition } from "@headlessui/react";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className="fixed bg-white top-0 left-0 w-full bg-transparent z-50 py-4 "
 
    >
      <div className=" xl:container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <img
            src={Logo}
            width="50"
            height="50"
            alt=""
            className="w-32 h-auto LOGO order-2 lg:order-1"
          />

          {/* Desktop Menu */}
          <nav className="hidden lg:order-2 lg:flex space-x-6">
            <NavLink
              to="#"
              className="relative inline-block text-black NavBarLink after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              Haqida
            </NavLink>
            <NavLink
              to="#"
              className="relative inline-block text-black NavBarLink after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              Galleries
            </NavLink>
            <NavLink
              to="#"
              className="relative inline-block text-black NavBarLink after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              Aloqa
            </NavLink>
            <NavLink
              to="#"
              className="relative inline-block text-black NavBarLink after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              Bosh Sahifa
            </NavLink>
          </nav>

          <button className="hidden order-3 cellPhone lg:flex items-center gap-2 px-4 py-2 bg-blue-800 text-white hover:ring-2 hover:ring-blue-800 hover:bg-white hover:text-blue-800 transition-all duration-300 cursor-pointer active:bg-blue-800 active:text-white">
            <FontAwesomeIcon icon={faPhone} />
            <NavLink
              to="#"
              className="Phone-Number"
            >
              +998(99)1133000
            </NavLink>
          </button>

          <button className="block order-3 lg:hidden w-12 h-12 bg-blue-800 text-white rounded-full flex items-center justify-center shadow-md  active:bg-white active:ring-2 active:ring-blue-800 active:text-blue-800 transition-all duration-300">
            <FontAwesomeIcon icon={faPhone} className="text-lg" />
          </button>

          {/* Mobil menyu tugmasi */}
          <div className="order-1 lg:hidden ">
            <button
              onClick={toggleMenu}
              className="text-white-600 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobil Menyu */}
      {/* {isMobileMenuOpen && (
        <div className="lg:hidden px-4 pb-4 space-y-2">
          <a href="#" className="block text-gray-600 hover:text-blue-600">
            Bosh sahifa
          </a>
          <a href="#" className="block text-gray-600 hover:text-blue-600">
            Haqida
          </a>
          <a href="#" className="block text-gray-600 hover:text-blue-600">
            Xizmatlar
          </a>
          <a href="#" className="block text-gray-600 hover:text-blue-600">
            Aloqa
          </a>
        </div>
      )} */}
    </header>
  );
};

export default Header;

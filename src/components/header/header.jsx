import React, { useState, useEffect } from "react";
import useScrollLock from "../../hooks/useScrollLock"
import { NavLink } from "react-router-dom";
import Logo from "../../assets/icons/LogoShark.png";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../../context/languagecontext";
import { texts } from "../../context/texts";
import LanguageSwitcher from "../../lang/Languageswitcher";

const Header = () => {





  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

useScrollLock(isMobileMenuOpen)

  const { language } = useLanguage();
  const t = texts[language];

  return (
    <header className="fixed top-0 left-0 w-full bg-transparent z-50 py-4 ">
      <div className=" xl:container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <NavLink>
            <img
              src={Logo}
              width="70"
              height="70"
              alt=""
              className=" w-20 xl:w-32  h-auto LOGO order-2 lg:order-1 cursor-pointer"
            />
          </NavLink>

          {/* Desktop Menu */}
          <nav className="w-[400px] hidden lg:order-2 lg:flex justify-between space-x-6">
            <NavLink
              to="#"
              className="relative m-0 inline-block text-white NavBarLink after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[3px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {t.about}
            </NavLink>
            <NavLink
              to="#"
              className="relative m-0 inline-block text-white NavBarLink after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[3px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {t.services}
            </NavLink>
            <NavLink
              to="#"
              className="relative m-0 inline-block text-white NavBarLink after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[3px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {t.contact}
            </NavLink>
            <NavLink
              to="#"
              className="relative m-0 inline-block text-white NavBarLink after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[3px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {t.plans}
            </NavLink>
          </nav>

          <div className="hidden lg:block order-4 lg:flex justify-between items-center w-[300px]">
            <LanguageSwitcher />
            <button className="order-2 cellPhone lg:flex items-center gap-2 px-4 py-2 bg-blue-800 text-white hover:ring-2 hover:ring-blue-800 hover:bg-white hover:text-blue-800 transition-all duration-300 cursor-pointer active:bg-blue-800 active:text-white">
              <FontAwesomeIcon icon={faPhone} />
              <NavLink to="#" className="Phone-Number">
                +998 (99) 113-30-00
              </NavLink>
            </button>
          </div>

          <button className="block order-3 lg:hidden w-12 h-12 bg-blue-800 text-white rounded-full flex items-center justify-center shadow-md  active:bg-white active:ring-2 active:ring-blue-800 active:text-blue-800 transition-all duration-300">
            <FontAwesomeIcon icon={faPhone} className="text-lg" />
          </button>

          {/* Mobil menyu tugmasi */}
          <button
            onClick={toggleMenu}
            className="order-1 cursor-pointer lg:hidden w-12 h-12 flex items-center justify-center rounded-full bg-blue-800 text-white shadow-md active:bg-white active:ring-2 active:ring-blue-800 active:text-blue-800 transition-all duration-300"
          >
            <FontAwesomeIcon
              icon={isMobileMenuOpen ? faXmark : faBars}
              className={`text-xl transition-transform duration-300 z-60 ${
                isMobileMenuOpen ? "rotate-90 scale-150" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobil Menyu */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-screen  bg-sky-800/95 backdrop-blur-md transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col justify-center items-center h-full space-y-8 px-6">
          <NavLink
            to="#"
            className="text-white text-xl font-semibold active:text-blue-300 transition"
            onClick={toggleMenu}
          >
            {t.about}
          </NavLink>
          <NavLink
            to="#"
            className="text-white text-xl font-semibold active:text-blue-300 transition"
            onClick={toggleMenu}
          >
            {t.services}
          </NavLink>
          <NavLink
            to="#"
            className="text-white text-xl font-semibold active:text-blue-300 transition"
            onClick={toggleMenu}
          >
            {t.contact}
          </NavLink>
          <NavLink
            to="#"
            className="text-white text-xl font-semibold active:text-blue-300 transition"
            onClick={toggleMenu}
          >
            {t.plans}
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;

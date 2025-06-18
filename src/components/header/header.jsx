import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/icons/LogoShark.png";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faBars } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../../context/languagecontext";
import { texts } from "../../context/texts";
import LanguageSwitcher from "../../lang/Languageswitcher";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const { language } = useLanguage();
  const t = texts[language];

  return (
    <header className="fixed bg-white top-0 left-0 w-full bg-transparent z-50 py-4 ">
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
          <nav className="w-[400px] hidden lg:order-2 lg:flex justify-between space-x-6">
            <NavLink
              to="#"
              className="relative m-0 inline-block text-black NavBarLink after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[3px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {t.about}
            </NavLink>
            <NavLink
              to="#"
              className="relative m-0 inline-block text-black NavBarLink after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[3px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {t.services}
            </NavLink>
            <NavLink
              to="#"
              className="relative m-0 inline-block text-black NavBarLink after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[3px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {t.contact}
            </NavLink>
            <NavLink
              to="#"
              className="relative m-0 inline-block text-black NavBarLink after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[3px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
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
          <div className="order-1 lg:hidden z-50">
            <FontAwesomeIcon
              icon={faBars}
              className="text-2xl"
              onClick={() => toggleMenu(false)}
            />
          </div>
        </div>
      </div>

      {/* Mobil Menyu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden w-[] fixed inset-0 z-50 bg-sky-700 flex flex-col justify-center items-center space-y-6">
          <NavLink
            to="#"
            className="relative mb-20 inline-block text-white NavBarLink"
          >
            {t.about}
          </NavLink>
          <NavLink
            to="#"
            className="relative mb-20 inline-block text-white NavBarLink"
          >
            {t.services}
          </NavLink>
          <NavLink
            to="#"
            className="relative mb-20 inline-block text-white NavBarLink"
          >
            {t.contact}
          </NavLink>
          <NavLink
            to="#"
            className="relative mb-20 inline-block text-white NavBarLink"
          >
            {t.plans}
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;

import React from "react";
import Logo from "../../assets/icons/LogoShark.png";
import { FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Kompaniya */}
        <div>
          <img src={Logo} alt="" className="w-32 h-auto mb-10" />
          <p className="text-sm text-gray-300">
            Sharkstroy — 10 yillik tajribaga ega qurilish kompaniyasi. Biz
            sifatli, zamonaviy va ishonchli qurilish xizmatlarini taklif
            qilamiz.
          </p>
        </div>

        {/* Havolalar */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Havolalar</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <NavLink href="#" className="hover:text-white">
                Bosh sahifa
              </NavLink>
            </li>
            <li>
              <NavLink href="#" className="hover:text-white">
                Biz haqimizda
              </NavLink>
            </li>
            <li>
              <NavLink href="#" className="hover:text-white">
                Xizmatlar
              </NavLink>
            </li>
            <li>
              <NavLink href="#" className="hover:text-white">
                Bog‘lanish
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Aloqa */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Aloqa</h4>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>+998 (99) 113 30 00</li>
            <li>Toshkent shahri, Yunsobod</li>
            <li>sharkstroy.uz</li>
          </ul>
        </div>

        {/* Ijtimoiy tarmoqlar */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Ijtimoiy tarmoqlar</h4>
          <div className="flex space-x-4 text-gray-300 text-xl">
            <NavLink
              to="https://instagram.com/sharkstroy.uz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 text-3xl hover:text-pink-600 transition duration-300"
            >
               <FaInstagram />
            </NavLink>
            
          </div>
        </div>
      </div>

      {/* Pastki chiziq */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        {new Date().getFullYear()} Sharkstroy. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { useLanguage } from '../context/languagecontext';
import uzb from "../assets/icons/uzb.webp"
import rus from "../assets/icons/rus.png"

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="hidden lg:order-1 lg:flex items-center gap-3">
      {/* 🇺🇿 O'zbekcha */}
      <button
        onClick={() => setLanguage('uz')}
        className={`w-8 h-8 rounded-full overflow-hidden border-2 ${language === 'uz' ? 'border-blue-500' : 'border-gray-300'}  cursor-pointer`}
        aria-label="O'zbek tili"
      >
        <img src={uzb} alt="Uzbek flag" className="object-cover w-full h-full" />
      </button>

      {/* 🇷🇺 Русский */}
      <button
        onClick={() => setLanguage('ru')}
        className={`w-8 h-8 rounded-full overflow-hidden border-2 ${language === 'ru' ? 'border-blue-500' : 'border-gray-300'} cursor-pointer`}
        aria-label="Rus tili"
      >
        <img src={rus} alt="Russian flag" className="object-cover w-full h-full" />
      </button>
    </div>
  );
};

export default LanguageSwitcher;

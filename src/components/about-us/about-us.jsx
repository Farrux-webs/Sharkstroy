import React from "react";
import "./about-us.css";
import Shark from "../../assets/icons/Shark.png";
import { FaArrowDown } from "react-icons/fa";
import { FaTools, FaUsers, FaLightbulb, FaHandshake } from "react-icons/fa";

const AboutUs = ({ onScroll }) => {
  const cards = [
    {
      title: "100+ Loyihalar",
      text: "Yurtimiz bo‘ylab muvaffaqiyatli qurilgan obyektlar.",
      icon: <FaTools className="text-blue-600 text-2xl" />,
    },
    {
      title: "Professional jamoa",
      text: "Muhandislar, arxitektorlar va ustalardan iborat kuchli jamoa.",
      icon: <FaUsers className="text-blue-600 text-2xl" />,
    },
    {
      title: "Innovatsion yondashuv",
      text: "Yangi texnologiyalar va barqaror yechimlardan foydalanamiz.",
      icon: <FaLightbulb className="text-blue-600 text-2xl" />,
    },
    {
      title: "Mijozlar ishonchi",
      text: "Biz bilan ishlagan 300+ mijozlarimizning iliq fikrlari.",
      icon: <FaHandshake className="text-blue-600 text-2xl" />,
    },
  ];

  return (
    <>
      <section className="about-us relative h-screen bg-cover bg-center bg-no-repeat lg:overflow-hidden">
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          {/* Kontent qatori */}
          <div className="w-full max-w-11xl flex flex-col xl:flex-row items-center justify-between gap-6 lg:gap-4">
            {/* CHAP BLOK */}
            <div className="flex flex-col gap-4 w-full xl:w-1/3 items-start">
              <div className="bg-black/70 text-white px-5 py-3 rounded-md flex justify-center items-cente  sm:text-lg md:text-xl font-semibold w-full max-w-[400px] 2xl:max-w-[600px] 2xl:text-2xl">
                <span className="text-teal-400 font-bold">BEPUL</span> 3D DIZAYN
              </div>
              <div className="bg-black/70 text-white px-5 py-3 rounded-md flex justify-center items-centesm:text-lg md:text-xl font-semibold w-full max-w-[400px] 2xl:max-w-[600px] 2xl:text-2xl">
                KAFOLAT 1.5 YIL
              </div>
            </div>

            {/* RASM BLOK (faqat lg va undan katta ekranlarda ko‘rinadi) */}
            <div className="hidden xl:flex xl:w-[700px] 2xl:w-[800px] justify-center relative">
              <img
                src={Shark}
                alt="Shark"
                className="object-contain drop-shadow-xl 2xl:translate-y-[10%]"
              />
            </div>

            {/* O‘NG BLOK */}
            <div className="flex flex-col gap-4 w-full xl:w-1/3 items-end">
              <div className="bg-black/70 text-white px-5 py-3 rounded-md flex justify-center items-center text-sm sm:text-base md:text-lg font-semibold w-full max-w-[450px] text-right 2xl:max-w-[600px] 2xl:text-2xl">
                <p className="text-center">
                  UY O‘LCHOVLARI VA 3D KO‘RINISHDA
                  <span className="text-teal-400"> REJALASHTIRISH BONUS</span>
                </p>
              </div>
              <div className="bg-black/70 text-white  px-5 py-3 rounded-md flex justify-center items-center sm:text-lg md:text-xl font-semibold w-full max-w-[450px] text-right   2xl:max-w-[600px] 2xl:text-2xl">
                30 YILLIK TAJRIBALI USTALAR
              </div>
            </div>
          </div>

          {/* SCROLL TUGMASI */}
          <button
            onClick={onScroll}
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg animate-bounce cursor-pointer"
          >
            <FaArrowDown className="text-2xl" />
          </button>
        </div>
      </section>
    </>
  );
};

export default AboutUs;

import React from "react";
import "./about-us.css";
import Shark from "../../assets/icons/Shark.png";
import { FaArrowDown } from "react-icons/fa";
import {
  FaTools,
  FaUsers,
  FaLightbulb,
  FaAngleDoubleDown,
} from "react-icons/fa";

const AboutUs = ({ onScroll }) => {
  return (
    <>
<section className="about-us relative h-screen bg-cover bg-center bg-no-repeat overflow-hidden">
  <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
    
    <div className="w-full max-w-screen-xl flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
      
      {/* CHAP BLOK */}
      <div className="flex flex-col gap-4 w-full xl:w-1/3">
        <div className="bg-neutral-200/90 text-[#3d3d3d] py-3 rounded-md flex justify-center items-center text-sm xl:text-xl font-semibold">
          <span className="text-rose-600 lg:text-sky-400 mx-1">BEPUL</span> 3D DIZAYN
        </div>
        <div className="bg-neutral-200/90 text-[#3d3d3d] px-5 py-3 rounded-md flex justify-center items-center text-sm xl:text-xl font-semibold">
          KAFOLAT 1.5 YIL
        </div>
      </div>

      {/* AKULA RASMI */}
      <div className="hidden lg:block flex-shrink-0">
        <img
          src={Shark}
          alt="Shark"
          className="object-contain drop-shadow-xl translate-y-[10%] w-[400px] xl:w-[600px]"
        />
      </div>

      {/* O‘NG BLOK */}
      <div className="flex flex-col gap-4 w-full xl:w-1/3">
        <div className="bg-neutral-200/90 text-[#3d3d3d] px-5 py-3 rounded-md flex justify-center items-center text-base text-sm xl:text-lg font-semibold text-center">
          <p>
            UY O‘LCHOVLARI 
          </p>
        </div>
        <div className="bg-neutral-200/90 text-rose-600 lg:text-sky-400 mx-1  px-5 py-3 rounded-md flex justify-center items-center text-base text-sm xl:text-lg font-semibold text-center">
          <span >
           3D KO'RINISHIDA REJALASHTIRISH BONUS
          </span>
        </div>
        <div className="bg-neutral-200/90 text-[#3d3d3d] px-5 py-3 rounded-md flex justify-center items-center text-base text-sm xl:text-lg font-semibold text-center">
          30 YILLIK TAJRIBALI USTALAR
        </div>
      </div>
    </div>

    {/* SCROLL TUGMASI */}
    <button
      onClick={onScroll}
      className="absolute cursor-pointer bottom-6 left-1/2 -translate-x-1/2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg animate-bounce"
    >
      <FaAngleDoubleDown className="text-2xl" />
    </button>
  </div>
</section>

    </>
  );
};

export default AboutUs;

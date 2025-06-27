import React from "react";
import "./about-us.css";
import Shark from "../../assets/icons/Shark.png";
import { FaArrowDown } from "react-icons/fa";

const AboutUs = ({ onScroll }) => {
  return (
    <>
      <section className="h-screen about-us relative py-[100px] overflow-y-hidden">
        {/* <div className="absolute inset-0 bg-black/50 z-0"></div> */}
        <div className="relative z-10 flex items-center justify-between h-full">
          <ul className=" grid grid-rows-2 gap-4">
            <li className="bg-neutral-700 px-4 py-2 rounded text-[30px] text-white">
              <p>
                <span className="text-teal-400 font-bold">BEPUL</span> 3D DIZAYN
              </p>
            </li>
            <li className="bg-neutral-700 px-4 py-2 rounded text-[30px] text-white">
              <p>KAFOLAT 1.5 YIL</p>
            </li>
          </ul>

          <img src={Shark} className="w-[600px] absolute bottom-[-250px] left-[500px] about-us-shark" alt="" />

          <ul className="grid grid-rows-3  grid-cols-[500px] gap-4 text-white text-right">
            <li className="bg-neutral-700 px-4 py-2 rounded text-[23px] text-white">
              <p className="text-center">
                UY O'LCHOVLARI VA 3D KO‘RINISHDA REJALASHTIRISH
                <span className="text-teal-400 font-bold"> BONUS</span>
              </p>
            </li>
            <li className="bg-neutral-700 px-4 py-2 rounded text-[30px] text-white">
              <p className="text-center">13 YILLIK TAJRIBALI USTALAR</p>
            </li>
            <li
              className="bg-neutral-700 bg-opacity-10
             px-4 py-2 rounded text-[30px] text-white"
            >
              <p className="text-center">TO‘LOV BOSQICHMA BOSQICH</p>
            </li>
          </ul>
        </div>

        <button
          onClick={onScroll}
          className="scrollButton absolute flex items-center justify-center bottom-8 left-1/2  bg-blue-500  rounded-full p-2 cursor-pointer text-3xl text-white"
        >
          <FaArrowDown className="animate-bounce "/>
        </button>
      </section>
    </>
  );
};

export default AboutUs;

// <section className="bg-transparent py-25 ">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-10">
//     {/* Chap tomonda rasm */}
//     <div
//       className="lg:w-1/2"
//       data-aos="fade-up"
//       data-aos-delay={300}
//     >
//       <img
//         src={aboutusphoto}
//         alt="Sharkstroy"
//         className="rounded-lg shadow-lg"
//       />
//     </div>

//     {/* O'ng tomonda matn */}
//     <div className="lg:w-1/2">
//       <h2 className="text-3xl font-bold text-blue-800 mb-4 text-blue-600">
//         Biz haqimizda
//       </h2>
//       <p className="text-gray-700 text-lg mb-6 text-balck">
//         Biz 10 yildan beri qurilish sohasida faoliyat yuritib kelmoqdamiz.
//         Kompaniyamiz sanoat, turar joy, ofis va boshqa infratuzilma
//         obyektlarini qurish bo‘yicha keng tajribaga ega. Har bir loyiha —
//         bu biz uchun ishonch, sifat va mas’uliyat.
//       </p>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800">
//         <div
//           className="bg-white shadow-md rounded-lg p-4"
//           data-aos="fade-up"
//           data-aos-delay={300}
//         >
//           <h4 className="font-semibold text-blue-600">100+ Loyihalar</h4>
//           <p className="text-sm">
//             Yurtimiz bo‘ylab muvaffaqiyatli qurilgan obyektlar.
//           </p>
//         </div>
//         <div
//           className="bg-white shadow-md rounded-lg p-4"
//           data-aos="fade-up"
//           data-aos-delay={300}
//         >
//           <h4 className="font-semibold text-blue-600">
//             Professional jamoa
//           </h4>
//           <p className="text-sm">
//             Muhandislar, arxitektorlar va ustalardan iborat kuchli jamoa.
//           </p>
//         </div>
//         <div
//           className="bg-white shadow-md rounded-lg p-4"
//           data-aos="fade-up"
//           data-aos-delay={300}
//         >
//           <h4 className="font-semibold text-blue-600">
//             Innovatsion yondashuv
//           </h4>
//           <p className="text-sm">
//             Yangi texnologiyalar va barqaror yechimlardan foydalanamiz.
//           </p>
//         </div>
//         <div
//           className="bg-white shadow-md rounded-lg p-4"
//           data-aos="fade-up"
//           data-aos-delay={300}
//         >
//           <h4 className="font-semibold text-blue-600">
//             Mijozlar ishonchi
//           </h4>
//           <p className="text-sm">
//             Biz bilan ishlagan 300+ mijozlarimizning iliq fikrlari.
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

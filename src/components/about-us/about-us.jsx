import React from "react";
import aboutusphoto from "../../assets/images/about-us.jpg";
import TopBackground from "../../assets/images/TopBackground.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="bg-transparent py-30 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-10">
          {/* Chap tomonda rasm */}
          <div
            className="lg:w-1/2"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            <img
              src={aboutusphoto}
              alt="Sharkstroy"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* O'ng tomonda matn */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-blue-800 mb-4 text-blue-600">
              Biz haqimizda
            </h2>
            <p className="text-gray-700 text-lg mb-6 text-balck">
              Biz 10 yildan beri qurilish sohasida faoliyat yuritib kelmoqdamiz.
              Kompaniyamiz sanoat, turar joy, ofis va boshqa infratuzilma
              obyektlarini qurish bo‘yicha keng tajribaga ega. Har bir loyiha —
              bu biz uchun ishonch, sifat va mas’uliyat.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800">
              <div
                className="bg-white shadow-md rounded-lg p-4"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <h4 className="font-semibold text-blue-600">100+ Loyihalar</h4>
                <p className="text-sm">
                  Yurtimiz bo‘ylab muvaffaqiyatli qurilgan obyektlar.
                </p>
              </div>
              <div
                className="bg-white shadow-md rounded-lg p-4"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <h4 className="font-semibold text-blue-600">
                  Professional jamoa
                </h4>
                <p className="text-sm">
                  Muhandislar, arxitektorlar va ustalardan iborat kuchli jamoa.
                </p>
              </div>
              <div
                className="bg-white shadow-md rounded-lg p-4"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <h4 className="font-semibold text-blue-600">
                  Innovatsion yondashuv
                </h4>
                <p className="text-sm">
                  Yangi texnologiyalar va barqaror yechimlardan foydalanamiz.
                </p>
              </div>
              <div
                className="bg-white shadow-md rounded-lg p-4"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <h4 className="font-semibold text-blue-600">
                  Mijozlar ishonchi
                </h4>
                <p className="text-sm">
                  Biz bilan ishlagan 300+ mijozlarimizning iliq fikrlari.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;

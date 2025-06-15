import React from "react";

const pricingData = [
  {
    title: "High Tech",
    price: "250$/m²",
    features: [
      "Zamonaviy dizayn",
      "Energiya tejamkor tizimlar",
      "Yoritish va texnika avtomatizatsiyasi",
      "Keng ochiq makonlar",
    ],
    description:
      "High Tech uslubi — texnologiya va dizayn uyg‘unligi. U kuchli chiziqlar, ochiq makon va zamonaviy materiallar bilan ajralib turadi.",
  },
  {
    title: "Classic",
    price: "350$/m²",
    features: [
      "An’anaviy interyer",
      "Keng bezakli shift va devorlar",
      "Yuqori sifatli pardozlash",
      "Issiqlik izolatsiyasi",
    ],
    description:
      "Classic uslubi — nafislik va muvozanatga asoslangan. Bezaklar, xonalar simmetriyasi va shinamlik ustuvor hisoblanadi.",
  },
  {
    title: "Neo Classic",
    price: "220$/m²",
    features: [
      "Klassika va zamonaviylik uyg‘unligi",
      "Dekorativ elementlar",
      "Keng holl va mehmonxona",
      "Tabiiy materiallar",
    ],
    description:
      "Neo Classic uslubi klassik elementlarni zamonaviy tuzilish bilan uyg‘unlashtiradi. U zamonaviy uylar uchun klassik ruh beradi.",
  },
  {
    title: "Minimalism",
    price: "200$/m²",
    features: [
      "Oddiy va toza ko‘rinish",
      "Minimal mebel",
      "Och ranglar va yorug‘lik",
      "Kichik, lekin qulay joylar",
    ],
    description:
      "Minimalizm — ortiqcha elementlarsiz oddiylik. Tozaligi, soddaligi va qulayligi bilan ko‘pchilikka yoqadi.",
  },
];

const Plans = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-10">Tariflarimiz</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingData.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-xl  flex flex-col justify-between shadow-md p-6 hover:shadow-xl transition"
              // data-aos="fade-up"
              // data-aos-delay={index * 300}
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {plan.title}
              </h3>
              <p className="text-2xl font-bold text-gray-800 mb-4">
                {plan.price}
              </p>
              <ul className="text-gray-700 text-sm mb-6 space-y-2 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-500 mr-2">✔️</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition cursor-pointer">
                Tanlash
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;

import React from "react";

const pricingData = [
  {
    title: "Standart",
    price: "200$/m²",
    features: [
      "Bepul konsultatsya",
      "Bepul  o'lchovlar va 3d loyiha",
      "Mahalliy Mahsulotlar",
      "Tolov bosqichma bosqich",
      "Shartnoma asosida",
      "1.5 yil kafolat",
    ],
  },
  {
    title: "Classic",
    price: "250$/m²",
    features: [
      "Bepul konsultatsya",
      "Bepul  o'lchovlar va 3d loyiha",
      "chet el mahsulotlari 50% / 50%",
      "Tolov bosqichma bosqich",
      "Shartnoma asosida",
      "1.5 yil kafolat",
    ],
  },
  {
    title: "Vip",
    price: "350$/m²",
    features: [
 "Bepul konsultatsya",
 "Bepul  o'lchovlar va 3d loyiha",
 "chet el mahsuloti 100%",
 "Tolov bosqichma bosqich",
 "Shartnoma asosida",
 "1.5 yil kafolat",
    ],
  },
];

const Plans = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-10">Tariflarimiz</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {pricingData.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-xl  flex flex-col justify-between shadow-md p-6 hover:shadow-xl transition"
              data-aos="fade-up"
              data-aos-delay={index * 300}
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

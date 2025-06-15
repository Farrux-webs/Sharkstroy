import React from 'react';
import { FaShieldAlt, FaClock, FaTools, FaSmile } from 'react-icons/fa';

const guarantees = [
  {
    title: "Kafolatlangan sifat",
    icon: <FaShieldAlt className="text-3xl text-blue-600" />,
    description: "Har bir loyiha sifat nazorati ostida bo‘ladi va 5 yillik kafolat bilan topshiriladi."
  },
  {
    title: "O‘z vaqtida yakunlash",
    icon: <FaClock className="text-3xl text-blue-600" />,
    description: "Loyihalarni kechiktirmasdan, shartnomadagi muddatlarda yakunlaymiz."
  },
  {
    title: "Eng yaxshi materiallar",
    icon: <FaTools className="text-3xl text-blue-600" />,
    description: "Yuqori sifatli va ishonchli qurilish materiallaridan foydalanamiz."
  },
  {
    title: "Mijozdan mamnunlik",
    icon: <FaSmile className="text-3xl text-blue-600" />,
    description: "Har bir mijoz — biz uchun ustuvor. Fikr-mulohazalarga ochiqmiz va doim aloqadamiz."
  }
];

const Guarantees = () => {
  return (
    <section className="bg-transparent px-4">
      <div className="max-w-7xl mx-auto text-center cursor-pointer">
        <h2 className="text-3xl font-bold text-blue-800 mb-10">Bizning Kafolatlarimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guarantees.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 300}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition text-center"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-700">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guarantees;

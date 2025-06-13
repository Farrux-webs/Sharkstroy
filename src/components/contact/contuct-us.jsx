import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    phone: '',
    address: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Yuborilgan maʼlumot:', formData);
    alert("Murojaatingiz yuborildi!");
    // Bu yerda serverga yuborish kiritilishi mumkin
    setFormData({ fullname: '', phone: '', address: '', message: '' });
  };

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Biz bilan bog‘laning</h2>

        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-100 p-6 rounded-lg shadow-lg">

          <div>
            <label className="block mb-2 text-gray-700 font-medium">Ism va familiyangiz</label>
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Farrux Ravshanbekov"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700 font-medium">Telefon raqamingiz</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="+998 99 358 07 28"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700 font-medium">Manzilingiz</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Toshkent viloyati, Keles"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700 font-medium">Murojaat maqsadingiz</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Men uy qurilishi bo‘yicha maslahat olmoqchiman"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Yuborish
          </button>

        </form>
      </div>
    </section>
  );
};

export default ContactUs;

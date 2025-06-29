import React from "react";
import { Carousel } from "flowbite-react";
import galleryPhoto1 from "../../assets/images/IMG_8295.JPG";
import galleryPhoto2 from "../../assets/images/IMG_7925.JPG";
import galleryPhoto3 from "../../assets/images/IMG_8286.JPG";
import galleryPhoto4 from "../../assets/images/IMG_8292.JPG";
import galleryPhoto5 from "../../assets/images/IMG_8288.JPG";
import galleryPhoto6 from "../../assets/images/IMG_8290.JPG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const Galleries = [
  galleryPhoto1,
  galleryPhoto2,
  galleryPhoto3,
  galleryPhoto4,
  galleryPhoto5,
  galleryPhoto6,
];

const Gallery = () => {
  return (
    <section className="bg-white py-16 px-4">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
        Bizning ishlarimiz
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
        {Galleries.map((src, index) => (
          <div key={index}  data-aos="fade-up"
            data-aos-delay={index * 300} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="w-full h-60 object-cover transform hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Gallery;

"use client";

import React from "react";
import { Carousel } from "@material-tailwind/react";
import galleryPhoto1 from "../../assets/images/GalleryKitchen.jpg";
import galleryPhoto2 from "../../assets/images/GalleryBedroom.jpg";
import galleryPhoto3 from "../../assets/images/GalleryDiningroom.jpg";
import galleryPhoto4 from "../../assets/images/Galleryworkroom.jpg";
import galleryPhoto5 from "../../assets/images/GalleryBathroom.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

// const Galleries = [
//   galleryPhoto1,
//   galleryPhoto2,
//   galleryPhoto3,
//   galleryPhoto4,
//   galleryPhoto5,
// ];

const slides = [
  {
    src: galleryPhoto1,
    alt: "Mountain View",
    caption: "Explore the beauty of nature",
  },
  {
    src: galleryPhoto2,
    alt: "City at Night",
    caption: "Discover vibrant city life",
  },
  {
    src: galleryPhoto3,
    alt: "Tech World",
    caption: "Step into the world of technology",
  },
  {
    src: galleryPhoto4,
    alt: "Tech World",
    caption: "Step into the world of technology",
  },
  {
    src: galleryPhoto5,
    alt: "Tech World",
    caption: "Step into the world of technology",
  },
];

const Gallery = () => {
  return (
    <section className=" w-screen h-screen overflow-hidden mb-4">
      <Carousel
      autoplay
      loop
        transition={{ duration: 1 }}
        className="h-screen w-screen relative"
        prevArrow={({ handlePrev }) => (
          <button
            onClick={handlePrev}
            className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-50 cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faAngleLeft}
              className="w-6 h-6 text-gray-800 "
            />
          </button>
        )}
        nextArrow={({ handleNext }) => (
          <button
            onClick={handleNext}
            className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-50 cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faAngleRight}
              className="w-6 h-6 text-gray-800 "
            />
          </button>
        )}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`block w-3 h-3 rounded-full cursor-pointer transition-all ${
                  activeIndex === i ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        )}
      >

        {slides.map((slide, index) => (
          <div key={index} className="relative w-screen h-screen">
            <img
              src={slide.src}
              alt={slide.alt}
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="absolute inset-0 bg-black/40 z-10" />
            <div className="absolute bottom-20 left-10 z-20 text-white">
              <h2 className="text-2xl lg:text-4xl font-bold">{slide.caption}</h2>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Gallery;

// <div className="max-w-7xl mx-auto">
//   <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
//     Bizning ishlarimiz
//   </h2>

//   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
//     {Galleries.map((src, index) => (
//       <div key={index}  data-aos="fade-up"
//         data-aos-delay={index * 300} className="overflow-hidden rounded-lg shadow-lg">
//         <img
//           src={src}
//           alt={`Image ${index + 1}`}
//           className="w-full h-60 object-cover transform hover:scale-105 transition duration-300"
//         />
//       </div>
//     ))}
//   </div>
// </div>

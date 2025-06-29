import React from "react";
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
      <div id="gallery" class="relative w-full" data-carousel="slide">
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={galleryPhoto1}
              class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt=""
            />
          </div>
          <div
            class="hidden duration-700 ease-in-out"
            data-carousel-item="active"
          >
            <img
              src={galleryPhoto2}
              class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt=""
            />
          </div>
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={galleryPhoto3}
              class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt=""
            />
          </div>
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={galleryPhoto4}
              class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt=""
            />
          </div>
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={galleryPhoto5}
              class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt=""
            />
          </div>
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={galleryPhoto6}
              class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt=""
            />
          </div>
        </div>
        <button
          type="button"
          class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <FontAwesomeIcon icon={faAngleLeft} />
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <FontAwesomeIcon icon={faAngleRight} />
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
    </section>
  );
};

export default Gallery;

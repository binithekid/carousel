import React, { useState } from "react";
import Image1 from "../../public/slider1.jpg";
import Image2 from "../../public/slider2.jpg";
import Image3 from "../../public/slider3.jpg";
import Image4 from "../../public/slider4.jpg";
import { motion } from "framer-motion";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import { BsDot } from "react-icons/bs";

const images = [Image1, Image2, Image3, Image4];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <main className="py-40 px-14 overflow-hidden">
      <h1 className="text-3xl font-medium w-[65%]">
        We strive to leave a positive impact on both our environament &
        communities we serve
      </h1>
      <div className="relative flex flex-col items-center py-20">
        <div className="overflow-hidden w-[90rem] h-[20rem]">
          <motion.div
            className="flex"
            initial={{ x: 0 }}
            animate={{ x: -currentIndex * 320 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {images.map((image, index) => (
              <motion.div className="p-2 min-w-[30rem] h-[20rem]" key={index}>
                <img
                  src={image.src}
                  className="w-full h-full object-cover rounded"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="flex flex-row w-full justify-between mt-6">
          <button
            onClick={prevSlide}
            className="bg-gray-100 p-3 rounded-full shadow transition-all hover:opacity-70"
          >
            <HiOutlineArrowSmallLeft />
          </button>
          <div className="flex flex-row gap-1">
            {images.map((_, index) => (
              <BsDot
                onClick={() => setCurrentIndex(index)}
                key={index}
                className={`cursor-pointer text-2xl ${
                  index === currentIndex ? "text-gray-800" : "text-gray-400"
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="bg-gray-100 p-3 rounded-full shadow transition-all hover:opacity-70"
          >
            <HiOutlineArrowSmallRight />
          </button>
        </div>
      </div>
    </main>
  );
}

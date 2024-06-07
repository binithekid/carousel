import React from "react";
import { useState } from "react";
import Image1 from "../../public/image1.jpg";
import Image2 from "../../public/image2.jpg";
import Image3 from "../../public/image3.jpg";
import Image4 from "../../public/image4.jpg";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const TimelineItems = [
    {
      title: "01 Design Development",
      description:
        "We begin by understanding your unique style, preferences, and functional needs through an in-depth consultation. Together, we explore inspirations and discuss your vision for the space.",
      image: Image1,
    },
    {
      title: "02 Quality Check",
      description:
        "Using insights from our initial session, we conceptualize designs tailored to your aesthetic and lifestyle. Through sketches, mood boards, and 3D renderings, we refine ideas to create a cohesive vision.",
      image: Image2,
    },
    {
      title: "03 Installation",
      description:
        "With the design finalized, we guide you through selecting materials, furniture, and accessories that bring the vision to life. We ensure quality and style alignment every step of the way.",
      image: Image3,
    },
    {
      title: "04 Support",
      description:
        "Our expert team manages the installation process with meticulous attention to detail. From furniture arrangement to final décor placement, we ensure every element is executed flawlessly.",
      image: Image4,
    },
  ];

  return (
    <main className="w-full py-20 md:py-40 px-4 md:px-14 flex flex-col lg:flex-row gap-20">
      <div className="flex flex-col justify-between lg:w-1/2 w-full">
        <h1 className="font-medium text-2xl md:text-3xl">
          Four simple steps to bring your dream space to life
        </h1>
        <div className="mt-20">
          {TimelineItems.map((item, index) => (
            <div
              key={index}
              className={`mb-4 border-b pb-1 ${
                activeIndex === index ? "border-black" : "border-gray-200"
              } `}
            >
              <h1
                className={`cursor-pointer pb-2 font-light text-xl md:text-2xl ${
                  activeIndex === index ? "text-black" : "text-gray-400"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {item.title}
              </h1>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  height: activeIndex === index ? "auto" : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="text-sm pb-2 text-gray-500">{item.description}</p>
              </motion.div>
            </div>
          ))}
          <button className="mt-4 rounded-full bg-black text-white w-max px-4 py-2 text-sm transition-all hover:opacity-80">
            Learn More
          </button>
        </div>
      </div>
      <div className="lg:w-1/2 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Image
              className="rounded-lg"
              src={TimelineItems[activeIndex].image}
              alt="Timeline Image"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}

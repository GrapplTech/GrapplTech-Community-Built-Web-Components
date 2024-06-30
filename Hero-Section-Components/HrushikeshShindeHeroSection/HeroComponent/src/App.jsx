import { useState } from "react";
import "./App.css";
import img1 from "./assets/img1.webp";
import img2 from "./assets/img2.webp";
import img3 from "./assets/img3.webp";
import img4 from "./assets/img4.webp";
import img5 from "./assets/img5.webp";
import img6 from "./assets/img6.webp";
import { motion } from "framer-motion";
// images
const IMAGES = [
  {
    id: 0,
    imageSrc: img3,
    position: "center",
  },
  {
    id: 1,
    imageSrc: img2,
    position: "center",
  },
  {
    id: 2,
    imageSrc: img1,
    position: "center",
  },
  {
    id: 3,
    imageSrc: img4,
    position: "bottom",
  },
  {
    id: 4,
    imageSrc: img5,
    position: "bottom",
  },
  {
    id: 5,
    imageSrc: img6,
    position: "bottom",
  },
];

function App() {
  // carousal current index
  const [activeIndex, setactiveIndex] = useState(0);
  // framer variants
  const sliderVariants = {
    incoming: {
      scale: 1.5,
      opacity: 0,
    },
    active: { x: 0, scale: 1, opacity: 1 },
    exit: {
      scale: 1,
      opacity: 0,
    },
  };
  // framer text animation
  const textAnimation = {
    hidden: {
      y: 10,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
      opacity: 0.5,
    },
    visible: {
      y: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
      opacity: 1,
    },
  };
  return (
    <div className="h-[100dvh] w-full  flex flex-col items-center justify-center relative bg-black overflow-hidden">
      {/* title */}
      <motion.h1
        variants={textAnimation}
        initial="hidden"
        animate="visible"
        className="mb-4 text-5xl  text-center tracking-tight leading-none text-white  lg:text-7xl dark:text-black z-10 font-yeseva-one 	"
      >
        Welcome to Hills & Thrills
      </motion.h1>
      {/* subtitle */}
      <motion.p
        variants={textAnimation}
        initial="hidden"
        animate="visible"
        className=" text-xl text-center text-white lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 	z-10 font-quicksand px-5"
      >
        Let's hike through the less explored paths of Sahyadri⛰️{" "}
      </motion.p>
      {/* backdrop */}
      <div className="overlay absolute top-0 z-[1] left-0 w-full h-full bg-black opacity-30"></div>

      {IMAGES.map((value, index) =>
        index === activeIndex && (
          <>
            <motion.img
            key={value.id}
              src={value.imageSrc}
              className={`h-full w-full object-cover absolute z-0 top-0 ${`object-${value.position}`}`}
              alt={`Monsoon destination ${index + 1}`}
              variants={sliderVariants}
              initial="incoming"
              animate="active"
              exit="exit"
              transition={{
                duration: 2,
                ease: [0.56, 0.03, 0.12, 1.04],
              }}
              loading="lazy"
            />
          </>
        ) 
      )}
      {/* left button */}
      <button
        type="button"
        onClick={() => {
          setactiveIndex((prev) => (prev === 0 ? IMAGES.length - 1 : prev - 1));
        }}
        className="absolute bottom-0 left-0 z-10 px-6  py-4  rounded-tr-3xl backdrop-blur-md	bg-white/10"
        name="slider-left"
        aria-label="slider-left"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-7 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
          />
        </svg>
      </button>
      {/* right button */}
      <button
        onClick={() => {
          setactiveIndex((prev) => (prev === IMAGES.length - 1 ? 0 : prev + 1));
        }}
        type="button"
        className="absolute bottom-0 right-0 z-10 px-6  py-4  rounded-tl-3xl backdrop-blur-md	bg-white/10"
        name="slider-right"
        aria-label="slider-right"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-7 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </button>
    </div>
  );
}

export default App;

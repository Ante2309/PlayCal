import React, { useState } from "react";
import img1 from "../media/bg.jpg";
import img2 from "../media/bg2.jpg";
import img3 from "../media/bg3.jpg";

const HomeBody_3 = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [img1, img2, img3];

  const nextSlide = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="mt-2 bg-primary-0 p-8 rounded-lg shadow-md">
      <div className="p-8 flex flex-col lg:flex-row justify-center items-center md:space-x-10 space-y-5 bg-white rounded-lg shadow-md">
        <div className="flex flex-col font-teachers text-center lg:text-right space-y-3 lg:w-1/2">
          <h2 className="text-4xl md:text-7xl text-primary-0 font-bold">
            Najbolji tereni na dohvat ruke!
          </h2>
          <span className="text-md md:text-xl text-slate-400 font-thin">
            S PlayCal-om, pronalazak i rezervacija savršenog terena nikada nije
            bila lakša.
          </span>
        </div>
        <div className="flex flex-col shadow-xl rounded-lg p-10 space-y-5">
          <div className="h-full w-full overflow-hidden lg:w-full ">
            <img
              src={images[currentImage]}
              className="h-72 w-96 lg:h-96 lg:w-full object-cover rounded-lg"
            />
          </div>
          <div className=" flex justify-center items-center space-x-7">
            <button
              className=" p-3 rounded-full bg-primary-0 ease-in-out duration-300 delay-100 shadow-md hover:scale-110"
              onClick={prevSlide}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
                />
              </svg>
            </button>
            <button
              className="p-3 rounded-full bg-primary-0 ease-in-out duration-300 delay-100 shadow-md hover:scale-110"
              onClick={nextSlide}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBody_3;

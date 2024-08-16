import React from "react";
import { Link } from "react-router-dom";
import img_rasadnik from "./media/rasadnik.png";
import Res_Heading from "../../../../../../reservation/components/Res_Heading";

const Rasadnik = () => {
  const fieldData = {
    heading: "Nogometni Tereni Rasadnik Vidici",
    name: "Teren br. 1",
    price: "24€",
    description: "*Teren pogodan za igru 4x4",
    image: {},
  };

  return (
    <div className="w-full h-full">
      <Res_Heading />
      <div className="bg-white rounded-lg shadow-md font-teachers p-10">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-slate-400 font-semibold text-4xl">
            {fieldData.heading}
          </h1>
          <img className="w-52 mt-3 mb-5" src={img_rasadnik} alt="Bilice" />
          <div className=" text-white">
            <div className="p-10 bg-slate-600 rounded-lg shadow-md">
              <div className="flex flex-col justify-center items-center">
                <h2 className="font-semibold">{fieldData.name}</h2>
                <img className="w-52 h-44 object-cover" />
                <span className="text-xs my-2">{fieldData.description}</span>
                <span>
                  Cijena termina:
                  <span className=" font-extrabold"> {fieldData.price}</span>
                </span>
                <Link to="/reservation" state={{ field: fieldData }}>
                  <button className="bg-teal-400 py-2 px-12 w-full rounded-sm hover:bg-teal-300">
                    Rezerviraj teren
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Link to="/pitches">
          <button className="flex items-center text-xs text-slate-400 hover:text-red-400 mt-7">
            <svg
              className="w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="48"
                d="M328 112L184 256l144 144"
              />
            </svg>
            Natrag
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Rasadnik;

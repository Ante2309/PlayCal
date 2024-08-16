import React from "react";
import { Link } from "react-router-dom";
import img_bilice from "./media/bilice.png";
import Res_Heading from "../../../../../../reservation/components/Res_Heading";

const Bilice = () => {
  const fieldData = {
    heading: "Nogometni Tereni Bilice",
    name: "Teren br. 1",
    price: "24€",
    description: "*Teren pogodan za igru 4x4",
    image: { img_bilice },
  };

  return (
    <div>
      <Res_Heading />
      <div className="bg-white p-10 rounded-lg shadow-md w-full h-full pb-8 font-teachers">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-slate-400 font-semibold text-4xl">
            {fieldData.heading}
          </h1>
          <img className="w-52 mt-3 mb-5" src={img_bilice} alt="Bilice" />
          <div className="text-white">
            <div className="p-10 bg-slate-600 rounded-lg shadow-md">
              <div className="flex flex-col justify-center items-center">
                <h2 className="font-semibold">{fieldData.name}</h2>
                <img className="w-52 h-44 object-cover" />
                <span className="text-xs my-2">{fieldData.description}</span>
                <span>
                  Cijena termina:
                  <span className="font-extrabold"> {fieldData.price}</span>
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="48"
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

export default Bilice;

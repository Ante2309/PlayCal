import React from "react";
import { Link } from "react-router-dom";
import img_rasadnik from "./media/rasadnik.png";
import Res_Heading from "../../../../../../reservation/components/Res_Heading";
import pitch from "../../../media/pitch2.jpg";

const Rasadnik = () => {
  const fieldData = {
    heading: "Nogometni Tereni Rasadnik Vidici",
    name: "Teren br. 1",
    price: "24€",
    description: "*Teren pogodan za igru 4x4",
    image: pitch,
  };

  return (
    <div className="font-teachers bg-slate-200 min-h-screen">
      <Res_Heading />
      <div className="mx-auto p-8 bg-white rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-slate-700 font-bold text-4xl mb-4">
            {fieldData.heading}
          </h1>
          <img
            className="w-60 mx-auto mb-6"
            src={img_rasadnik}
            alt="Rasadnik"
          />
        </div>
        <div className="bg-slate-700 text-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <img
            src={fieldData.image}
            alt={fieldData.name}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-3">{fieldData.name}</h2>
            <p className="text-sm mb-4">{fieldData.description}</p>
            <p className="text-lg font-bold mb-4">
              Cijena termina:{" "}
              <span className="font-extrabold">{fieldData.price}</span>
            </p>
            <Link to="/reservation" state={{ field: fieldData }}>
              <button className="bg-teal-500 hover:bg-teal-400 text-white py-2 px-6 rounded-md transition-colors">
                Rezerviraj teren
              </button>
            </Link>
          </div>
        </div>
        <Link to="/pitches">
          <button className="flex items-center text-xs text-slate-600 hover:text-red-500 mt-8">
            <svg
              className="w-5 h-5 mr-2"
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

export default Rasadnik;

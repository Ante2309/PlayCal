import React from "react";
import { Link } from "react-router-dom";
import img1 from "./media/mandalina.png";
import pitch_1 from "../../../media/pitch4.jpg";
import pitch_2 from "./media/pitch_2.jpg";
import Res_Heading from "../../../../../../reservation/components/Res_Heading";

const Mandalina = () => {
  const fieldData = {
    field_1: {
      heading: "Nogometni tereni Mandalina",
      name: "Teren br.1",
      price: "36€",
      description: "*Teren pogodan za igru 5+1",
      image: pitch_1,
    },
    field_2: {
      heading: "Nogometni tereni Mandalina",
      name: "Teren br.2",
      price: "18€",
      description: "*Teren pogodan za igru 3x3",
      image: pitch_2,
    },
  };

  return (
    <div className="font-teachers bg-slate-200 min-h-screen">
      <Res_Heading />
      <div className="mx-auto p-8 bg-white rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-slate-700 font-bold text-4xl mb-4">
            Nogometni tereni Mandalina
          </h1>
          <img className="w-52 mx-auto" src={img1} alt="Mandalina Logo" />
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8">
          {Object.keys(fieldData).map((key) => {
            const field = fieldData[key];
            return (
              <div
                key={key}
                className="bg-slate-700 text-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
              >
                <img
                  src={field.image}
                  alt={field.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{field.name}</h2>
                  <p className="text-sm mb-3">{field.description}</p>
                  <p className="text-lg font-bold mb-4">
                    Cijena termina: <span>{field.price}</span>
                  </p>
                  <Link to="/reservation" state={{ field }}>
                    <button className="bg-teal-500 hover:bg-teal-400 text-white py-2 px-4 rounded-md transition-colors">
                      Rezerviraj teren
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <Link to="/pitches">
          <button className="flex items-center text-slate-600 hover:text-red-500 mt-8">
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

export default Mandalina;

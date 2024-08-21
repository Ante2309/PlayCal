import React from "react";
import { Link } from "react-router-dom";
import img_gool from "./media/gool.png";
import pitch from "../../../media/pitch1.jpg";
import pitch_2 from "./media/pitch_2.jpg";
import pitch_3 from "./media/pitch_3.jpg";
import Res_Heading from "../../../../../../reservation/components/Res_Heading";

const Gool = () => {
  const fieldData = {
    field_1: {
      heading: "Nogometni tereni Gool Šubićevac",
      name: "Teren br.1",
      price: "24€",
      description: "*Teren pogodan za igru 4x4",
      image: pitch,
    },
    field_2: {
      heading: "Nogometni tereni Gool Šubićevac",
      name: "Teren br.2",
      price: "24€",
      description: "*Teren pogodan za igru 4x4",
      image: pitch_2,
    },
    field_3: {
      heading: "Nogometni tereni Gool Šubićevac",
      name: "Teren br.3",
      price: "18€",
      description: "*Teren pogodan za igru 3x3",
      image: pitch_3,
    },
  };

  return (
    <div className="font-teachers bg-slate-200 min-h-screen">
      <Res_Heading />
      <div className="mx-auto h-full p-8 bg-white rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-slate-700 font-bold text-4xl mb-4">
            Nogometni tereni Gool Šubićevac
          </h1>
          <img className="w-52 mx-auto" src={img_gool} alt="Gool Logo" />
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
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

export default Gool;

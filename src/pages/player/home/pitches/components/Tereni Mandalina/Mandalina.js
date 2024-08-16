import React from "react";
import { Link } from "react-router-dom";
import img1 from "./media/mandalina.png";
import Res_Heading from "../../../../../../reservation/components/Res_Heading";
const Mandalina = () => {
  const fieldData = {
    field_1: {
      heading: "Nogometni tereni Mandalina",
      name: "Teren br.1",
      price: "36€",
      description: "*Teren pogodan za igru 5+1",
      image: {},
    },
    field_2: {
      heading: "Nogometni tereni Mandalina",
      name: "Teren br.2",
      price: "18€",
      description: "*Teren pogodan za igru 3x3",
      image: {},
    },
  };

  return (
    <div>
      <Res_Heading />
      <div className="bg-white p-10 rounded-lg shadow-md font-teachers w-full h-full pb-8">
        <div className="flex flex-col justify-center items-center">
          <h1 className=" text-slate-400 font-semibold text-4xl">
            Nogometni Tereni Mandalina
          </h1>
          <img className="w-52 mt-3 mb-5" src={img1} />
          <div className="grid grid-cols-2 gap-10 text-white">
            <div className="p-10 bg-slate-600 rounded-lg shadow-md">
              <div className="flex flex-col justify-center items-center">
                <h2 className="font-semibold">{fieldData.field_1.name}</h2>
                <img className="w-52 h-44 object-cover" />
                <span className="text-xs my-2">
                  {fieldData.field_1.description}
                </span>
                <span>
                  Cijena termina:
                  <span className=" font-extrabold">
                    {" "}
                    {fieldData.field_1.price}
                  </span>
                </span>
                <Link to="/reservation" state={{ field: fieldData.field_1 }}>
                  <button className=" bg-teal-400 py-2 px-10 rounded-sm hover:bg-teal-300">
                    Rezerviraj teren
                  </button>
                </Link>
              </div>
            </div>
            <div className="p-10 bg-slate-600 rounded-lg shadow-md">
              <div className="flex flex-col justify-center items-center">
                <h2 className="font-semibold">{fieldData.field_2.name}</h2>
                <img className="w-52 h-44 object-cover" />
                <span className="text-xs my-2">
                  {fieldData.field_2.description}
                </span>
                <span>
                  Cijena termina:
                  <span className=" font-extrabold">
                    {" "}
                    {fieldData.field_2.price}
                  </span>
                </span>
                <Link to="/reservation" state={{ field: fieldData.field_2 }}>
                  <button className=" bg-teal-400 py-2 px-10 rounded-sm hover:bg-teal-300">
                    Rezerviraj teren
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Link to="/pitches">
          <button className=" flex items-center text-xs text-slate-400 hover:text-red-400 mt-7">
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
export default Mandalina;

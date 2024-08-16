import React from "react";
import { Link } from "react-router-dom";
import img_gool from "./media/gool.png";
import Res_Heading from "../../../../../../reservation/components/Res_Heading";

const Gool = () => {
  const fieldData = {
    field_1: {
      heading: "Nogometni tereni Gool Šubićevac",
      name: "Teren br.1",
      price: "24€",
      description: "*Teren pogodan za igru 4x4",
      image: { img_gool },
    },
    field_2: {
      heading: "Nogometni tereni Gool Šubićevac",
      name: "Teren br.2",
      price: "24€",
      description: "*Teren pogodan za igru 4x4",
      image: { img_gool },
    },
    field_3: {
      heading: "Nogometni tereni Gool Šubićevac",
      name: "Teren br.3",
      price: "18€",
      description: "*Teren pogodan za igru 3x3",
      image: { img_gool },
    },
  };
  return (
    <div>
      <Res_Heading />
      <div className="font-teachers bg-white p-10 rounded-md shadow-md h-full w-full">
        <div className="flex items-center justify-center">
          <div className="flex flex-col justify-center items-center">
            <h1 className=" text-slate-400 font-semibold text-4xl">
              Nogometni tereni Gool Šubićevac
            </h1>
            <img className="w-44 mt-3 mb-5" src={img_gool} />
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 text-white">
              <div className="p-10 bg-slate-600 rounded-lg shadow-md md:col-span-2 lg:col-span-1">
                <div className="flex flex-col justify-center items-center">
                  <h2 className="font-semibold">{fieldData.field_1.name}</h2>
                  <img className="w-52 h-44 object-cover" />
                  <span className="text-xs my-2">
                    {fieldData.field_1.description}
                  </span>
                  <span>
                    Cijena termina:
                    <span className=" font-extrabold">
                      {fieldData.field_1.price}
                    </span>
                  </span>
                  <Link to="/reservation" state={{ field: fieldData.field_1 }}>
                    <button className=" bg-teal-400 px-9 py-3 rounded-sm hover:bg-teal-300 text-md ">
                      Rezerviraj teren
                    </button>
                  </Link>
                </div>
              </div>
              <div className="p-10 bg-slate-600 rounded-lg shadow-md">
                <div className="flex flex-col justify-center items-center">
                  <h2 className="font-semibold">{fieldData.field_2.name}</h2>
                  <img className="w-48 h-44 object-cover" />
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
                    <button className=" bg-teal-400 px-9 py-3 rounded-sm hover:bg-teal-300 text-md">
                      Rezerviraj teren
                    </button>
                  </Link>
                </div>
              </div>
              <div className="p-10 bg-slate-600 rounded-lg shadow-md">
                <div className="flex flex-col justify-center items-center">
                  <h2 className="font-semibold">{fieldData.field_3.name}</h2>
                  <img className="w-52 h-44 object-cover" />
                  <span className="text-xs my-2">
                    {fieldData.field_3.description}
                  </span>
                  <span>
                    Cijena termina:
                    <span className=" font-extrabold">
                      {" "}
                      {fieldData.field_3.price}
                    </span>
                  </span>
                  <Link to="/reservation" state={{ field: fieldData.field_3 }}>
                    <button className="bg-teal-400 px-9 py-3 rounded-sm hover:bg-teal-300 text-md">
                      Rezerviraj teren
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link to="/pitches">
          <button className=" flex items-center text-xs text-slate-400 hover:text-red-400 mt-7">
            <svg
              className="w-4"
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
export default Gool;

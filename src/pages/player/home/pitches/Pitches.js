import React from "react";
import godimento from "../media/pitch1.jpg";
import rasadnik from "../media/pitch2.jpg";
import bilice from "../media/pitch3.jpg";
import mandalina from "../media/pitch4.jpg";
import njivice from "./components/Tereni Njivice/media/mand.jpg";
import { Link } from "react-router-dom";
import Footer from "../../../head-foot/Footer";
import Res_Heading from "../../../../reservation/components/Res_Heading";

const Pitches = () => {
  return (
    <div className="mb-2">
      <Res_Heading />
      <div className="flex justify-center uppercase text-4xl text-slate-600 italic bg-white px-10 py-4 my-2 rounded-lg shadow-lg">
        <h1 className="border-b-4 border-slate-400 pb-2">Popis terena</h1>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Tereni 'Gool' Godimento",
              imgSrc: godimento,
              hours: "Od 15h do 23h",
              price: "od 18€ do 24€",
              fields: 3,
              link: "/gool",
            },
            {
              name: "Tereni Rasadnik Vidici",
              imgSrc: rasadnik,
              hours: "Od 16h do 22h",
              price: "24€",
              fields: 1,
              link: "/rasadnik",
            },
            {
              name: "Tereni Bilice",
              imgSrc: bilice,
              hours: "Od 16h do 23h",
              price: "32€",
              fields: 1,
              link: "/bilice",
            },
            {
              name: "Tereni Mandalina",
              imgSrc: mandalina,
              hours: "Od 15h do 23h",
              price: "od 18€ do 32€",
              fields: 2,
              link: "/mandalina",
            },
            {
              name: "Tereni Njivice",
              imgSrc: njivice,
              hours: "Od 16h do 22h",
              price: "36€",
              fields: 1,
              link: "/njivice",
            },
          ].map((pitch, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 transition-transform transform hover:scale-105"
            >
              <img
                className="w-full h-60 object-cover"
                src={pitch.imgSrc}
                alt={pitch.name}
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-slate-700 mb-3">
                  {pitch.name}
                </h2>
                <p className="text-slate-500 mb-2">
                  Vrijeme igranja: {pitch.hours}
                </p>
                <p className="text-slate-500 mb-2">
                  Cijena po terminu:{" "}
                  <span className="font-semibold">{pitch.price}</span>
                </p>
                <p className="text-slate-500 mb-4">
                  U ponudi broj terena:{" "}
                  <span className="font-semibold">{pitch.fields}</span>
                </p>
                <Link
                  to={pitch.link}
                  className="block text-center bg-primary-0 text-white font-semibold py-2 px-4 rounded-md hover:bg-teal-300 transition duration-300"
                >
                  Pregledaj terene
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pitches;

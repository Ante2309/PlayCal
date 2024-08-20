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
      <div className=" flex justify-center uppercase text-4xl text-slate-400 italic bg-white px-10 py-3 my-2 rounded-md shadow-md">
        <h1 className="border-b border-slate-400">Popis terena</h1>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-around">
        <div className=" grid md:grid-cols-3 gap-4 lg:gap-10 mb-2">
          <div className="bg-white flex flex-col shadow-md rounded-md border p-10 md:col-span-2">
            <h2 className="line-clamp-1 font-semibold text-slate-400 text-xl mb-3">
              Tereni "Gool" Godimento
            </h2>
            <img
              className="w-full h-72 object-cover rounded-t-lg"
              src={godimento}
            />
            <span className="text-slate-400 text-md font-thin my-3">
              Vrijeme igranja: Od 15h do 23h
            </span>
            <span className="text-slate-400 text-md font-thin mb-3">
              Cijena po terminu: od
              <span className="text-lg font-semibold"> 18€</span> do
              <span className="text-lg font-semibold"> 24€</span>
            </span>
            <span className="text-slate-400 text-md font-thin">
              U ponudi broj terena:{" "}
              <span className="text-lg font-semibold">3</span>
            </span>
            <Link
              to="/gool"
              className="flex justify-center uppercase p-3 bg-primary-0 text-white font-bold text-sm rounded-b-lg hover:bg-teal-300 mt-2"
            >
              pregledaj terene
            </Link>
          </div>
          <div className="bg-white flex flex-col shadow-md rounded-md border p-10">
            <h2 className="line-clamp-1 font-semibold text-slate-400 text-xl mb-3">
              Tereni Rasadnik Vidici
            </h2>
            <img
              className="w-full h-72 object-cover rounded-t-lg"
              src={rasadnik}
            />
            <span className="text-slate-400 text-md font-thin my-3">
              Vrijeme igranja: Od 16h do 22h
            </span>
            <span className="text-slate-400 text-md font-thin mb-3">
              Cijena po terminu:
              <span className="text-lg font-semibold"> 24€</span>
            </span>
            <span className="text-slate-400 text-md font-thin">
              U ponudi broj terena:{" "}
              <span className="text-lg font-semibold">1</span>
            </span>
            <Link
              to="/rasadnik"
              className="flex justify-center uppercase p-3 bg-primary-0 text-white font-bold text-sm rounded-b-lg hover:bg-teal-300 mt-2"
            >
              pregledaj terene
            </Link>
          </div>
          <div className="bg-white flex flex-col shadow-md rounded-md border p-10">
            <h2 className=" font-semibold text-slate-400 text-xl mb-3">
              Tereni Bilice
            </h2>
            <img
              className="w-full h-72 object-cover rounded-t-lg"
              src={bilice}
            />
            <span className="text-slate-400 text-md font-thin my-3">
              Vrijeme igranja: Od 16h do 23h
            </span>
            <span className="text-slate-400 text-md font-thin mb-3">
              Cijena po terminu:
              <span className="text-lg font-semibold"> 32€</span>
            </span>
            <span className="text-slate-400 text-md font-thin">
              U ponudi broj terena:{" "}
              <span className="text-lg font-semibold">1</span>
            </span>
            <Link
              to="/bilice"
              className="flex justify-center uppercase p-3 bg-primary-0 text-white font-bold text-sm rounded-b-lg hover:bg-teal-300 mt-2"
            >
              pregledaj terene
            </Link>
          </div>
          <div className="bg-white flex flex-col shadow-md rounded-md border p-10">
            <h2 className=" font-semibold text-slate-400 text-xl mb-3">
              Tereni Mandalina
            </h2>
            <img
              className="w-full h-72 object-cover rounded-t-lg"
              src={mandalina}
            />
            <span className="text-slate-400 text-md font-thin my-3">
              Vrijeme igranja: Od 15h do 23h
            </span>
            <span className="line-clamp-1 text-slate-400 text-md font-thin mb-3">
              Cijena po terminu: od
              <span className="text-lg font-semibold"> 18€</span> do
              <span className="text-lg font-semibold"> 32€</span>
            </span>
            <span className="text-slate-400 text-md font-thin">
              U ponudi broj terena:{" "}
              <span className="text-lg font-semibold">2</span>
            </span>
            <Link
              to="/mandalina"
              className="flex justify-center uppercase p-3 bg-primary-0 text-white font-bold text-sm rounded-b-lg hover:bg-teal-300 mt-2"
            >
              pregledaj terene
            </Link>
          </div>
          <div className="bg-white flex flex-col shadow-md rounded-md border p-10">
            <h2 className=" font-semibold text-slate-400 text-xl mb-3">
              Tereni Njivice
            </h2>
            <img
              className="w-full h-72 object-cover rounded-t-lg"
              src={njivice}
            />
            <span className="text-slate-400 text-md font-thin my-3">
              Vrijeme igranja: Od 16h do 22h
            </span>
            <span className="text-slate-400 text-md font-thin mb-3">
              Cijena po terminu:
              <span className="text-lg font-semibold"> 36€</span>
            </span>
            <span className="text-slate-400 text-md font-thin">
              U ponudi broj terena:{" "}
              <span className="text-lg font-semibold">1</span>
            </span>
            <Link
              to="/njivice"
              className="flex justify-center uppercase p-3 bg-primary-0 text-white font-bold text-sm rounded-b-lg hover:bg-teal-300 mt-2"
            >
              pregledaj terene
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pitches;

import React from "react";
import ball from "../media/football.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" mt-2 font-teachers">
      <div className="bg-white p-8 rounded-xl shadow-md ">
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <img src={ball} className=" w-full md:w-1/3 rounded-lg" />
          <div className="mt-4 md:mt-0 text-center md:text-left ">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-0">
              Rezervirajte teren brzo i lako!
            </h1>
            <p className="text-md md:text-xl text-slate-400 mt-4 font-thin">
              PlayCal omogućava jednostavnu i brzu rezervaciju nogometnih
              terena, tako da se vi možete fokusirati na igru.
            </p>
            <Link to="/pitches">
              <button className="bg-primary-0 text-white font-semibold px-6 py-3 rounded-lg mt-6 ease-in-out duration-300 delay-100 hover:scale-110 font-teachers mb-3">
                Izaberi teren
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

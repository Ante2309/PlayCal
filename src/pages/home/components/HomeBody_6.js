import React from "react";
import { Link } from "react-router-dom";

const HomeBody_6 = () => {
  return (
    <div className=" bg-white rounded-lg shadow-md font-teachers mt-2 mb-2">
      <Link to="/pitches">
        <button className=" bg-primary-0 p-10 w-full rounded-lg hover:bg-teal-300 text-white text-3xl font-semibold uppercase italic">
          Počni igrati sada!
        </button>
      </Link>
    </div>
  );
};

export default HomeBody_6;

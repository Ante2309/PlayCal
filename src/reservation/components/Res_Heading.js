import React, { useState } from "react";
import logo from "../../../src/pages/head-foot/media/NOGOMETNI.png";
import { Link } from "react-router-dom";
import { useAuth } from "../../firebase/context/AuthContext"; // Provjerite putanju do vašeg AuthProvider
import { signOut } from "firebase/auth"; // Funkcija za odjavu iz Firebase-a
import { auth } from "../../firebase/firebase"; // Vaš Firebase auth

const Res_Heading = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State za otvaranje/skrivanje izbornika
  const { user } = useAuth(); // Dohvat trenutnog korisnika iz AuthContext

  const toggleProfileMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log("Korisnik je odjavljen");
    } catch (error) {
      console.error("Greška pri odjavi:", error);
    }
  };

  return (
    <div className="sticky top-0 z-50 flex bg-white rounded-md mb-2 justify-between items-center shadow-md w-full px-10">
      <img className="w-32" src={logo} alt="Logo" />
      <Link
        path
        to="/pitches"
        className=" text-lg text-primary-0 py-2 px-5 hover:bg-primary-0 hover:text-white rounded-md ease-in-out duration-300 delay-150"
      >
        Tereni
      </Link>
      <Link
        path
        to="/player"
        className=" text-lg text-primary-0 py-2 px-5 hover:bg-primary-0 hover:text-white rounded-md ease-in-out duration-300 delay-150"
      >
        Moj profil
      </Link>
      <div className="flex items-center space-x-2">
        {user ? (
          <div className="relative">
            <button
              className="rounded-full hover:text-white hover:scale-105 ease-in-out duration-300 delay-100 shadow-md"
              onClick={toggleProfileMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#2dd4bf"
                className="w-10"
              >
                <path
                  fillRule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {menuOpen && (
              <div className="absolute font-teachers right-0 mt-2 w-48 bg-white shadow-md border border-primary-0 rounded-md z-50">
                <div className="px-4 py-2 text-primary-0">
                  <p className="font-semibold text-lg">{`Pozdrav, ${
                    user.displayName || "Korisnik"
                  }`}</p>
                  <Link
                    to="" // Putanja do stranice profila
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Moj Profil
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
                  >
                    Odjava
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex space-x-2">
            <Link to="/login">
              <button className="border-2 border-primary-0 hover:bg-primary-0 p-2 rounded-full ease-in-out duration-300 delay-100 shadow-md hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#2dd4bf"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                  />
                </svg>
              </button>
            </Link>
            <Link to="/registration">
              <button className="shadow-md bg-primary-0 text-white py-2 px-5 rounded-lg ease-in-out duration-300 delay-100 hover:scale-110 text-lg">
                Registracija
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Res_Heading;

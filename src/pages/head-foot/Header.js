import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import logo from "./media/NOGOMETNI.png";
import { useAuth } from "../../firebase/context/AuthContext"; // Provjerite putanju do vašeg AuthProvider
import { signOut } from "firebase/auth"; // Funkcija za odjavu iz Firebase-a
import { auth } from "../../firebase/firebase"; // Vaš Firebase auth

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State za otvaranje/skrivanje izbornika
  const { user } = useAuth(); // Dohvat trenutnog korisnika iz AuthContext

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
    <header className="bg-white shadow-md rounded-md w-full px-10 sticky top-0">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <button
            className="md:hidden p-2 rounded-md focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#2dd4bf"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <Link to="/">
            <button>
              <img
                className="lg:w-40 w-32 ml-4 md:ml-0"
                src={logo}
                alt="Logo"
              />
            </button>
          </Link>
        </div>
        <nav className="hidden md:flex md:items-center space-x-5 font-teachers md:text-xl lg:text-2xl text-primary-0">
          <Link
            to="/"
            className="px-5 py-2 hover:bg-primary-0 hover:text-white ease-in-out duration-300 delay-100 rounded-lg"
          >
            Naslovna
          </Link>
          <Link
            to="/about"
            className="px-5 py-2 hover:bg-primary-0 hover:text-white ease-in-out duration-300 delay-100 rounded-lg"
          >
            O nama
          </Link>
          <Link
            to="/contact"
            className="px-5 py-2 hover:bg-primary-0 hover:text-white ease-in-out duration-300 delay-100 rounded-lg"
          >
            Kontakt
          </Link>
        </nav>
        <div className="flex items-center space-x-2">
          {user ? (
            <div className="relative">
              <button
                className=" rounded-full hover:text-white hover:scale-105 ease-in-out duration-300 delay-100 shadow-md"
                onClick={toggleProfileMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#2dd4bf"
                  className="w-10"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              {menuOpen && (
                <div className="absolute font-teachers right-0 mt-2 w-48 bg-white shadow-md border border-primary-0 rounded-md">
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
                <button className="border-2 border-primary-0 p-2 rounded-full ease-in-out duration-300 delay-100 shadow-md hover:scale-110">
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
      <div
        className={`md:hidden absolute rounded-md top-24 bg-white shadow-md w-44 border-2 border-primary-0 transition-all duration-300 ease-in-out transform ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <nav className="flex flex-col p-2 font-teachers text-2xl text-primary-0">
          <Link
            to="/"
            className="px-5 py-2 hover:bg-primary-0 hover:text-white ease-in-out duration-300 delay-100 rounded-lg"
          >
            Naslovna
          </Link>
          <Link
            to="/about"
            className="px-5 py-2 hover:bg-primary-0 hover:text-white ease-in-out duration-300 delay-100 rounded-lg"
          >
            O nama
          </Link>
          <Link
            to="/contact"
            className="px-5 py-2 hover:bg-primary-0 hover:text-white ease-in-out duration-300 delay-100 rounded-lg"
          >
            Kontakt
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

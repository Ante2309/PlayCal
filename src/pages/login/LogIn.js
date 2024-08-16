import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom"; // Dodajte useNavigate hook
import { auth } from "../../firebase/firebase"; // Uvezite vašu Firebase auth instancu
import logo from "./media/NOGOMETNI.png"; // Pretpostavka da koristite ovaj logo

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Inicijalizirajte useNavigate hook

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Korisnik prijavljen:", userCredential.user);

      // Preusmjeravanje nakon uspješne prijave
      navigate("/pitches");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className=" flex w-screen h-screen items-center justify-center">
      <div className=" flex flex-col justify-center items-center bg-white rounded-lg shadow-md p-8">
        <div className="w-52">
          <img src={logo} alt="Logo" />
        </div>
        <div className=" space-y-5">
          <div className=" flex flex-col space-y-2">
            <span className=" text-slate-400">Email:</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-x border-b border-primary-0"
            />
          </div>
          <div className=" flex flex-col space-y-2">
            <span className=" text-slate-400">Lozinka:</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-x border-b border-primary-0"
            />
            <button className=" text-xs text-slate-400 hover:text-primary-0">
              Zaboravili ste lozinku?
            </button>
            <div className="flex flex-row justify-center text-xs text-slate-400 space-x-1">
              <p>Nemate račun?</p>
              <Link path to="/registration" className=" hover:text-primary-0">
                Registriraj se!
              </Link>
            </div>
          </div>
        </div>
        <button
          onClick={handleLogin}
          className=" mt-7 py-3 px-10 bg-primary-0 rounded-lg shadow-md text-white font-semibold ease-in-out duration-300 delay-100 hover:scale-110"
        >
          Prijava
        </button>
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default LogIn;

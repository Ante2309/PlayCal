import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Header from "../head-foot/Header";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [birthdate, setBirthdate] = useState(new Date());
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleRegistration = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        firstName: firstName,
        lastName: lastName,
        email: email,
        gender: gender,
        birthdate: birthdate,
        displayName: `${firstName} ${lastName}`,
      });

      console.log("Korisnik registriran i podaci spremljeni u Firestore");

      navigate("/pitches");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <Header />
      <div className="w-full h-screen flex justify-center items-center bg-slate-200">
        <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-primary-0 mb-2">
              Registracija
            </h1>
            <p className="text-gray-600 mb-6">
              Molimo ispunite sve podatke kako biste se registrirali.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex flex-col">
              <label className="text-gray-700 text-lg mb-2">Ime:</label>
              <input
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary-0 transition duration-200"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Unesite ime"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 text-lg mb-2">Prezime:</label>
              <input
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary-0 transition duration-200"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Unesite prezime"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 text-lg mb-2">Email:</label>
              <input
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary-0 transition duration-200"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Unesite email"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 text-lg mb-2">Lozinka:</label>
              <input
                type="password"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary-0 transition duration-200"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Unesite lozinku"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 text-lg mb-2">
                Datum rođenja:
              </label>
              <input
                type="date"
                value={birthdate.toISOString().split("T")[0]}
                onChange={(e) => setBirthdate(new Date(e.target.value))}
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary-0 transition duration-200"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 text-lg mb-2">Spol:</label>
              <div className="flex space-x-6">
                <label className="flex items-center">
                  <input
                    className="mr-2"
                    type="radio"
                    name="gender"
                    value="muški"
                    checked={gender === "muški"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  Muški
                </label>
                <label className="flex items-center">
                  <input
                    className="mr-2"
                    type="radio"
                    name="gender"
                    value="ženski"
                    checked={gender === "ženski"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  Ženski
                </label>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleRegistration}
                className="px-6 py-3 bg-primary-0 text-white font-semibold rounded-lg shadow-md hover:bg-primary-100 transition duration-200"
              >
                Registracija
              </button>
            </div>
            {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;

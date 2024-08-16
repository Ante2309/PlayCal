import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase/firebase"; // Firebase auth i Firestore instance
import { doc, setDoc } from "firebase/firestore"; // Firestore funkcije
import { useNavigate } from "react-router-dom"; // Importanje useNavigate

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [birthdate, setBirthdate] = useState(new Date());
  const [error, setError] = useState(null);

  const navigate = useNavigate(); // Inicijaliziraj useNavigate

  const handleRegistration = async () => {
    try {
      // Kreiraj korisnika u Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Spremi dodatne podatke u Firestore
      await setDoc(doc(db, "users", user.uid), {
        firstName: firstName,
        lastName: lastName,
        email: email,
        gender: gender,
        birthdate: birthdate,
      });

      console.log("Korisnik registriran i podaci spremljeni u Firestore");

      navigate("/pitches");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center overflow-auto">
      <div className="w-3/4 lg:w-3/5 bg-white p-10 rounded-lg shadow-md flex justify-center items-center">
        <div className="flex flex-1 flex-col justify-center items-center space-y-5">
          <span className="text-primary-0 font-teachers font-semibold text-xl mb-10 uppercase">
            Registracija
          </span>
          <div className="flex flex-col items-center">
            <div className="flex flex-col font-teachers space-y-5 w-80">
              <div className="flex justify-between">
                <span className="text-slate-400 text-lg">Ime:</span>
                <input
                  className="border-b border-x border-primary-0"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-lg">Prezime:</span>
                <input
                  className="border-b border-x border-primary-0"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 text-lg">Email:</span>
                <input
                  className="border-b border-x border-primary-0"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 text-lg">Lozinka:</span>
                <input
                  type="password"
                  className="border-b border-x border-primary-0"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-lg">Datum rođenja:</span>
                <input
                  type="date"
                  value={birthdate.toISOString().split("T")[0]} // Formatiraj datum za input
                  onChange={(e) => setBirthdate(new Date(e.target.value))}
                  className="border-b border-x border-primary-0"
                />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-lg">Spol:</span>
                <div>
                  <label className="mr-10">
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
                  <label>
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
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              onClick={handleRegistration}
              className="px-5 py-2 bg-primary-0 rounded-md shadow-md text-white font-teachers font-thin text-lg ease-in-out duration-300 delay-100 hover:scale-110"
            >
              Registracija
            </button>
          </div>
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Registration;

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Croatian } from "flatpickr/dist/l10n/hr";
import Res_Heading from "./components/Res_Heading";
import { useAuth } from "../firebase/auth/AuthProvider";
import { db } from "../firebase/firebase";
import {
  doc,
  getDoc,
  setDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const Reservation = () => {
  const location = useLocation();
  const [date, setDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [userData, setUserData] = useState(null);
  const [reservedSlots, setReservedSlots] = useState([]);
  const field = location.state?.field || {
    heading: "Nepoznati tereni",
    name: "Nepoznati teren",
    price: "0€",
    description: "Opis nije dostupan",
    image: {},
  };
  const availableSlots = [
    "17:00 - 18:00",
    "18:00 - 19:00",
    "19:00 - 20:00",
    "20:00 - 21:00",
    "21:00 - 22:00",
  ];
  const { user } = useAuth();

  // Dohvaćanje korisničkih podataka
  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        try {
          const userDoc = doc(db, "users", user.uid);
          const docSnap = await getDoc(userDoc);
          if (docSnap.exists()) {
            setUserData(docSnap.data()); // Spremi sve podatke o korisniku
          } else {
            console.log("Nema korisničkih podataka!");
          }
        } catch (error) {
          console.error("Greška pri dohvaćanju podataka:", error);
        }
      }
    };

    fetchUserData();
  }, [user]);

  // Dohvaćanje rezerviranih termina za odabrani datum
  useEffect(() => {
    const fetchReservedSlots = async () => {
      if (date) {
        const formattedDate = formatDate(date[0]);
        const q = query(
          collection(db, "reservations"),
          where("date", "==", formattedDate),
          where("field.heading", "==", field.heading)
        );

        try {
          const querySnapshot = await getDocs(q);
          const reserved = querySnapshot.docs.map((doc) => doc.data().slot);
          setReservedSlots(reserved);
        } catch (error) {
          console.error("Greška pri dohvaćanju rezerviranih termina:", error);
        }
      }
    };

    fetchReservedSlots();
  }, [date]);

  // Formatiranje datuma
  const formatDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Intl.DateTimeFormat("hr-HR", options).format(date);
  };

  // Prikaz informacija o odabranom terminu
  const getSelectedInfo = () => {
    if (date && selectedSlot) {
      return `${formatDate(date[0])}, u ${selectedSlot}h`;
    }
    return "Odaberite datum i termin.";
  };

  // Rukovanje rezervacijom
  const handleReservation = async () => {
    if (!userData) {
      alert("Niste prijavljeni ili nema korisničkih podataka.");
      return;
    }

    try {
      await setDoc(
        doc(
          db,
          "reservations",
          `${user.uid}_${date[0].toISOString()}_${selectedSlot}`
        ),
        {
          userId: user.uid,
          userName: userData.lastName, // Možeš dodati i prezime ako želiš
          field: field,
          date: formatDate(date[0]), // Spremamo formatirani datum
          slot: selectedSlot,
        }
      );

      alert("Rezervacija je uspješno spremljena!");
    } catch (error) {
      console.error("Greška pri spremanju rezervacije:", error);
    }
  };

  // Filtriranje dostupnih termina
  const getAvailableSlots = () => {
    return availableSlots.filter((slot) => !reservedSlots.includes(slot));
  };

  return (
    <div>
      <Res_Heading />
      <div className="relative bg-white rounded-xl shadow-m h-full w-full flex flex-col items-center justify-center font-teachers p-10">
        <div className="bg-slate-600 p-10 rounded-md shadow-lg flex flex-col items-center mb-10">
          <h1 className="text-white text-4xl font-semibold mb-5 flex">
            {field.heading}
          </h1>
          <img
            className="w-full h-52 border rounded-md mb-2"
            src={field.image}
          />
          <h2 className="text-white text-lg font-semibold">{field.name}</h2>
          <p className="text-xs text-white">{field.description}</p>
        </div>
        <div className="flex flex-col md:flex-row items-start justify-center space-y-5 md:space-y-0 md:space-x-10">
          <div>
            <Flatpickr
              value={date}
              onChange={(date) => setDate(date)}
              options={{
                inline: true,
                dateFormat: "d.m.Y.",
                minDate: "today",
                locale: Croatian,
                weekNumbers: false,
                disableMobile: true,
              }}
              className="w-full md:w-80 p-3 border rounded-xl shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-3">Dostupni termini:</h2>
            <ul className="space-y-2">
              {getAvailableSlots().map((slot, index) => (
                <li
                  key={index}
                  className={`flex justify-center p-2 border rounded-lg shadow-sm cursor-pointer ${
                    selectedSlot === slot
                      ? "bg-primary-0 text-white"
                      : "hover:bg-slate-400 hover:text-white"
                  }`}
                  onClick={() => setSelectedSlot(slot)}
                >
                  {slot}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="space-x-20 flex items-center justify-around mt-10 border border-primary-0 p-10 rounded-lg shadow-md bg-slate-100 mb-5">
          <div>
            <p>{field.heading}</p>
            <p>{field.name}</p>
            <p className="text-2xl font-semibold">{getSelectedInfo()}</p>
            <p>Cijena termina: {field.price}</p>
          </div>
          <button
            onClick={handleReservation}
            className="bg-primary-0 py-2 px-7 text-white font-semibold shadow-md rounded-lg ease-in-out duration-300 delay-100 hover:scale-110"
          >
            Rezerviraj
          </button>
        </div>
        <Link className="absolute bottom-5 left-10" to="/pitches">
          <button className="flex items-center text-xs text-slate-400 hover:text-red-400 mt-7">
            <svg
              className="w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="48"
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

export default Reservation;

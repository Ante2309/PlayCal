import React, { useState, useEffect } from "react";
import Res_Heading from "../../reservation/components/Res_Heading";
import { auth, db } from "../../firebase/firebase";
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
} from "firebase/firestore";

const Player = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [userData, setUserData] = useState(null);
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchUserDataAndReservations = async () => {
      try {
        const user = auth.currentUser;

        if (user) {
          const userDocRef = doc(db, "users", user.uid);
          const userDoc = await getDoc(userDocRef);

          if (userDoc.exists()) {
            setUserData(userDoc.data());
          }

          const reservationsQuery = query(
            collection(db, "reservations"),
            where("userId", "==", user.uid)
          );
          const reservationsSnapshot = await getDocs(reservationsQuery);
          const reservationsData = reservationsSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          setReservations(reservationsData);
        }
      } catch (error) {
        console.error("Error fetching user data or reservations:", error);
      }
    };

    fetchUserDataAndReservations();
  }, []);

  const handleDeleteReservation = async (reservationId) => {
    try {
      await deleteDoc(doc(db, "reservations", reservationId));

      setReservations(reservations.filter((res) => res.id !== reservationId));

      alert("Rezervacija je uspješno izbrisana!");
    } catch (error) {
      console.error("Greška pri brisanju rezervacije:", error);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <ProfileInfo userData={userData} />;
      case "reservations":
        return (
          <MyReservations
            reservations={reservations}
            handleDelete={handleDeleteReservation}
          />
        );
      default:
        return <ProfileInfo userData={userData} />;
    }
  };

  return (
    <div>
      <Res_Heading />
      <div className="flex w-full h-screen">
        <aside className="w-1/4 bg-gray-100 p-5 rounded-l-lg shadow-md font-teachers">
          <ul className="space-y-2">
            <li>
              <button
                className={`w-full text-left p-2 rounded-lg ${
                  activeTab === "profile"
                    ? "bg-primary-0 text-white"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => setActiveTab("profile")}
              >
                Osobni Podaci
              </button>
            </li>
            <li>
              <button
                className={`w-full text-left p-2 rounded-lg ${
                  activeTab === "reservations"
                    ? "bg-primary-0 text-white"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => setActiveTab("reservations")}
              >
                Moje Rezervacije
              </button>
            </li>
          </ul>
        </aside>

        <main className="w-3/4 p-10 bg-white rounded-r-lg shadow-md">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

// Komponenta za prikaz osobnih podataka
const ProfileInfo = ({ userData }) => {
  if (!userData) {
    return <p>Učitavanje podataka...</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-teachers font-semibold mb-4">
        Osobni Podaci
      </h2>
      <p>
        <strong>Ime:</strong> {userData.firstName}
      </p>
      <p>
        <strong>Prezime:</strong> {userData.lastName}
      </p>
      <p>
        <strong>Email:</strong> {userData.email}
      </p>
      <p>
        <strong>Spol:</strong> {userData.gender}
      </p>
      <p>
        <strong>Datum Rođenja:</strong>{" "}
        {new Date(userData.birthdate).toLocaleDateString()}
      </p>
    </div>
  );
};

// Komponenta za prikaz korisnikovih rezervacija
const MyReservations = ({ reservations, handleDelete }) => {
  if (reservations.length === 0) {
    return <p>Nemate rezervacija.</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold font-teachers mb-4">
        Moje Rezervacije
      </h2>
      <ul>
        {reservations.map((reservation) => (
          <li
            key={reservation.id}
            className="mb-4 p-4 bg-gray-100 rounded-lg shadow-md flex justify-between items-center"
          >
            <div>
              <p>
                <strong>Datum:</strong> {formatDate(reservation.date)}
              </p>
              <p>
                <strong>Lokacija:</strong> {reservation.field.heading}
              </p>
              <p>
                <strong>Vrijeme:</strong> {reservation.slot}
              </p>
            </div>
            <button
              onClick={() => handleDelete(reservation.id)}
              className="ml-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700"
            >
              Izbriši rezervaciju
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Funkcija za formatiranje datuma
const formatDate = (dateString) => {
  const parsedDate = new Date(dateString);

  if (isNaN(parsedDate)) {
    return "Nepoznat datum";
  }

  return parsedDate.toLocaleDateString("hr-HR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default Player;

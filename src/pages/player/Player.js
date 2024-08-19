import React, { useState, useEffect } from "react";
import Res_Heading from "../../reservation/components/Res_Heading";
import Res_Footer from "../../reservation/components/Res_Footer";
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
  const [showModal, setShowModal] = useState(false);
  const [reservationToDelete, setReservationToDelete] = useState(null);

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

  const handleDeleteReservation = async () => {
    try {
      await deleteDoc(doc(db, "reservations", reservationToDelete));

      setReservations(
        reservations.filter((res) => res.id !== reservationToDelete)
      );
      setShowModal(false); // Zatvori modal nakon brisanja
    } catch (error) {
      console.error("Greška pri brisanju rezervacije:", error);
    }
  };

  const openDeleteModal = (reservationId) => {
    setReservationToDelete(reservationId);
    setShowModal(true); // Otvori modal
  };

  const closeModal = () => {
    setShowModal(false); // Zatvori modal bez brisanja
  };

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <ProfileInfo userData={userData} />;
      case "reservations":
        return (
          <MyReservations
            reservations={reservations}
            openDeleteModal={openDeleteModal}
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
        <aside className="w-1/4 bg-gray-100 p-5 rounded-l-lg shadow-md font-teachers mb-2">
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

        <main className="w-3/4 p-10 bg-white rounded-r-lg shadow-md mb-2">
          {renderContent()}
        </main>
      </div>
      <Res_Footer />

      {/* Modal za potvrdu brisanja */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg">
            <h2 className="text-xl font-teachers mb-4">
              Jeste li sigurni da želite izbrisati rezervaciju?
            </h2>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleDeleteReservation}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700"
              >
                Da
              </button>
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
              >
                Ne
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Komponenta za prikaz osobnih podataka
const ProfileInfo = ({ userData }) => {
  if (!userData) {
    return <p>Učitavanje podataka...</p>;
  }

  // Provjera je li birthdate Firebase timestamp i pretvorba u Date objekt
  const birthdate = userData.birthdate?.toDate
    ? userData.birthdate.toDate()
    : userData.birthdate;

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
        {birthdate instanceof Date
          ? birthdate.toLocaleDateString("hr-HR")
          : "Nepoznat datum"}
      </p>
    </div>
  );
};

// Komponenta za prikaz korisnikovih rezervacija
const MyReservations = ({ reservations, openDeleteModal }) => {
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
                <strong>Teren:</strong> {reservation.field.name}
              </p>
              <p>
                <strong>Vrijeme:</strong> {reservation.slot}
              </p>
            </div>
            <button
              onClick={() => openDeleteModal(reservation.id)}
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

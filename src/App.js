import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import LogIn from "./pages/login/LogIn";
import Registration from "./pages/registration/Registration";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Pitches from "./pages/player/home/pitches/Pitches";
import Reservation from "./reservation/Reservation";
import Gool from "./pages/player/home/pitches/components/Tereni Gool Šubićevac/Gool";
import Bilice from "./pages/player/home/pitches/components/Tereni Bilice/Bilice";
import Mandalina from "./pages/player/home/pitches/components/Tereni Mandalina/Mandalina";
import Njivice from "./pages/player/home/pitches/components/Tereni Njivice/Njivice";
import Rasadnik from "./pages/player/home/pitches/components/Tereni Rasadnik Vidici/Rasadnik";
import { AuthProvider } from "./firebase/auth/AuthProvider";
import PrivateRoute from "./firebase/components/PrivateRoute";
import Player from "./pages/player/Player";

function App() {
  return (
    <div className="bg-slate-200 p-2">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reservation" element={<Reservation />} />

            {/* Zaštićene rute */}
            <Route
              path="/pitches"
              element={
                <PrivateRoute>
                  <Pitches />
                </PrivateRoute>
              }
            />
            <Route
              path="/gool"
              element={
                <PrivateRoute>
                  <Gool />
                </PrivateRoute>
              }
            />
            <Route
              path="/bilice"
              element={
                <PrivateRoute>
                  <Bilice />
                </PrivateRoute>
              }
            />
            <Route
              path="/mandalina"
              element={
                <PrivateRoute>
                  <Mandalina />
                </PrivateRoute>
              }
            />
            <Route
              path="/njivice"
              element={
                <PrivateRoute>
                  <Njivice />
                </PrivateRoute>
              }
            />
            <Route
              path="/rasadnik"
              element={
                <PrivateRoute>
                  <Rasadnik />
                </PrivateRoute>
              }
            />
            <Route
              path="/player"
              element={
                <PrivateRoute>
                  <Player />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

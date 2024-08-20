import React from "react";
import Header from "../head-foot/Header";
import Footer from "../head-foot/Footer";
import logo from "../head-foot/media/NOGOMETNI.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <Header />
      <div className="mt-2 font-teachers">
        <div className="bg-white p-8 rounded-xl shadow-md w-full h-full mb-2">
          <div className="flex justify-center mb-8">
            <img
              src={logo}
              className="w-1/2 md:w-1/3 rounded-lg shadow-sm"
              alt="About Us"
            />
          </div>
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-0">
              O Nama
            </h1>
            <p className="text-md md:text-xl text-slate-400 mt-4 font-thin">
              PlayCal je posvećen pružanju najboljeg iskustva rezervacije
              nogometnih terena. Naša misija je omogućiti igračima i timovima
              jednostavan način za organizaciju igara i turnira.
            </p>
            <p className="text-md md:text-xl text-slate-400 mt-4 font-thin">
              Naša platforma je dizajnirana da bude intuitivna i user-friendly,
              sa ciljem da što brže poveže igrače sa željenim terenom. Imamo
              širok spektar opcija i funkcionalnosti koje omogućuju jednostavno
              planiranje i rezervaciju.
            </p>
            <section className="mt-8">
              <h2 className="text-3xl font-semibold text-primary-0">
                Naša Misija i Vizija
              </h2>
              <p className="text-md md:text-xl text-slate-400 mt-4 font-thin">
                Naša misija je pružiti najefikasniju i najpristupačniju uslugu
                rezervacije nogometnih terena. Vjerujemo da sport povezuje
                ljude, stoga želimo omogućiti što jednostavnije organiziranje
                igranja. Naša vizija je postati lider u industriji sportskih
                rezervacija kroz inovacije i izvrsnost u korisničkom iskustvu.
              </p>
            </section>
            <section className="mt-8">
              <h2 className="text-3xl font-semibold text-primary-0">Naš Tim</h2>
              <p className="text-md md:text-xl text-slate-400 mt-4 font-thin">
                Naš tim čine strastveni profesionalci s različitim iskustvima u
                tehnologiji, sportu i korisničkoj podršci. Svaki član tima
                doprinosi svojim jedinstvenim vještinama kako bismo osigurali da
                PlayCal bude najbolja moguća platforma za naše korisnike.
              </p>
            </section>
            <section className="mt-8">
              <h2 className="text-3xl font-semibold text-primary-0">
                Naša Postignuća
              </h2>
              <p className="text-md md:text-xl text-slate-400 mt-4 font-thin">
                Do sada smo uspjeli ostvariti značajan broj zadovoljnih
                korisnika i uspješno smo proveli brojne sportske događaje i
                turnire. Ponosni smo na pozitivne povratne informacije koje smo
                primili i nastavit ćemo se truditi kako bismo unaprijedili naše
                usluge.
              </p>
            </section>
            <Link to="/contact">
              <button className="bg-primary-0 text-white font-semibold px-6 py-3 rounded-lg mt-6 ease-in-out duration-300 delay-100 hover:scale-110 font-teachers mb-3">
                Kontaktirajte nas
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;

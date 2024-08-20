import React from "react";
import Header from "../head-foot/Header";
import Footer from "../head-foot/Footer";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="mt-2 font-teachers">
        <div className="bg-white p-8 rounded-xl shadow-md w-full h-full mb-2">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-0">
              Kontaktirajte Nas
            </h1>
            <p className="text-md md:text-xl text-slate-400 mt-4 font-thin">
              Ako imate bilo kakva pitanja, prijedloge ili trebate pomoć,
              slobodno nas kontaktirajte. Rado ćemo vam pomoći!
            </p>
          </div>
          <div className="flex flex-col items-center">
            <form className="w-full max-w-lg">
              <div className="mb-4">
                <label
                  className="block text-left text-slate-500 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Ime
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Vaše ime"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-left text-slate-500 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Vaš e-mail"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-left text-slate-500 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Poruka
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Vaša poruka"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-primary-0 text-white font-semibold px-6 py-3 rounded-lg mt-4 ease-in-out duration-300 delay-100 hover:scale-110 font-teachers"
              >
                Pošaljite Poruku
              </button>
            </form>
          </div>
          <div className="text-center mt-8">
            <h2 className="text-3xl font-semibold text-primary-0">
              Drugi Načini Kontaktiranja
            </h2>
            <p className="text-md md:text-xl text-slate-400 mt-4 font-thin">
              Ako preferirate, možete nas kontaktirati putem naših društvenih
              mreža ili pozivom na broj ispod.
            </p>
            <p className="text-md md:text-xl text-slate-400 mt-4 font-thin">
              <strong>Telefon:</strong> +123 456 789
            </p>
            <p className="text-md md:text-xl text-slate-400 mt-2 font-thin">
              <strong>Email:</strong> info@playcal.com
            </p>
            <section className="mt-8">
              <h2 className="text-3xl font-semibold text-primary-0">
                Naša Lokacija
              </h2>
              <p className="text-md md:text-xl text-slate-400 mt-4 font-thin">
                Posjetite nas na adresi:
              </p>
              <p className="text-md md:text-xl text-slate-400 mt-2 font-thin">
                Put gimnazije 6, 22000 Šibenik
              </p>
              <div className="mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11548.481954792144!2d15.891226813874081!3d43.73487591413882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133a12c47dc8e33b%3A0xbaf36b8ae6b9c66e!2sPut%20gimnazije%206%2C%2022000%20%C5%A0ibenik!5e0!3m2!1shr!2shr!4v1692600363577!5m2!1shr!2shr"
                  width="100%"
                  height="400"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                  title="Our Location"
                ></iframe>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

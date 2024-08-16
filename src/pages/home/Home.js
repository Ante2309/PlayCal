import React from "react";
import HomeBody_1 from "./components/HomeBody_1";
import HomeBody_2 from "./components/HomeBody_2";
import HomeBody_3 from "./components/HomeBody_3";
import HomeBody_6 from "./components/HomeBody_6";
import Header from "../head-foot/Header";
import Footer from "../head-foot/Footer";
import ScrollToTopButton from "../../components/ScrollToTopButton";
const Home = () => {
  return (
    <div>
      <Header />
      <HomeBody_1 />
      <HomeBody_2 />
      <HomeBody_3 />
      <HomeBody_6 />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Home;

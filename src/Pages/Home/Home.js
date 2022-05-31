import React from "react";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import Card from "./Card";
import Deals from "./Deals";
import Filters from "./Filters";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Deals />
      <Filters />
      <Footer />
    </div>
  );
};

export default Home;

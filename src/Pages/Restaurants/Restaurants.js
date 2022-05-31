import React from "react";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import Filters from "./Filters";
import Nearby from "./Nearby";

const Restaurants = () => {
  return (
    <div>
      <Navbar />
      <Filters />
      <Nearby />
      <Footer />
    </div>
  );
};

export default Restaurants;

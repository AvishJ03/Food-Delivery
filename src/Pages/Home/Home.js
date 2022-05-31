import React from "react";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import Find from "./Find";
import HowToOrder from "./HowToOrder";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Find />
      <HowToOrder />
      <Footer />
    </div>
  );
};

export default Home;

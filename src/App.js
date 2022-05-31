import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import RestCard from "./Components/RestCard";
import Checkout from "./Pages/Checkout/Checkout";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login";
import Menu from "./Pages/Menu/Menu";
import Restaurants from "./Pages/Restaurants/Restaurants";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} exact={true} />
      <Route path="/home" element={<Home />} exact={true} />
      <Route path="/resto" element={<Restaurants />} exact={true} />
      <Route path="/menu" element={<Menu />} exact={true} />
      <Route path="/check" element={<Checkout />} exact={true} />
    </Routes>
  );
}

export default App;

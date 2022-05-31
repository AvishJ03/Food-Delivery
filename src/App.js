import { Route, Routes } from "react-router-dom";
import "./App.css";
import Checkout from "./Pages/Checkout/Checkout";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Menu from "./Pages/Menu/Menu";
import Placed from "./Pages/Placed/Placed";
import Profile from "./Pages/Profile/Profile";
import Restaurants from "./Pages/Restaurants/Restaurants";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} exact={true} />
      <Route path="/signup" element={<SignUp />} exact={true} />
      <Route path="/home" element={<Home />} exact={true} />
      <Route path="/resto" element={<Restaurants />} exact={true} />
      <Route path="/menu" element={<Menu />} exact={true} />
      <Route path="/check" element={<Checkout />} exact={true} />
      <Route path="/profile" element={<Profile />} exact={true} />
      <Route path="/placed" element={<Placed />} exact={true} />
    </Routes>
  );
}

export default App;

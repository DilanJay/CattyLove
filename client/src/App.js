import React from "react";
import "./App.css";
import Navbar from "./component/navBar/Navbar";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import CatProfile from "./pages/catprofile/CatProfile";
import Login from "./pages/login/Login";
import ResetPassword from "./pages/resetpassword/ResetPassword";
import SignUp from "./pages/signup/SignUp";
import Wishlist from "./pages/wishlist/Wishlist";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/catprofile/:id" element={<CatProfile />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

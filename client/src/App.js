import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Navbar from "./component/navBar/Navbar";
import CatProfile from "./pages/catprofile/CatProfile";
import Wishlist from "./pages/wishlist/Wishlist";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import ResetPassword from "./pages/resetpassword/ResetPassword";
import SignUp from "./pages/signup/SignUp";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/catprofile" element={<CatProfile />} />
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

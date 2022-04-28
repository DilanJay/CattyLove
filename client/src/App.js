import logo from './logo.svg';
import './App.css';
import Navbar from "./component/navBar/Navbar";
import CatProfile from "./pages/catprofile/CatProfile";
import Wishlist from "./pages/wishlist/Wishlist";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/catprofile" element={<CatProfile />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

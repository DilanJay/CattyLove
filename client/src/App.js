import logo from './logo.svg';
import './App.css';
import Navbar from "./component/navBar/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" exact element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

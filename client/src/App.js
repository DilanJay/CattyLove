import logo from './logo.svg';
import './App.css';
import Navbar from "./component/navBar/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          
        </Routes>
      </Router>
    </>
  );
}

export default App;

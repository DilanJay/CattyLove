import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { IconContext } from "react-icons";
import { SidebarData } from "./SidebarData";
import catImg from "../../img/cat.jpg";
import StylishButton from "../stylishButton/StylishButton";
import * as IoIcons from "react-icons/io";
import jwt from "jwt-decode";
function Navbar() {
  let navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);
  const [isLogIn, setisLogIn] = useState(false);
  const [user, setUser] = useState({});
  const [userLable, setUserLable] = useState("Hi User");
  const showSidebar = () => setSidebar(!sidebar);
  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      setisLogIn(true);

      if (localStorage.getItem("currentSessionUsename")) {
        let currenUserName = localStorage.getItem("username");
        setUserLable(currenUserName);
      }
    }
  }, []);

  function LinkOnclick() {
    localStorage.removeItem("authToken");
    localStorage.removeItem("currentSessionUserID");
    localStorage.removeItem("currentSessionUsename");
    window.location.href = "/";
  }

  return (
    <div>
      <div>
        <IconContext.Provider value={{ color: "#fff" }}>
          <div className="navbar">
            <img
              src={catImg}
              width="50"
              height="50"
              className="ms-3 d-inline-block align-top"
              alt=""
            ></img>
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          </div>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              <li className="nav-text">
                <img
                  src={catImg}
                  width="50"
                  height="50"
                  className="ms-3 d-inline-block align-top"
                  alt=""
                ></img>
                <span>
                  <h2 className="sidebar-header">Catty Love</h2>
                </span>
              </li>
              <li className="nav-text sidebar-header">
                Let’s give them a forever home
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
              {isLogIn === true ? (
                <>
                  <li className="nav-text">
                    <Link to="/" onClick={LinkOnclick}>
                      <IoIcons.IoIosLogOut />
                      <span>Log out</span>
                    </Link>
                  </li>
                  <li className="nav-text">
                    <h2 className="sidebar-header">{userLable}</h2>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-text">
                    <Link to="/signin">
                      <IoIcons.IoIosLogOut />
                      <span>Sign In</span>
                    </Link>
                  </li>
                  <li className="nav-text">
                    <Link to="/signup">
                      <IoIcons.IoIosLogOut />
                      <span>Sign Up</span>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default Navbar;

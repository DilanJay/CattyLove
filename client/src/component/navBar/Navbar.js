import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { IconContext } from "react-icons";
import { SidebarData } from "./SidebarData";
import catImg from "../../img/cat.jpg";
import StylishButton from "../stylishButton/StylishButton";
import * as IoIcons from "react-icons/io";
function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  let isLogIn = false;

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
            {/* <StylishButton btnName="View"></StylishButton> */}
          </div>

          {/* <div>
          <span>
            <h2>Hi! username</h2>
            <StylishButton btnName="Sign In"></StylishButton>
            <StylishButton btnName="Sign Up"></StylishButton>
          </span>
        </div> */}
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
              <li className="nav-text">
                <Link to="/">
                  <IoIcons.IoIosLogOut />
                  <span>Log out</span>
                </Link>
              </li>
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
              <li className="nav-text">
                <h2 className="sidebar-header">Hi! Pubudi</h2>
              </li>
            </ul>
          </nav>
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default Navbar;

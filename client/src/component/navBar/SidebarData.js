import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as GiIcons from "react-icons/gi";
export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  // {
  //   title: "Cat Profile",
  //   path: "/catprofile/:id",
  //   icon: <GiIcons.GiBlackCat />,
  //   cName: "nav-text",
  // },
  {
    title: "Wishlist",
    path: "/wishlist",
    icon: <FaIcons.FaRegListAlt />,
    cName: "nav-text",
  },
  {
    title: "Settings",
    path: "/resetpassword",
    icon: <AiIcons.AiFillSetting />,
    cName: "nav-text",
  },
  {
    title: "Support",
    path: "/resetpassword",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
  // {
  //   title: "Logout",
  //   path: "/home",
  //   icon: <IoIcons.IoIosLogOut />,
  //   cName: "nav-text",
  // },
];

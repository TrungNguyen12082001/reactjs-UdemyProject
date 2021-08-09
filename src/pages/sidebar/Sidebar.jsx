import React, { useState } from "react";
import "./Sidebar.css";
import logo from "../../assets/images/logo-coral.svg";
import { AiFillHome, AiOutlineBulb, AiOutlineUser } from "react-icons/ai";
import { BsBatteryFull, BsList } from "react-icons/bs";
import { AiOutlineTag } from "react-icons/ai";
import { BsBriefcase } from "react-icons/bs";
import { BiCheckShield } from "react-icons/bi";
import { FaBars } from "react-icons/fa";

import { Link, NavLink, useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

// function toggleMenu() {
//   let navigation = document.querySelector(".nav-bars");
//   let toggle = document.querySelector(".toggle");
//   navigation.classList.toggle("active");
//   toggle.classList.toggle("active");
// }

function Sidebar() {
  const history = useHistory();
  // const { sideBar, setSideBar } = useState(true);

  const [nav, setNav] = useState([
    { label: "Home", slug: "/", icon: <AiFillHome /> },
    { label: "Discovery", slug: "discover", icon: <BsList /> },
    { label: "Categories", slug: "categories", icon: <AiOutlineTag /> },
    { label: "My Courses", slug: "my-courses", icon: <BsBriefcase /> },
  ]);
  // const showSideBar = () => setNav(!nav);

  const [currentPage, setCurrentPage] = useState("/");

  var navigation = [];

  for (let i = 0; i < nav.length; i++) {
    navigation.push(
      <li key={"nav-" + i + "-" + nav[i].slug}>
        <NavLink to={nav[i].slug} className={" aic link noul flex c333"}>
          <div className="s20">{nav[i].icon}</div>
          <h2 className="lbl s20">{nav[i].label}</h2>
        </NavLink>
      </li>
    );
  }

  return (
    <nav className="sidebar rel">
      <a href="#" className="logo bl">
        <img src={logo} className="bl" />
      </a>

      <div className="menu-icon">
        <FaBars className="nav-bars" />
      </div>

      {/* <nav className={nav ? "nav active" : "nav-menu"}>
        <ul className="nav">{navigation}</ul>
      </nav> */}

      <ul className="nav">{navigation}</ul>

      <div className="updated-courses flex aic">
        <AiOutlineBulb className="ico cfff s24" />
        <div className="lbl s15 fontb c333">
          Updated Courses
          <h2 className="author s13 c777">By CyberSoft</h2>
        </div>
      </div>

      <div className="stats aic flex">
        <div className="stats-box flex">
          <BiCheckShield className="ico ico-points s24" />
          <h2 className="val s15 c333 fontb">1800</h2>
          <h2 className="lbl s13 c777">Points</h2>
        </div>

        <div className="stats-box flex">
          <BsBatteryFull className="ico ico-battery s24" />
          <h2 className="val s15 c333 fontb">90%</h2>
          <h2 className="lbl s13 c777">Completed</h2>
        </div>
      </div>

      <div className="me flex aic">
        <div className="photo cfff s24">
          <img src="https://placeimg.com/100/100/people" className="bl" />
        </div>

        <div className="lbl s15 fontb c333">
          Nguyen Tat Trung
          <h2 className="uname s13 c777">@nguyentattrung</h2>
        </div>
      </div>

      <div className="aic login noul flex c333">
        <AiOutlineUser className="s13 ico" />
        <Button
          onClick={() => {
            history.push("/sign-in");
          }}
          className="lbl 20"
        >
          Login
        </Button>
      </div>
    </nav>
  );
}

export default Sidebar;

import React, { useState } from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
export const Navbar = () => {
  const [showmenu, setShowmenu] = useState(false);
  if (showmenu) {
    var menu = (
      <div className="menu nav-list">
        <ul>
          <Link spy={true} to="Navbar" activeClass="activeClass" smooth={true}>
            <li>Home</li>
          </Link>
          <Link spy={true} to="Services" smooth={true}>
            <li>Services</li>
          </Link>
          <Link spy={true} to="Experience" smooth={true}>
            <li>Experience</li>
          </Link>
          <Link spy={true} to="Portfolio" smooth={true}>
            <li>Portfolio</li>
          </Link>
          <Link spy={true} to="Testimonials" smooth={true}>
            <li>Testimoninals</li>
          </Link>
        </ul>
      </div>
    );
    var menumask = (
      <div className="menumask" onClick={() => setShowmenu(false)}></div>
    );
  }
  return (
    <div className="n-wrapper" id="Navbar">
      {menumask}
      {menu}

      <div className="n-left">
        <div className="n-name">Canh Lam</div>
        <Toggle />
        <FontAwesomeIcon
          onClick={() => setShowmenu(!showmenu)}
          className="bar"
          icon={faBars}
        />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <Link
              spy={true}
              to="Navbar"
              activeClass="activeClass"
              smooth={true}
            >
              <li>Home</li>
            </Link>
            <Link spy={true} to="Services" smooth={true}>
              <li>Services</li>
            </Link>
            <Link spy={true} to="Experience" smooth={true}>
              <li>Experience</li>
            </Link>
            <Link spy={true} to="Portfolio" smooth={true}>
              <li>Portfolio</li>
            </Link>
            <Link spy={true} to="Testimonials" smooth={true}>
              <li>Testimoninals</li>
            </Link>
          </ul>
        </div>
        <Link spy={true} to="Contact" smooth={true}>
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

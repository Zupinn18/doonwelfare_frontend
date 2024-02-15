// Navbar.js

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";
import doonlogo from "../../assets/doonlogo.webp";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  const navbarClass = scrolled ? "navbar navbar-expand-lg sticky-top" : "navbar  navbar-expand-lg ";
  const navbarStyle = {
    backgroundColor: scrolled ? "#f7f7f7" : "#f7f7f7",
    position: "fixed",
    padding: "0",
    width: "100%",
    zIndex: 2,
    transition: "background-color 0.3s ease, color 0.3s ease",
  };

  return (
    <>
      <nav className={navbarClass} style={navbarStyle}>
  <div className="container-fluid">
    <Link to="/">
      <a className="navbar-brand">
        <img src={doonlogo} alt="doon-animal-welfare" style={{ height: "100px" }} />
      </a>
    </Link>

    <button
      className="navbar-toggler"
      type="button"
      onClick={toggleMobileNav}
      style={{ backgroundColor: "var(--primary)" }}
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className={`collapse navbar-collapse ${isMobileNavOpen ? "show" : ""}`}>
    <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-4 ms-lg-3 fw-bold" onClick={closeMobileNav}>
        <li className="nav-item mx-3">
          <Link to="/" className={`nav-link ${scrolled ? "text-dark" : "text-dark"} s-txt mt-lg-4`} style={{ fontSize: "10px" }}>
            Homepage
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/our-vision" className={`nav-link ${scrolled ? "text-dark" : "text-dark"} s-txt mt-lg-4 mt-3`} style={{ fontSize: "10px" }}>
            What We Do
          </Link>
        </li>
        <li className="nav-item mx-3">
          <Link to="/about-us" className={`nav-link ${scrolled ? "text-dark" : "text-dark"} s-txt mt-lg-4 mt-3`} style={{ fontSize: "10px" }}>
            About Us
          </Link>
        </li>
        
        <li className="nav-item mx-3">
          <Link to="/helping-hand" className={`nav-link ${scrolled ? "text-dark" : "text-dark"} s-txt mt-lg-4 mt-3`} style={{ fontSize: "10px" }}>
            Success Stories
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className={`nav-link ${scrolled ? "text-dark" : "text-dark"} s-txt mt-lg-4 mt-3`} style={{ fontSize: "10px" }}>
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/blogs" className={`nav-link ${scrolled ? "text-dark" : "text-dark"} s-txt mt-lg-4 mt-3`} style={{ fontSize: "10px", marginLeft: "10px" }}>
            Blogs
          </Link>
        </li>
        <li>
          <img className="log2" src={logo} alt="" style={{ height: "100px", filter: "drop-shadow(2px 4px 6px black)" }} />
        </li>

      </ul>


      <Link className="donate_button nav-link fa-bounce mt-3" to="/landing-page" aria-current="page">
        <a
          style={{
            backgroundColor: "#FF8C00",
            color: "white",
            fontSize: "20px",
            fontWeight: "500",
            borderRadius: "50px",
            textDecoration: "none",
            filter: "drop-shadow(2px 4px 6px black)",
          }}
          className="me-2 p-3 icon s-txt"
        >
          Donate in kind <i className="fa-solid " style={{ color: "white", width: "16px", height: "16px"}}></i>
        </a>
      </Link>



      <Link className="nav-link" to="/donate" aria-current="page">
        <a
          style={{
            backgroundColor: "var(--primary)",
            color: "white",
            fontSize: "16px",
            fontWeight: "500",
            borderRadius: "50px",
            textDecoration: "none",
            filter: "drop-shadow(2px 4px 6px black)",
          }}
          className="me-2 p-3 icon s-txt"
        >
          Donate Now <i className="fa-solid fa-hand-holding-medical fa-bounce fs-1 me-3" style={{ color: "white", width: "16px", height: "16px"}} ></i>
        </a>
      </Link>
    </div>
  </div>
</nav>

    </>
  );
}

export default Navbar;

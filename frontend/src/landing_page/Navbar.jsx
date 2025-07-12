import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="container-fluid p-1">
          <Link to="/" className="navbar-brand ms-3">
            <img
              src="media/images/logo.png"
              alt="logo"
              style={{ width: "160px", height: "auto", marginLeft: "25px" }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link px-2"
                  aria-current="page"
                >
                  ABOUT US
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link px-2">
                  SERVICES
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-link px-2">
                  EXPERTS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/pricing" className="nav-link px-2">
                  CENTRES
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/support" className="nav-link px-2">
                  PARTNERS
                </Link>
              </li>
               <li className="nav-item">
                <Link to="/support" className="nav-link px-2">
                  RESOURCES
                </Link>
              </li>
               <li className="nav-item">
                <Link to="/support" className="nav-link px-2 appointment-btn">
            Book an Appointment
             </Link>

              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link px-2 dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa-solid fa-bars"></i>
                </a>
                
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

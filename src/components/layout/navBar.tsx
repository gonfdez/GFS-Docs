import React from "react";
import './navBar.css';

const NavBar = () : JSX.Element => (
  <nav className="navbar bg-light border-bottom">
    <div className="container">
      <span className="navbar-brand mb-0 h1">GFS Docs</span>
      <form className="d-none d-md-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div className="fs-3">
        <i className="uil uil-sun me-4"></i>
        <i className="uil uil-github"></i>
      </div>
    </div>
  </nav>
);  

export default NavBar;

export const Footer = () : JSX.Element => (
  <div className="container-fluid footer-container border-top">
    <div className="container">
      <span className="navbar-brand mb-0 h1">GFS Docs</span>
      <div className="fs-3">
        <i className="uil uil-github"></i>
      </div>
    </div>
  </div>
);  

import React from "react";
import { Link } from "react-router-dom";
import './navBar.css';

const NavBar = () : JSX.Element => (
  <nav className="navbar bg-light border-bottom">
    <div className="container">
      <span className="navbar-brand mb-0 h1"><Link to={'/'} className="no-hover">GFS Docs</Link></span>
      <form className="d-none d-md-flex col-3" role="search">
        <input className="form-control me-2" type="search" placeholder="¿Qué necesitas?" aria-label="Search" />
        {/* <button className="btn btn-outline-success" type="submit">Buscar</button> */}
      </form>
      <div className="fs-3">
        <i className="icon ion-md-sunny"></i>
        <a href="https://github.com/gonfdez/GFS-Docs" target="_blank" rel="noreferrer" className="no-hover">
        <i className="icon ion-logo-github ms-5"></i>
        </a>
      </div>
    </div>
  </nav>
);  

export default NavBar;

export const Footer = () : JSX.Element => (
  <div className="container-fluid footer-container border-top">
    <div className="container">
      <span className="navbar-brand mb-0 h1"><Link to={'/'} className="no-hover">GFS Docs</Link></span>
      <div className="fs-3">
        <a href="https://github.com/gonfdez/GFS-Docs" target="_blank" rel="noreferrer" className="no-hover">
        <i className="icon ion-logo-github"></i>
        </a>
      </div>
    </div>
  </div>
);  

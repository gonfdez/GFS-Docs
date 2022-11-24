import React from "react";
import { Link } from "react-router-dom";
import { ALL_CATEGORIES } from "../../components/posts/posts";
import './home.css';

const Home = () : JSX.Element => {

  /* Falta SEO */

  return (
    <section className="container home-container pt-5 animate__animated animate__backInDown">
      <div className="row justify-content-center">
        <div className="col-12 col-md-auto">

          <div className="row">
            <Link to={ALL_CATEGORIES[0].path} className="no-hover home-card">
              <img src={require('../../media/react.svg').default} alt="React Logo" height={100} className="me-5"/>
              <h2 className="d-inline-block">
                ReactJS
              </h2>
            </Link>
          </div>
          
          <div className="row">
            <Link to={'/'} className="no-hover home-card">
              <img src={require('../../media/python.svg').default} alt="Python Logo" height={100} className="me-5"/>
              <h2 className="d-inline-block">
                Python
              </h2>
            </Link>
          </div>

          <div className="row">
            <Link to={'/'} className="no-hover home-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/MicroPython_new_logo.svg" alt="Micro Python Logo" height={100} className="me-5"/>
              <h2 className="d-inline-block">
                MicroPython
              </h2>
            </Link>
          </div>

          <div className="row">
            <Link to={'/'} className="no-hover home-card">
              <img src={require('../../media/mongodb.svg').default} alt="Micro Python Logo" height={100} className="me-5"/>
              <h2 className="d-inline-block">
                MongoDB
              </h2>
            </Link>
          </div>

          <div className="row">
            <Link to={'/'} className="no-hover home-card">
              <img src={require('../../media/php.svg').default} alt="Micro Python Logo" height={100} className="me-5"/>
              <h2 className="d-inline-block">
                PHP
              </h2>
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Home;
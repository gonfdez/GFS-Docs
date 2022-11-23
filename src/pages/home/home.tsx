import React from "react";
import { Link } from "react-router-dom";
import { ALL_CATEGORIES } from "../../components/posts/posts";
import './home.css';

const Home = () : JSX.Element => {

  /* Falta SEO */

  return (
    <section className="container-fluid home-container pt-5">
      <div className="row justify-content-center">
        
          <div className="col text-center home-card">
            <Link to={ALL_CATEGORIES[0].path} className="no-hover">
              <img src={require('../../media/react.svg').default} alt="React Logo" height={100}/>
              <h2>
                ReactJS
              </h2>
            </Link>
          </div>
      </div>
    </section>
  );
};

export default Home;
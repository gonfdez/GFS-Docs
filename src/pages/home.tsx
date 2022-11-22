import React from "react";
import './home.css';

const Home = () : JSX.Element => {
  return (
    <section className="container-fluid home-container pt-5">
      <div className="row justify-content-center">
        
        <div className="col text-center home-card">
          <img src={require('../media/react.svg').default} alt="React Logo" height={100}/>
          <h2>
            ReactJS
          </h2>
        </div>
        
      </div>
    </section>
  );
};

export default Home;
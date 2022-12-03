import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () : JSX.Element => {
  const navigate = useNavigate();
  return (
    <section className="d-flex timeline-container justify-content-center align-items-center animate__animated animate__headShake">
      <div className="main-back-button animate__animated animate__bounceInLeft">
        <button type="button" className="btn btn-light border" onClick={()=>navigate('/')}>👈 Volver</button>
      </div>
      <h1>Página no encontrada</h1>
    </section>
  );
};

export default PageNotFound;
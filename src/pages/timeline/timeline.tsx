import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { category } from "../../components/posts/posts";
import './timeline.css';

interface PostRowProps {
  date: string,
  emoji: string,
  title: string,
  end?: boolean
}

const PostRow = (props : PostRowProps) : JSX.Element => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="row align-items-stretch">
      <div className="d-none d-md-block col-3 col-md-2 text-end" style={{paddingTop: 10}}>
        {props.date}
      </div>
      <div className="d-flex flex-column col-auto ms-4 ms-md-0">
        <div className={`timeline-icon ${isHover && 'post-row-hover'}`} onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)}>
          {props.emoji}
        </div>
        {!props.end && 
        <div className="timeline-separator-container">
          <div className="timeline-separator "></div>
        </div>
        }
      </div>
      <div className="col  mb-5">
        <div className={`post-title ${isHover && 'post-row-hover'}`} onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)}>
          {props.title}
        </div>
      </div>
    </div>
  );
};


interface TimeLineProps {
  category: category
}

const TimeLine = (props: TimeLineProps) : JSX.Element => {

  const navigate = useNavigate();

  /* Falta SEO */

  return (
    <section className="container-fluid timeline-container">
      <div className="container">
        <button type="button" className="btn btn-light main-back-button border d-none d-md-block" onClick={()=>navigate('/')}>👈 Volver</button>
      </div>
      <div className="row justify-content-center">
        <div className="col text-center timeline-card">
            <img src={require('../../media/react.svg').default} alt="React Logo" height={100} className="rotate-logo"/>
            <h2>
              {props.category.title}
            </h2>
        </div>
      </div>
      
      <div className="row justify-content-center mt-3">
        <div className="col-12 col-md-6">
          
          {/* POSTS ROWS */}
          <PostRow date="20, nov" emoji="🎥"
          title="Animaciones y SVGs" />
          <PostRow date="20, nov" emoji="🌗"
          title="Crea tu propio selector de tema" />
          <PostRow date="20, nov" emoji="🌍"
          title="¿Qué es el estado global? Explicación de Redux" />
          <PostRow date="20, nov" emoji="🚍"
          title="Bus de eventos" end/>      

        </div>
      </div>
    </section>
  );
};

export default TimeLine;
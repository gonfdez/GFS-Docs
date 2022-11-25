import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { category, post } from "../../components/posts/posts";
import './timeline.css';

interface PostRowProps {
  date?: string,
  emoji: string,
  title: string,
  end?: boolean
  url?: string
}

const PostRow = (props : PostRowProps) : JSX.Element => {
  const [isHover, setIsHover] = useState(false);
  const location = useLocation();
  return (
    <div className="row align-items-stretch">
      <div className="d-none d-md-flex col-3 col-md-2 justify-content-end" style={{paddingTop: 10}}>
        {props.date??'Próximamente'}
      </div>
      <div className="d-flex flex-column col-auto">
        <Link to={location.pathname+'/'+props.url} className="no-hover" >
          <div className={`timeline-icon ${isHover && 'post-row-hover'}`} onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)}>
            {props.emoji}
          </div>
        </Link>
        {!props.end && 
        <div className="timeline-separator-container">
          <div className="timeline-separator "></div>
        </div>
        }
      </div>
      <div className="col  mb-5">
        <Link to={location.pathname+'/'+props.url} className="no-hover" >
          <div className={`post-title ${isHover && 'post-row-hover'}`} onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)}>
            {props.title}
          </div>
        </Link>
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
      <div className="container main-back-button animate__animated animate__bounceInLeft">
        <button type="button" className="btn btn-light border d-none d-md-block" onClick={()=>navigate('/')}>👈 Volver</button>
      </div>
      <div className="row justify-content-center">
        <div className="col text-center timeline-card animate__animated animate__fadeInDown">
            <img src={require('../../media/react.svg').default} alt="React Logo" height={100} />
            <h2>
              {props.category.title}
            </h2>
        </div>
      </div>
      
      <div className="row justify-content-center mt-5 animate__animated animate__backInUp">
        <div className="col-12 col-md-4 pe-5 pe-md-0 ps-5 ps-md-0">
          
          {/* POSTS ROWS */}
          <PostRow emoji="🎥"
          title="Animaciones y SVGs" />
          <PostRow emoji="🌗"
          title="Crea tu propio selector de tema" />
          <PostRow date="20, nov" emoji="🌍"
          title="¿Qué es el estado global? Explicación de Redux" />
          <PostRow date="20, nov" emoji="🚍"
          title="Bus de eventos"/>   
          <PostRow date="20, nov" emoji="📞"
          title="Como llamar correctamente a una API"/>   
          <PostRow date="20, nov" emoji="📔"
          title="Inserta Markdows en tu aplicación"/> 
          <PostRow date="20, nov" emoji="🍩"
          title="Renderizar modelos 3D"/> 
          <PostRow date="20, nov" emoji="🗺"
          title="Utilización de mapas"/> 

          {props.category.posts?.map((post : post) => {
            return (
              <PostRow date={post.date} emoji={post.emoji??'👽'} title={post.title} url={post.url} key={post.url}/> 
            );
          })}


        </div>
      </div>
    </section>
  );
};

export default TimeLine;
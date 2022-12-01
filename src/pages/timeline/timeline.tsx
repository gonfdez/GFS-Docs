import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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

  /* Falta SEO */

  return (
    <section className="container-fluid timeline-container">
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
          {props.category.posts?.map((post : post, index) => {
            if (index===0) return <PostRow end date={post.date} emoji={post.emoji??'👽'} title={post.title} url={post.url} key={post.url}/>;
            else return <PostRow date={post.date} emoji={post.emoji??'👽'} title={post.title} url={post.url} key={post.url}/>;
          })}


        </div>
      </div>
    </section>
  );
};

export default TimeLine;
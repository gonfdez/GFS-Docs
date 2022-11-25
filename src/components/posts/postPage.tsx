import React from "react";
import { useNavigate } from "react-router-dom";
import { post } from "./posts";

interface PostPageProps {
  post : post, 
  categoryPath : string
}

const Post = (props : PostPageProps) : JSX.Element => {

  const navigate = useNavigate();

  return (
    <section className="container-fluid timeline-container">
      <div className="container main-back-button animate__animated animate__bounceInLeft">
        <button type="button" className="btn btn-light border d-none d-md-block" onClick={()=>navigate('/'+props.categoryPath)}>👈 Volver</button>
      </div>
      <div className="row justify-content-center">
        <div className="col text-center timeline-card animate__animated animate__fadeInDown">
            <img src={require('../../media/react.svg').default} alt="React Logo" height={100} />
            <h2>
              {props.post.emoji}   {props.post.title}
            </h2>
        </div>
      </div>
      
      <div className="row justify-content-center mt-5 animate__animated animate__backInUp">
        <div className="col-12 col-md-6 pe-5 pe-md-0 ps-5 ps-md-0">
          {props.post.body}
        </div>
      </div>
    </section>
  );
};

export default Post;
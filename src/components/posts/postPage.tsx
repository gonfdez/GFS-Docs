import Markdown from "markdown-to-jsx";
import React, { useEffect, useState }/* , { useEffect, useState } */ from "react";
import { useNavigate } from "react-router-dom";
import { post } from "./posts";
import PostMarkdown from "./markdowns/busDeEventos.md";
import "./postPage.css";

interface PostPageProps {
  post : post, 
  categoryPath : string
}

const Post = (props : PostPageProps) : JSX.Element => {

  const navigate = useNavigate();
  const [post, setPost] = useState('');

	useEffect(() => {
		fetch(PostMarkdown).then(res => res.text()).then(text => setPost(text)).catch((err)=>console.log('Error:',err));
	})

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
      
      <div className="row justify-content-center animate__animated animate__backInUp">
        <div className="col-12 col-md-6 pe-5 pe-md-0 ps-5 ps-md-0 post-content-container">
          <Markdown>
            {post} 
          </Markdown>
        </div>
      </div>
    </section>
  );
};

export default Post;
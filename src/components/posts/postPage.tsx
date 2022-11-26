import Markdown from "markdown-to-jsx";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { post } from "./posts";
import PostMarkdown from "./markdowns/busDeEventos.md";
import "./postPage.css";
import "highlight.js/styles/github.css";
import hljs from "highlight.js";
import { useLayoutEffect } from "react";

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
  useLayoutEffect(() => {
    hljs.highlightAll();
  });

  const CodeBlock = (props : { children : any, className : string }) => {
    const newClassName = props.className.replace('lang','language').toLocaleLowerCase();
    return (<code className={newClassName}>{props.children}</code>);
  };

  const PostImage = (props : any) => {
    // eslint-disable-next-line
    return (<img src={require('../../media/react.svg').default} {...props}/>);
  };

  return (
    <section className="container-fluid timeline-container animate__animated animate__fadeIn">
      <div className="container main-back-button animate__animated animate__bounceInLeft">
        <button type="button" className="btn btn-light border d-none d-md-block" onClick={()=>navigate('/'+props.categoryPath)}>👈 Volver</button>
      </div>
      <div className="row justify-content-center">
        <div className="col text-center timeline-card">
            <img src={require('../../media/react.svg').default} alt="React Logo" height={100} />
            <h2>
              {props.post.emoji}   {props.post.title}
            </h2>
        </div>
      </div>
      
      <div className="row justify-content-center mt-5">
        <div className="col-12 col-md-6 pe-5 pe-md-0 ps-5 ps-md-0 post-content-container">
        <Markdown
        options={{
            overrides: {
                code: {
                    component: CodeBlock,
                    props: {
                        className: 'hljs',
                    },
                },
                PostImage
            },
        }}
    >
      {post}
    </Markdown>
        </div>
      </div>
    </section>
  );
};

export default Post;
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../../pages/home/home";
import TimeLine from "../../pages/timeline/timeline";
import Layout from "../layout/layout";
import Post from "../posts/postPage";
import { ALL_CATEGORIES, category, post } from "../posts/posts";
import { INDEX_PATH } from "./paths";



const AppRouter = () : JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path={INDEX_PATH} >
            {/* HOME */}
            <Route index element={<Layout><Home/></Layout>}/>
            {/* CATEGORIES TIMELINE */}
            {ALL_CATEGORIES.map((i : category)=>{return (<>
              <Route path={i.path} key={i.path} element={<Layout><TimeLine category={i}/></Layout>}/>
              {i.posts?.map((post : post)=>{ return (
                <Route path={i.path+'/'+post.url} key={i.path+'/'+post.url} element={<Layout><Post categoryPath={i.path} post={post} /></Layout>} />
              );})}
            </>
            );})}


        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
import React from "react";
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import TimeLine from "../../pages/timeline/timeline";
import Layout from "../layout/layout";
import PageNotFound from "../pageNotFound/pageNotFound";
import Post from "../posts/postPage";
import { ALL_CATEGORIES, category, post } from "../posts/posts";
import { INDEX_PATH } from "./paths";



const AppRouter = () : JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path={INDEX_PATH} >

          {/* INDEX */}
          <Route index element={<Navigate to={"/"+ALL_CATEGORIES[0].path} replace={true}/>}/>

          {/* CATEGORIES TIMELINE */}
          {ALL_CATEGORIES.map((i : category)=>{return (
            <Route path={i.path} key={i.path} element={<Layout><TimeLine category={i}/></Layout>}/>
          );})}

          {/* POST */}
          {ALL_CATEGORIES.map((i : category)=>
            i.posts?.map((post : post)=>{ return (
              <Route 
                path={i.path+'/'+post.url} 
                key={i.path+'/'+post.url} 
                element={
                  <Layout>
                    <Post categoryPath={i.path} post={post} />
                  </Layout>} 
              />);}
            ))}

          {/* Page not Found 404 */}
          <Route path="*" element={<Layout><PageNotFound/></Layout>} />
      
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
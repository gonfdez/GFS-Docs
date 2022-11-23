import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../../pages/home/home";
import TimeLine from "../../pages/timeline/timeline";
import Layout from "../layout/layout";
import { ALL_CATEGORIES } from "../posts/posts";
import { INDEX_PATH } from "./paths";



const AppRouter = () : JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path={INDEX_PATH} >
            {/* HOME */}
            <Route index element={<Layout><Home/></Layout>}/>
            {/* CATEGORIES TIMELINE */}
            {ALL_CATEGORIES.map((i)=>{return (<Route path={i.path} element={<Layout><TimeLine category={i}/></Layout>}/>);})}
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
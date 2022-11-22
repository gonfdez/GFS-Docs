import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../../pages/home";
import Layout from "../layout/layout";
import { INDEX_PATH } from "./paths";



const AppRouter = () : JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path={INDEX_PATH} >
          <Route index 
            element={
              <Layout><Home/></Layout>
            }
            />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
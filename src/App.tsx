import React from "react";
import AppRouter from "./components/router/router";
import { Analytics } from '@vercel/analytics/react';

const App = () : JSX.Element => {


  return (<>
    <AppRouter/>    
    <Analytics/>
  </>);
}

export default App;

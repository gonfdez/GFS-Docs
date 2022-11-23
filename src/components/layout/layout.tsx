import React from "react";
import NavBar, { Footer } from "./navBar";

interface LayoutProps {
  children? : JSX.Element | JSX.Element[]
}

const Layout = (props : LayoutProps) : JSX.Element => (<>
  <NavBar />
    {props.children}
  <Footer/>
</>);

export default Layout;
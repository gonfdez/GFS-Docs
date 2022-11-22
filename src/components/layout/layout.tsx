import React from "react";
import NavBar from "./navBar";

interface LayoutProps {
  children? : JSX.Element | JSX.Element[]
}

const Layout = (props : LayoutProps) : JSX.Element => (<>
  <NavBar />
    {props.children}
  <NavBar footer />
</>);

export default Layout;
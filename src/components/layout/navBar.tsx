import { AppBar, Box, TextField, Toolbar, Typography } from "@mui/material";
import React from "react";
import './navBar.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import Brightness5Icon from '@mui/icons-material/Brightness5';

interface NavBarProps {
  footer?: boolean
}

const NavBar = (props : NavBarProps) : JSX.Element => (
  <Box sx={{ flexGrow: 1 }} className={props.footer ? 'footer-box': ''}>
    <AppBar position={props.footer ? 'static' : "fixed"} className="navbar-box">
      <Toolbar className="justify-content-between">
        <Typography variant="h6" color="inherit" component="div">
          GFS Docs
        </Typography>
        {!props.footer && <TextField id="navbar-search-field" label="Buscador" variant="outlined" size="small" className="d-none d-md-block"/>}
        <Box>
          <Brightness5Icon  className="me-4"/>
          <GitHubIcon/>
        </Box>
      </Toolbar>
    </AppBar>
  </Box>
);  

export default NavBar;
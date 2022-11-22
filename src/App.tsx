import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import AppRouter from "./components/router/router";

const App = () : JSX.Element => {

  const theme = createTheme({
    typography: {
      fontFamily: ['Poppins', 'Roboto', 'Oxygen', 'sans-serif' ].join(','),
    },
  });


  return (
    <ThemeProvider theme={theme}>
      <AppRouter/>    
    </ThemeProvider>
  );
}

export default App;

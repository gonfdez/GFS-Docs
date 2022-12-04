import React, { useEffect, useState } from "react";

const ThemeProvider = () : JSX.Element => {
  const [theme, setTheme] = useState(localStorage.getItem('theme')??'light');

  const toggleTheme = (e : any) : void => {
    e.preventDefault();
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      localStorage.setItem('theme', 'light');
      document.getElementsByTagName('body')[0].classList.replace('dark','light');
      setTheme('light');
    } else {
      localStorage.setItem('theme', 'dark');
      document.getElementsByTagName('body')[0].classList.replace('light','dark');
      setTheme('dark');
    }
  }

  useEffect(() => {
    document.getElementsByTagName('body')[0].classList.add(localStorage.getItem('theme')??'light');
  }, []);

  return (
    <button
      style={{ border: 'none'}}
      onClick={toggleTheme}
      className="bg-transparent"
    >
      {theme === 'light' ? <i className="icon ion-md-sunny"></i> : <i className="icon ion-md-moon"></i>}
    </button>
  );
};


export default ThemeProvider;
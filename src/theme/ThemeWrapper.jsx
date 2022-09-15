import React, { useState, useEffect } from "react"; // import the hooks so we set the default values and the function to run the first
import { ThemeContext, themes } from "../context/ThemeContext"; // import the theme context and all the theme we define, we are just calling it so we can pass it to main.jsx with the default theme and change theme function

const ThemeContextWrapper = (props) => {
  const [theme, setTheme] = useState(themes.dark); // by default we set the theme to dark

  // this is the function which will get called when we change the theme using toggle
  function changeTheme(theme) {
    setTheme(theme);
  }

  // this is the function which will run when the page loads first and when the theme get changes
  useEffect(() => {
    switch (theme) {
      // if the theme is light the page body will remove dark-body class and will add white-content class which will change the colors
      case themes.light:
        document.body.classList.remove("dark-body");
        document.body.classList.add("white-content");
        break;

      // if the theme is dark the page body will add dark-body class and will remove white-content class which will change the colors

      case themes.dark:
      default:
        document.body.classList.remove("white-content");
        document.body.classList.add("dark-body");
        break;
    }
  }, [theme]);

  return (
    <>
      {/* returing the context: pass the theme, 
       change theme funtion we defined in this page,
       declaring the data available to the subscribed component*/}
      <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
        {props.children}
      </ThemeContext.Provider>
    </>
  );
};

export default ThemeContextWrapper;

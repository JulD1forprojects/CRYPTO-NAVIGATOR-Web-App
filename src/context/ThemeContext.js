//importing useContext hook to set the main theme and change theme function
import { createContext } from "react";

// creating theme data with classes
export const themes = {
  dark: "dark-body",
  light: "white-content",
};

//Context will get called in ThemeWrapper where the default theme and changeTheme function are assigned and passed to the main.jsx
export const ThemeContext = createContext({
  theme: themes.dark,
  changeTheme: () => {},
});

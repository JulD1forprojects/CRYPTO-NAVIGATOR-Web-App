//main file

// default dependancies
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// below are css files dependecies for the project
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";

// this is the theme wrapper which will wrap whole app
import ThemeContextWrapper from "./theme/ThemeWrapper";

ReactDOM.createRoot(document.getElementById("root")).render(
  //wrapping the app into the theme wrapper
  <ThemeContextWrapper>
    <App />
  </ThemeContextWrapper>
);

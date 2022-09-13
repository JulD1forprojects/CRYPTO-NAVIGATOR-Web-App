import React from "react";

// importing dependencies
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import ToggleDark from "./toggleDark";
import { ThemeContext, themes } from "../context/ThemeContext";
import currencies from "../data/currencies";

const NavbarMenu = ({ theme, changeThemes, currency, setCurrency }) => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/">
          <h3>Crypto Navigator</h3>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <ThemeContext.Consumer>
            {({ changeTheme }) => (
              <ToggleDark
                theme={theme}
                toggleDark={() => {
                  changeThemes(!theme);
                  changeTheme(theme ? themes.light : themes.dark);
                }}
              />
            )}
          </ThemeContext.Consumer>

          <select
            id="currency"
            name="currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option>select currency</option>
            {currencies.map((v, i) => {
              return (
                <option key={i} value={v.value}>
                  {v.name}
                </option>
              );
            })}
          </select>
        </Navbar.Collapse>
      </Container>
      <br />
    </Navbar>
  );
};

export default NavbarMenu;

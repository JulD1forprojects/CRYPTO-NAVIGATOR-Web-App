//navbar component

// importing dependencies
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import ToggleDark from "./toggleDark";
import { ThemeContext, themes } from "../context/ThemeContext";
import currencies from "../data/currencies";

const NavbarMenu = ({ theme, changeThemes, currency, setCurrency }) => {
  return (
    //defining a theme mode to make brand name visible
    <Navbar variant={theme ? "dark" : "light"}>
      <Container>
        <Navbar.Brand href="/">
          <h3>Crypto Navigator</h3>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {/* NAVBAR is able to subscribe to the data through Consumer made available from Provider in ThemeWrapper
          Toggle button is being called and assigned the function to change theme mode */}
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

          {/* rendering the select dropdown for currency changer*/}
          <select
            id="currency"
            name="currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option>select currency</option>
            {/* mapping the currencies */}
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

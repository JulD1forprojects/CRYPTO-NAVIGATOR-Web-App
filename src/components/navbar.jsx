import React from "react";

// importing dependencies
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import ToggleDark from "./toggleDark";
import { ThemeContext, themes } from "../context/ThemeContext";
import { NavbarBrand } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

const NavbarMenu = ({ theme, changeThemes, currency, setCurrency }) => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/">
          <h3>Crypto Navigator</h3>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
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
          {/*!!! shorten this code */}
          <option>select currency</option>
          <option value="ARS">Argentine Peso</option>
          <option value="AUD">Australian Dollar</option>
          <option value="BHD">Bahraini Dinar</option>
          <option value="BDT">Bangladeshi Taka</option>
          <option value="BMD">Bermudian Dollar</option>
          <option value="BRL">Brasilian Real</option>
          <option value="GBP">British Pound Sterling</option>
          <option value="CAD">Canadian Dollar</option>
          <option value="CLP">Chilian Peso</option>
          <option value="CNY">Chinese Yuan</option>
          <option value="EUR">Euro</option>
          <option value="HKD">Honk Kong Dollar</option>
          <option value="HUF">Hungrian Forint</option>
          <option value="IDR">Indian Rupee</option>
          <option value="IDR">Indonesian Rupiah</option>
          <option value="ILS">Israeli New Sheqel</option>
          <option value="JPY">Japanese Yen</option>
          <option value="KWD">Kuwaiti Dinar</option>
          <option value="MYR">Malaysian Ringgit</option>
          <option value="MXN">Mexican Peso</option>
          <option value="MMK">Myanmar Kyat</option>
          <option value="TWD">New Taiwan Dollar</option>
          <option value="NZD">New Zealand Dollar</option>
          <option value="NGN">Nigerian Naira</option>
          <option value="NOK">Norwegian Krone</option>
          <option value="PKR">Pakistani Rupee</option>
          <option value="PHP">Philippine Peso</option>
          <option value="PLN">Polish Zloty</option>
          <option value="RUB">Russian Ruble</option>
          <option value="SAR">Saudi Riyal</option>
          <option value="SGD">Singapore Dollar</option>
          <option value="ZAR">South African Rand</option>
          <option value="KRW">South Korean Won</option>
          <option value="LKR">Sri Lankan Rupee</option>
          <option value="SEK">Swedish Krona</option>
          <option value="CHF">Swiss Franc</option>
          <option value="THB">Thai Baht</option>
          <option value="UAH">Ukrainian Hryvnia</option>
          <option value="AED">United Arab Emirates Dirham</option>
          <option value="USD">US Dollar</option>
          <option value="VEF">Venezuelan Bolavar</option>
          <option value="VND">Vietnamese Dong</option>
        </select>
      </Container>
    </Navbar>
  );
};

export default NavbarMenu;

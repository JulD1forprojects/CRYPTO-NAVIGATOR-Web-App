# CRYPTO NAVIGATOR Web App 🚀

## 📊 About this Web App

Crypto Navigator is a practical Web App that was developed with the purpose to help crypto enthusiasts find the best Crypto rates around the globe that are rapidly fetched with one of the most reliable Crypto APIs on the market - Coin Gecko /coins/markets. The Web App fetches data for 100 crypto coins based on any selected fiat currency.

## 🧐 How to use this Web App

User is able to:

- View the crypto data based on selected fiat currency
- Search various crypto currencies using the search bar
- Clear the search history
- Use pages to look for and view different currencies
- Change themes with a toggle switch

## 🧩 App Wireframing

![Imgur](https://i.imgur.com/vwVc1z9.png)

## 👨🏽‍💻 Project Development Approach

<ol>
<li>Decided on visuals and types of components that needed to be developed. </li>
<li>Designed banner with a simple text & image. </li>
<li>Wrapped the whole app into a theme (with Theme Context and Theme Wrapper). </li>
<li>Wrapped the app in the Theme Wrapper in main.jsx. </li>
<li>Started working on a navbar. Navbar is meant to contain Toggle (toggleDark component) to switch between light and dark theme. </li>
<li>Main functionality work: worked on Table & Coins component to fetch and render API data (with Axios).</li>
<li>Developed Search field and Clear search functionality to ensure user could focus on individual crypto coin(s) only. </li>
<li>Pagination component was the last part of development process, after the rest of functionality was ensured to be in place. Pagination is meant to limit number of crypto data rows in a table (from 100 to 10 per page) to complement search functionality and make user experience more friendly.</li>
<li>UI and UX was achieved via Bootstrap and React Bootstrap dependencies and CSS selectors.</li>
<li>Web App Responsiveness (different screen fit) comes from CSS @media queries.</li>
</ol>

## 💻 Dependencies (libraries)

Crypto Navigator Web App was built using React framework with utilisation of following dependencies (libraries):

- [Bootstrap](https://www.npmjs.com/package/bootstrap)

```
npm i bootstrap
```

- [React Bootstrap](https://www.npmjs.com/package/react-bootstrap)

```
npm i react-bootstrap
```

- [Axios](https://www.npmjs.com/package/axios)

```
npm i axios
```

- [Free Font Awesome](https://www.npmjs.com/package/@fortawesome/fontawesome-free)

```
npm i @fortawesome/fontawesome-free
```

## ⚙️ API

For Crypto Navigator Web App [Coin Gecko Coin/Market API](https://www.coingecko.com/en/api/documentation) was used to fetch a specific set of data such as:

- coin "id"
- coin "symbol"
- coin "name"
- coin "image"
- coin "current_price"
- coin "market_cap"
- coin "total_volume"
- coin "price_change_24h"
- coin "circulating_supply"

👉 [CHECK OUT CRYPTO NAVIGATOR HERE](https://test2-delta-teal.vercel.app/)

❗ DISCLAIMER:

This app is a student project that was developed for learning purpose and practice. This web app is not meant to provide or encourage any recommendation for crypto currency investment. All users chosen to make crypto investments based on the fetched data bare sole responsibility for their investment decision. Developer of this Web App bares NO responsibility for users' investment decisions.

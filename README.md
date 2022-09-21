# CRYPTO NAVIGATOR Web App 🚀

## 📊 About this Web App

Crypto Navigator is a practical Web App that was developed with the purpose to help crypto enthusiasts find best Cypto rates around the globe and are rupidly fetched with one of the most reliable Crypto APIs on the market - Coin Gecko /coins/markets. The app fetches data for 100 crypto coins based on selected fiat currency.

## 🧐 How to use this Web App

User is able to:

- View the crypto data based on selected fiat currency
- Search various crypto currencies using the search bar
- Crear the search history
- Use pages to look for and view different currencies
- Change a theme with a toggle switch

## 🧩 App Wireframing

![Imgur](https://i.imgur.com/vwVc1z9.png)

## 👨🏽‍💻 Project Development Methodology

<ol>
<li>Decide on visuals and types of components need to be developed. </li>
<li>Design banner with a simple text & image. </li>
<li>Wrap the whole app into a theme (with Theme Context and Theme Wrapper). </li>
<li>Wrap the app in the Theme Wrapper in main.jsx. </li>
<li>Start working on a navbar. Navbar is meant to contain Toggle (ToggleDark component) to switch between light and dark theme. </li>
<li>Main functionality work: work on Table & Coins component with fetching and rendering API data (with Axios).</li>
<li>Develop Search field and Clear search functionality to ensure user can pull and focus on individual crypto coin(s) only. </li>
<li>Pagination component was the last part of development process, after the rest of functionality was ensured to be in place. Pagination is meant to limit number of crypto data rows in a table (from 100 to 10 per page) to complement search functionality and make user experience more friendly.</li>
<li>UI and UX was achieved via Bootstrap and React Bootstrap dependencies and CSS selectors</li>
<li>Web App Responsiveness (different screen fit) comes from CSS @media queries</li>
</ol>

## 💻 Dependecies (libraries)

Crypto Navigator Web App was built using React framework with ulilasatiion of floowing dependecies (libraries):

- [Bootstrap](https://www.npmjs.com/package/bootstrap)

```
npm i bootstrap
```

- [React Bootstap](https://www.npmjs.com/package/react-bootstrap)

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

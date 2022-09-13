// table body component that rendders the table body with the data we get from api in the props

import React from "react";

const Coins = ({ coins }) => {
  {
    /* rendering the UI below */
  }
  return (
    <>
      {/* rendering the table body */}
      <tbody>
        {/* rendering each data which we get in a props */}
        {coins.map((v, i) => {
          return (
            <tr key={i}>
              <td>{v.id}</td>
              <td>
                <img src={v.image} alt="Not Found" style={{ height: "50px" }} />
              </td>
              <td>{v.name}</td>
              <td>{v.symbol}</td>
              <td>{v.current_price}</td>
              <td>{v.price_change_24h}</td>
              <td>{v.market_cap}</td>
              <td>{v.total_volume}</td>
              <td>{v.circulating_supply}</td>
            </tr>
          );
        })}
      </tbody>
    </>
  );
};

export default Coins;

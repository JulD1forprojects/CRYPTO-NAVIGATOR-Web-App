// main banner component with the main usage for the search function

import React from "react";
import Crypto5 from "../assets/Crypto5.png";

const Banner = () => {
  {
    /* to render the ui */
  }
  return (
    <div className="row">
      <div className="column1">
        {/* rendering main heading */}
        <h1>Crypto Navigator</h1>
        <br />

        {/* rendering sub-heading */}
        <p>Find The Best Crypto Coins Rate Over The Globe</p>
      </div>

      <div className="column2">
        {/* rendering the image */}
        <img src={Crypto5} alt="banner" width="500px" />
      </div>
      <br />
    </div>
  );
};

export default Banner;

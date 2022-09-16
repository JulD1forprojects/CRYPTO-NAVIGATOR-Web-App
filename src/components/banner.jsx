// main banner component with the main usage for the search function

import React, { useState } from "react";
import axios from "axios";
import Crypto5 from "../assets/Crypto5.png";

const Banner = ({
  currency,
  setSearchData,
  getData,
  setCurrentPage,
  setCurrentButton,
}) => {
  //settig default value for search input field
  const [value, setValue] = useState("");

  // gets called when search button is pressed
  const search = () => {
    //console.log(currency);
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}`
      )
      .then((res) => {
        //console.log("error");
        // if we get data it will be received
        console.log(res);

        //filtering API data based on the coin name in the serach field
        var newArray = res.data.filter(function (el) {
          return el.name.includes(value);
        });

        //getting result after data filtering
        console.log(newArray);

        //if we get the result it will be passed to setSearchData function
        //(from App.jsx)
        if (newArray) {
          setSearchData(newArray);
          setValue("");
        } else {
          // if we don't get the data it will show alert error
          alert("No Match Found");
          setValue("");
        }
      })
      .catch((e) => {
        // if we get error the axios will console it
        console.log(e);
      });
  };

  // will be called when user press clear search span
  const clearsearch = async () => {
    // it will set value on input box to empty
    setValue("");

    //then we will run api function again which we get from props from App.jsx
    await getData();

    // make sure that the table page is 1 using the setCurrentPage funtion which we get in props from App.jsx
    setCurrentPage(1);

    // make sure that the pagination button is 1 using the setCurrentButton funtion which we get in props from App.jsx
    setCurrentButton(1);
  };

  {
    /* rendering the ui */
  }
  return (
    <div className="row">
      <div className="column1">
        {/* rendering main heading */}
        <h1>Crypto Navigator</h1>
        <br />

        {/* rendering sub-heading */}
        <p>Find The Best Crypto Coins Rate Over The Globe</p>

        {/* rendering the search form */}
        <div
          id="form"
          className="example"
          style={{ margin: "auto", maxWidth: "370px" }}
        >
          {/* rendering the search input box which is assigned the value and setValue hook so the hook value get change when user type something in input box */}
          <input
            type="text"
            placeholder="Search By Coin Name. E.G : Bitcoin "
            name="search2"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          {/* rendering the button, we pass search function in it so when user click on it the search funtion will get run */}
          <button type="submit" onClick={search}>
            <i className="fa fa-search"></i>
          </button>
        </div>
        <br />

        {/* rendering the clear search button  we assign clearsearch function on it, so whenever user click on the the clearsearch function will get run */}
        <span onClick={clearsearch} style={{ cursor: "pointer" }}>
          Clear Search
        </span>
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

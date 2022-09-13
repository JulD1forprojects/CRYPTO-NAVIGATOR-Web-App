// main page file

// importing dependecies
import { useState, useEffect } from "react"; // to define App states
import axios from "axios"; // to call Coin Gecko API
import { Table } from "react-bootstrap"; //table component from React-bootstrap to show data inside the table

//importing components
import Coins from "./components/coin"; //the table body in which our api data will get shown
import NavbarMenu from "./components/navbar"; // holds the dark and light mode and  currency changer
import Banner from "./components/banner"; // calling the banner component, it holds the search bar

const App = () => {
  const [darkMode, setDarkMode] = useState(true); // by default the dark theme is set
  const [loading, setLoading] = useState(true); // when data is loaded is will become false
  const [data, setData] = useState([]); // by default the data state is empty, it will get filled when we get data from api
  const [currency, setCurrency] = useState("USD"); // USD set as default currency
  const [currentPage, setCurrentPage] = useState(1); // as we make pagination component so we make default page to page 1
  const [howManyPages, setHowmanypages] = useState(1); // by default we make no of page as 1, but it will get calculated again when we get data from api
  const [postsPerPage] = useState(100); // by default we set 100 records per page to show in table
  const [currentButton, setCurrentButton] = useState(1); // we set the pagination button to be set page 1 by default

  // the below function is to get data from the api
  const getData = () => {
    // as below we see that i have set the currency as variable because it will get change by currency changer and by default we set it as USD above
    axios
      .get(
        //!setting currency variable as it will get change by currency changer
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}`
      )
      .then((res) => {
        // if we get the data we will receive it
        console.log(res);

        // we will save data in data state we define earlier using setData
        setData(res.data);

        // after we get data we will calculate the no of pages for the table
        setHowmanypages(Math.ceil(res.data.length / postsPerPage));

        // after getting data and calculations we will stop the loading
        setLoading(false);
      })
      .catch((e) => {
        // if we get error the axios will console it
        console.log(e);
      });
  };

  // the below code will run before the page first render and when the currency will get change
  useEffect(() => {
    // we call the function we defined above to get the data
    getData();
  }, [currency]);

  // getting the index of last record of api data
  const indexOfLastPost = currentPage * postsPerPage;
  console.log(indexOfLastPost);

  // getting the index of first record of api data
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  console.log(indexOfFirstPost);

  // the below code is for getting the data based on the indexes and the amount of record we set to show per page. i.e 10
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  console.log(currentPosts);

  // the below function will be called when this page will get data from the banner component, we will pass this function as a prop in banner component
  const setSearchData = (newdata) => {
    console.log(newdata);
    // when we get data searched data in banner component we will put it inside out main data state so it can be shown in table
    setData(newdata);

    // after we get data we will calculate the no of pages for the table
    //setHowmanypages(Math.ceil(newdata.length / postsPerPage));

    // we set the table page to page 1 because before the search the user can be on any page and search result might be only on only 1 page
    setCurrentPage(1);

    //set pagination button to button 1 because before the search the user can be on any page and search result might be only on only 1 page
    setCurrentButton(1);
  };

  // rendering the ui

  // shows while loading state is True, else it will show API data
  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      <div className="App">
        {/* rendering the navbar component 
       passing theme function to change theme and currency */}
        <NavbarMenu
          theme={darkMode}
          changeThemes={setDarkMode}
          currency={currency}
          setCurrency={setCurrency}
        />

        <div className="container">
          <br />

          {/* rendering the banner component */}
          <Banner />

          {/* rendering the table to show the data */}
          <Table
            striped
            bordered
            responsive
            variant={darkMode ? "dark" : "light"}
          >
            <thead>
              <tr>
                <th>ID</th>
                <th>Image</th>
                <th>Coin Name</th>
                <th>Symbol</th>
                <th>Price</th>
                <th>24H Change</th>
                <th>Market Cap</th>
                <th>Total Volume</th>
                <th>Circulating Supply</th>
              </tr>
            </thead>

            {/* rendering the coins component which holds table body */}
            <Coins coins={data} />
          </Table>
          <br />
          <br />
        </div>
      </div>
    );
  }
};

export default App;

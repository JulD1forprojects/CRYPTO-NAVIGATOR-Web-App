import React, { useState, useEffect } from "react";

const Pagination = ({
  pages,
  setCurrentPage,
  theme,
  currentPage,
  currentButton,
  setCurrentButton,
}) => {
  // setting number of pages
  const numberOfPages = [];
  for (let i = 1; i <= pages; i++) {
    numberOfPages.push(i);
  }

  // Current active button number

  //array of table buttons seen of the page
  const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);

  // this function will run at first time page loads an whenever the user click on paginate button and when the page get change and when the user make the search result
  useEffect(() => {
    // pagination buttons
    let tempNumberOfPages = [...arrOfCurrButtons];

    // setting the middle buttons for the pagination
    let dotsInitial = "...";
    let dotsLeft = "... ";
    let dotsRight = " ...";

    // if No of Pages less than 6, render all buttons less than 6
    if (numberOfPages.length < 6) {
      tempNumberOfPages = numberOfPages;
    }

    // if current button is greater than 1 and less than 3,
    // than create new array with 1 2 3 4 buttons & the total No of pages
    else if (currentButton >= 1 && currentButton <= 3) {
      tempNumberOfPages = [1, 2, 3, 4, dotsInitial, numberOfPages.length];
    }

    //if current button is 4, then slice the array to show up to 4 buttons
    // !using Slice method
    else if (currentButton === 4) {
      const sliced = numberOfPages.slice(0, 5);
      tempNumberOfPages = [...sliced, dotsInitial, numberOfPages.length];
    }
    //from 5 to 8 -> (10 - 2)
    else if (currentButton > 4 && currentButton < numberOfPages.length - 2) {
      // sliced1 (5-2, 5) -> [4,5]
      const sliced1 = numberOfPages.slice(currentButton - 2, currentButton);
      // sliced1 (5, 5+1) -> [6]
      const sliced2 = numberOfPages.slice(currentButton, currentButton + 1);
      // [1, '...', 4, 5, 6, '...', 10]
      tempNumberOfPages = [
        1,
        dotsLeft,
        ...sliced1,
        ...sliced2,
        dotsRight,
        numberOfPages.length,
      ]; // [1, '...', 4, 5, 6, '...', 10]
    } else if (currentButton > numberOfPages.length - 3) {
      // > 7
      const sliced = numberOfPages.slice(numberOfPages.length - 4); // slice(10-4)
      tempNumberOfPages = [1, dotsLeft, ...sliced];
    } else if (currentButton === dotsInitial) {
      setCurrentButton(arrOfCurrButtons[arrOfCurrButtons.length - 3] + 1);
    }

    // if user clicks on dotted Right button,
    //he will be brought to the NEXT page
    else if (currentButton === dotsRight) {
      setCurrentButton(arrOfCurrButtons[3] + 2);
    }

    // if user clicks on dotted Left button,
    //he will be brought to the PREV page
    else if (currentButton === dotsLeft) {
      setCurrentButton(arrOfCurrButtons[3] - 2);
    }

    // finally, set the buttons array to state
    setArrOfCurrButtons(tempNumberOfPages);

    // set the current page as the current button when it's selected
    setCurrentPage(currentButton);
  }, [currentButton, pages, currentPage]);

  {
    /* RENDERING THE UI*/
  }
  return (
    <div
      className="pagination-container"
      id={theme ? "pagination-dark" : "dagination-light"}
    >
      {/* rendering the PREVIOUS page button */}
      <a
        className={`${
          arrOfCurrButtons.length === 1 || currentButton === 1 ? "disabled" : ""
        }`}
        onClick={() =>
          setCurrentButton((prev) => (prev <= 1 ? prev : prev - 1))
        }
      >
        Prev
      </a>

      {/* rendering pages buttons */}

      {/* if the result of buttons is 1, show only 1 button,
       else show all array buttons */}

      {arrOfCurrButtons.length === 1
        ? arrOfCurrButtons.map((item, index) => {
            return (
              <a
                key={index}
                className="active"
                onClick={() => setCurrentButton(item)}
              >
                {item}
              </a>
            );
          })
        : arrOfCurrButtons.map((item, index) => {
            return (
              <a
                key={index}
                className={`${currentButton === item ? "active" : ""}`}
                onClick={() => setCurrentButton(item)}
              >
                {item}
              </a>
            );
          })}

      {/* rendering the NEXT page button*/}
      <a
        className={`${
          arrOfCurrButtons.length === 1 ||
          currentButton === numberOfPages.length
            ? "disabled"
            : ""
        }`}
        onClick={() =>
          setCurrentButton((prev) =>
            prev >= numberOfPages.length ? prev : prev + 1
          )
        }
      >
        Next
      </a>
    </div>
  );
};

export default Pagination;

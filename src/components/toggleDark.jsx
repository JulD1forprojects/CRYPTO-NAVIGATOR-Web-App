import React from "react";

const ToggleDark = ({ theme, toggleDark }) => {
  //rendering the toggle HTML
  return (
    <div>
      <div className="wrapper">
        <div>
          {/* render the toggle: 
          assigning the default value that comes from the props and the function which will get called when the user switches the toggle   */}
          <input
            type="checkbox"
            hidden="hidden"
            id="themetoggler"
            className="toggleinput"
            defaultChecked={theme}
            onClick={() => {
              toggleDark();
            }}
          />
          <label className="switch" htmlFor="themetoggler"></label>
        </div>
      </div>
    </div>
  );
};

export default ToggleDark;

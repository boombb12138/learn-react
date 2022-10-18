import React from "react";
import ThemeContext from "./context/theme-context";

function HomeBanner() {
  return (
    <div>
      <ThemeContext.Consumer>
        {(value) => {
          return <h2>Banner:{value.color}</h2>;
        }}
      </ThemeContext.Consumer>
    </div>
  );
}

export default HomeBanner;

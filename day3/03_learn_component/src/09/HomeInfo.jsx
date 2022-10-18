import React, { Component } from "react";
import UserContext from "./context/user-context";
import ThemeContext from "./context/theme-context";
export class HomeInfo extends Component {
  render() {
    console.log(this.context);
    return (
      <div>
        HomeInfo:{this.context.color}
        <UserContext.Consumer>
          {(value) => {
            return <h2>Info:{value.nickname}</h2>;
          }}
        </UserContext.Consumer>
      </div>
    );
  }
}
//
HomeInfo.contextType = ThemeContext;

export default HomeInfo;

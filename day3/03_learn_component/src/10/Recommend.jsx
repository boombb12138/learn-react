import React, { Component } from "react";
import UserContext from "./context/user-context";

export class Recommend extends Component {
  render() {
    return (
      <div>
        <span>Recommend</span>
        <UserContext.Consumer>
          {(value) => {
            return <span>{value.name}</span>;
          }}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default Recommend;

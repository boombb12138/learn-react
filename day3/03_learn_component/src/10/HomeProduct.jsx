import React, { Component } from "react";
import eventBus from "./event/event-bus";

export class HomeProduct extends Component {
  productClick() {
    eventBus.emit("coderwhy", "why", 18);
  }

  render() {
    return (
      <div>
        <div>HomeProduct</div>
        <button onClick={(e) => this.productClick()}>product</button>
      </div>
    );
  }
}

export default HomeProduct;

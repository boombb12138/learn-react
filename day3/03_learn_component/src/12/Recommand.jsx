import React, { PureComponent } from "react";

export class Recommand extends PureComponent {
  render() {
    console.log("Recommend render");
    return (
      <div>
        <h2>Recommend:{this.props.counter}</h2>
      </div>
    );
  }
}

export default Recommand;

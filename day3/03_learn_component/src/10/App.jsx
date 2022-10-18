import React, { Component } from "react";
import eventBus from "./event/event-bus";
import Home from "./Home";
import UserContext from "./context/user-context";
import Recommend from "./Recommend";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "aaa",
    };
  }
  componentDidMount() {
    eventBus.on("coderwhy", this.productClick, this);
  }

  componentWillUnmount() {
    eventBus.off("coderwhy", this.productClick);
  }

  productClick(name, age) {
    console.log("productClick", name, age, this);
    this.setState({ name: name });
  }
  render() {
    return (
      <div className="app">
        <UserContext.Provider value={{ name: "nana", level: 100 }}>
          <Home></Home>
          <Recommend></Recommend>
        </UserContext.Provider>
        <h2>{this.state.name}</h2>
      </div>
    );
  }
}

export default App;

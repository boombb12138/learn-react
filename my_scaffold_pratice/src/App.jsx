import React from "react";
import HelloWorld from "./components/HelloWorld";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Hello React",
    };
  }
  render() {
    const { message } = this.state;
    return (
      <div>
        <h2>{message}</h2>
        <HelloWorld></HelloWorld>
      </div>
    );
  }
}
export default App;

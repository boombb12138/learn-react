import React, { PureComponent } from "react";
import Cart from "./pages/Cart";
export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      isLogin: false,
    };
  }

  loginClick() {
    localStorage.setItem("token", "coderwhy");
    this.setState({ isLogin: true });
  }

  render() {
    return (
      <div>
        App
        <button onClick={(e) => this.loginClick()}>login</button>
        <Cart />
      </div>
    );
  }
}

export default App;

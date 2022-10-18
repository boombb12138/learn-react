import React, { Component } from "react";
import NavBar from "./nav-bar/index";
import NavBarTwo from "./nav-bar-two/index";
export class App extends Component {
  render() {
    const btn = <button>按钮2</button>;
    return (
      <div>
        {/* 1.使用children实现插槽 */}
        <NavBar>
          <button>按钮</button>
          <h2>我是标题</h2>
          <i>按钮</i>
        </NavBar>

        {/* 2.使用props实现插槽 */}
        <NavBarTwo
          leftSlot={btn}
          centerSlot={<h2>呵呵呵</h2>}
          rightSlot={<i>斜体2</i>}
        ></NavBarTwo>
      </div>
    );
  }
}

export default App;

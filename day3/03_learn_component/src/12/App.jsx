import React, { PureComponent } from "react";
import Home from "./Home";
import Recommand from "./Recommand";
import Profile from "./Profile";
export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      message: "Hello world",
      counter: 0,
    };
  }
  changeText() {
    this.setState({ message: "你好啊,李银河!" });
  }
  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }
  render() {
    const { message, counter } = this.state;
    return (
      <div>
        <h2>
          App-{message}-{counter}
        </h2>
        <button onClick={(e) => this.changeText()}>修改文本</button>
        <button onClick={(e) => this.increment()}>counter+1</button>

        <Home message={message} />
        <Recommand counter={counter} />
        <Profile message={message} />
      </div>
    );
  }
}

export default App;

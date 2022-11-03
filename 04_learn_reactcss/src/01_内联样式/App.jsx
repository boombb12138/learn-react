import React, { PureComponent } from "react";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      titleSize: 30,
    };
  }

  addTitleSize() {
    this.setState({ titleSize: this.state.titleSize + 2 });
  }

  render() {
    const { titleSize } = this.state;

    return (
      <div>
        <button onClick={(e) => this.addTitleSize()}>增加字号</button>
        <h2 style={{ color: "red", fontSize: `${titleSize}px` }}>我是h2标签</h2>
      </div>
    );
  }
}

export default App;

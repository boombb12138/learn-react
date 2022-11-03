import React, { PureComponent } from "react";
import "./App.less";
export class App extends PureComponent {
  render() {
    return (
      <div>
        <div className="section">
          <h2 className="title">我是标题</h2>
          <h2 className="content">我是内容</h2>
        </div>
      </div>
    );
  }
}

export default App;

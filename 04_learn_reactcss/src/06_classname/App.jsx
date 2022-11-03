import React, { PureComponent } from "react";
import classNames from "classnames";
export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      isbbb: false,
      isccc: true,
    };
  }
  render() {
    const { isbbb, isccc } = this.state;

    return (
      <div>
        <h2 className={classNames("aaa", { bbb: isbbb, ccc: isccc })}>hhh</h2>
      </div>
    );
  }
}

export default App;

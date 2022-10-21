import React, { PureComponent } from "react";

// 定义一个高阶组件
function hoc(Cpn) {
  // 1.定义类组件
  class NewCpn extends PureComponent {
    render() {
      return <Cpn></Cpn>;
    }
  }
  return NewCpn;
}

class HelloWorld extends PureComponent {
  render() {
    return <h1>Hello World</h1>;
  }
}

const HelloWorldHOC = hoc(HelloWorld);

export class App extends PureComponent {
  render() {
    return (
      <div>
        <HelloWorldHOC></HelloWorldHOC>
      </div>
    );
  }
}

export default App;

import React from "react";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "App Component",
    };
  }

  render() {
    // 1.react元素：通过jsx编写的代码就会被编译成React.createElement,所以返回的就是一个React元素
    const { message } = this.state;
    // return <h2>{message}</h2>;

    // 2.数组或者fragments
    // return ["abc", "cba", "nba"];
    // return [<h1>h1元素</h1>, <h2>h2元素</h2>];

    // 3.字符串/数字类型
    // return "Hello World";

    return true;
  }
}

export default App;

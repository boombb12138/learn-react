import React from "react";

class HelloWorld extends React.Component {
  // 1.构造方法: constructor
  constructor() {
    super();

    console.log("HelloWorld constructor");
    this.state = {
      message: "Hello World",
    };
  }

  changeText() {
    this.setState({ message: "你好啊" });
  }
  // 2.执行render函数
  render() {
    console.log("HelloWorld render");

    const { message } = this.state;
    return (
      <div>
        <h2>{message}</h2>
        <p>{message}是程序员的第一个代码</p>
        <button onClick={(e) => this.changeText()}>修改文本</button>
      </div>
    );
  }

  // 3.组件被渲染到DOM: 被挂载到DOM
  componentDidMount() {
    console.log("HelloWorld componentDidmount");
  }

  //   4.组件的DOM被更新完成，DOM发生更新
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(
      "HelloWorld componentDidUpdate:",
      prevProps,
      prevState,
      snapshot
    );
  }

  //   5.组件从DOM中卸载掉：从DOM移除掉
  componentWillUnmount() {
    console.log("HelloWorld componentWillUnmount");
  }
}

export default HelloWorld;

import React, { PureComponent } from "react";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      username: "coderwhy",
      password: "",
      isAgree: false,
      hobbies: [
        { value: "sing", text: "唱", isChecked: false },
        { value: "dance", text: "跳", isChecked: false },
        { value: "rap", text: "rap", isChecked: false },
      ],
      fruit: ["orange"],
    };
  }

  inputChange(event) {
    console.log("inputChange", event.target.value);
    this.setState({ username: event.target.value });
  }

  handleSubmitClick(event) {
    event.preventDefault();

    console.log("获取所有的输入内容");
    console.log(this.state.username);
    console.log(this.state.password);
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  // handleUsernameChange(event) {
  //   console.log("event.target.name", event.target.name);

  //   this.setState({ [event.target.name]: event.target.value });
  // }

  // handlePasswordnameChange(event) {
  //   console.log("event.target.name", event.target.name);
  //   this.setState({ password: event.target.value });
  // }

  handleAgreeChange(e) {
    this.setState({ isAgree: e.target.checked });
  }

  handleHobbiesChange(e, index) {
    const hobbies = [...this.state.hobbies];
    hobbies[index].isChecked = e.target.checked;
    this.setState({ hobbies });
  }

  handleFruitChange(event) {
    // Array.from(可迭代对象)
    // const options = Array.from(event.target.selectedOptions);
    // const values = options.map((item) => item.value);
    // this.setState({ fruit: values });

    const values2 = Array.from(
      event.target.selectedOptions,
      (item) => item.value
    );
    // console.log(values2);
    this.setState({ fruit: values2 });
  }

  render() {
    const { username, password, isAgree, hobbies, fruit } = this.state;
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmitClick(e)}>
          {/* 1.用户名和密码 */}
          <div>
            <label htmlFor="username">
              用户
              <input
                id="username"
                type="text"
                name="username"
                value={username}
                onChange={(e) => this.handleInputChange(e)}
              />
            </label>
            <label htmlFor="password">
              密码
              <input
                id="password"
                type="password"
                name="password"
                value={password}
                onChange={(e) => this.handleInputChange(e)}
              />
            </label>
          </div>

          {/* 2.checkbox单选 */}
          <label htmlFor="agree">
            <input
              type="checkbox"
              id="agree"
              checked={isAgree}
              onChange={(e) => this.handleAgreeChange(e)}
            />
            同意协议
          </label>

          {/* 3.checkbox多选 */}
          <div>
            您的爱好:
            {hobbies.map((item, index) => {
              return (
                <label htmlFor={item.value} key={item.value}>
                  <input
                    type="checkbox"
                    id={item.value}
                    checked={item.isChecked}
                    onChange={(e) => this.handleHobbiesChange(e, index)}
                  />
                  <span>{item.text}</span>
                </label>
              );
            })}
          </div>

          {/* 4.select */}
          <select
            value={fruit}
            multiple
            onChange={(e) => this.handleFruitChange(e)}
          >
            <option value="apple">苹果</option>
            <option value="orange">橘子</option>
            <option value="banana">香蕉</option>
          </select>

          <button type="submit">注册</button>
        </form>
      </div>
    );
  }
}

export default App;

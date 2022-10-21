import React, { PureComponent } from "react";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      username: "coderwhy",
      password: "",
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

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmitClick(e)}>
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
          <button type="submit">注册</button>
        </form>
      </div>
    );
  }
}

export default App;

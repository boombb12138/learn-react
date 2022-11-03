import React, { PureComponent } from "react";
import { Fragment } from "react";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      sections: [
        { title: "哈哈哈", content: "我是内容, 哈哈哈" },
        { title: "呵呵呵", content: "我是内容, 呵呵呵" },
        { title: "嘿嘿嘿", content: "我是内容, 嘿嘿嘿" },
      ],
    };
  }
  render() {
    const { sections } = this.state;
    return (
      <>
        <h2>我是App的标题</h2>

        <hr />
        {sections.map((item) => {
          return (
            <Fragment>
              <h2>{item.title}</h2>
              <h2>{item.content}</h2>
            </Fragment>
          );
        })}
      </>
    );
  }
}

export default App;

import React, { Component } from "react";

export class index extends Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 0,
    };
  }
  itemClick(index) {
    // 1.自己保存最新的index
    this.setState({ currentIndex: index });

    // 2.触发父组件的tabClick方法
    this.props.tabClick(index);
  }
  render() {
    const { titles, itemType } = this.props;
    return (
      <div className="tab-control">
        {titles.map((item, index) => {
          return (
            <div key={item} onClick={(e) => this.itemClick(index)}>
              {itemType(item)}
            </div>
          );
        })}
      </div>
    );
  }
}

export default index;

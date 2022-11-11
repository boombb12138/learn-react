import React, { PureComponent } from "react";
import store from "../store/counter";
import { subNumberAction } from "../store/counter/actionCreator";

export class profile extends PureComponent {
  constructor() {
    super();

    this.state = {
      counter: store.getState().counter.counter,
    };
  }

  componentDidMount() {
    store.subscribe(() => {
      const state = store.getState().counter;
      this.setState({ counter: state.counter });
    });
  }

  subNumber(num) {
    store.dispatch(subNumberAction(num));
  }

  render() {
    const { counter } = this.state;
    return (
      <div>
        <h2>profile:{counter}</h2>
        <div>
          <button onClick={(e) => this.subNumber(1)}>-1</button>
        </div>
      </div>
    );
  }
}

export default profile;

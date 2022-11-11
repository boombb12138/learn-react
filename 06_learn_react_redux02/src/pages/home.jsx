import React, { PureComponent } from "react";
import {
  subNumberAction,
  addNumberAction,
} from "../store/counter/actionCreator";
import store from "../store/counter";

export class home extends PureComponent {
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
  addNumber(num) {
    store.dispatch(addNumberAction(num));
  }
  subNumber(num) {
    store.dispatch(subNumberAction(num));
  }
  render() {
    const { counter } = this.state;
    return (
      <div>
        <h2>Home Counter:{counter}</h2>
        <div>
          <button onClick={(e) => this.addNumber(1)}>+1</button>
        </div>
      </div>
    );
  }
}

export default home;

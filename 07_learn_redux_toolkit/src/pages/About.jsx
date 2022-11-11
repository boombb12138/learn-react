import React, { PureComponent } from "react";
import { addNumber } from "../store/features/counter";
import { connect } from "../hoc/connect";
export class About extends PureComponent {
  render() {
    const { counter } = this.props;

    return <div>About:{counter}</div>;
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter,
});

const mapDispatchToProps = (dispatch) => ({
  addNumber(num) {
    dispatch(addNumber(num));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(About);

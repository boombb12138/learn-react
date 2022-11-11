import React, { PureComponent } from "react";
import { connect } from "react-redux";
// import store from "../store";
import { addNumberAction, subNumberAction } from "../store/actionCreator";

export class About extends PureComponent {
  calNumber(num, isAdd) {
    if (isAdd) {
      console.log("add", num);
      this.props.addNumber(num);
    } else {
      console.log("sub", num);
      this.props.subNumber(num);
    }
  }
  render() {
    const { counter, banners, recommends } = this.props;

    return (
      <div>
        <h2>About:{counter}</h2>
        <div>
          <button onClick={(e) => this.calNumber(6, true)}>+6</button>
          <button onClick={(e) => this.calNumber(88, true)}>+88</button>
          <button onClick={(e) => this.calNumber(6, false)}>-6</button>
          <button onClick={(e) => this.calNumber(88, false)}>-88</button>
        </div>

        <div className="banner">
          <h2>轮播图数据</h2>
          <ul>
            {banners.map((item, index) => {
              return <li key={index}>{item.title}</li>;
            })}
          </ul>
        </div>

        <div>
          <h2>推荐数据</h2>
          <ul>
            {recommends.map((item, index) => {
              return <li key={index}>{item.title}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     counter: state.counter,
//   };
// }
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    banners: state.banners,
    recommends: state.recommends,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addNumber(num) {
    dispatch(addNumberAction(num));
  },
  subNumber(num) {
    dispatch(subNumberAction(num));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(About);

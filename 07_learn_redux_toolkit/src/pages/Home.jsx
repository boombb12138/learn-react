import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { addNumber } from "../store/features/counter";
// import axios from "axios";
// import store from "../store";
import { fetchHomeMultidataAction } from "../store/features/home";

// import { changeBanners, changeRecommends } from "../store/features/home";
export class Home extends PureComponent {
  componentDidMount() {
    this.props.fetchHomeMultidata();
    // axios.get(
    //   "http://123.207.32.32:8000/home/multidata".then((res) => {
    //     const banners = res.data.data.banner.list;
    //     const recommends = res.data.data.recommend.list;
    //     store.dispatch(changeBanners(banners));
    //     store.dispatch(changeRecommends(recommends));
    //   })
    // );
  }

  addNumber(num) {
    this.props.addNumber(num);
  }

  render() {
    const { counter } = this.props;
    return (
      <div>
        Home:{counter}
        <button onClick={(e) => this.addNumber(5)}>+5</button>
        <button onClick={(e) => this.addNumber(8)}>+8</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  //这里有分包？
  // 有的 在store里面的features中有一个counter文件
  counter: state.counter.counter,
});

const mapDispatchToProps = (dispatch) => ({
  addNumber(num) {
    dispatch(addNumber(num));
  },
  fetchHomeMultidata() {
    // 这里传入的参数 会作为extraInfo传入fetchHomeMultidataAction中
    dispatch(fetchHomeMultidataAction({ name: "why", age: 18 }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

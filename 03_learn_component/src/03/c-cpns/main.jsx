import React, { Component } from "react";
import MainBanner from "./MainBanner";
import MainProductList from "./MainProductList";
import axios from "axios";

export class main extends Component {
  constructor() {
    super();

    this.state = {
      banners: [],
      productList: [],
    };
  }

  componentDidMount() {
    axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
      console.log(res);
      const banners = res.data.data.banner.list;
      const recommend = res.data.data.recommend.list;
      this.setState({
        banners,
        productList: recommend,
      });
    });
  }

  render() {
    const { banners, productList } = this.state;

    return (
      <div className="main">
        <div>main</div>
        <MainBanner banners={banners} />
        <MainProductList productList={productList} />
      </div>
    );
  }
}

export default main;

import React, { PureComponent } from "react";
import { Link, Outlet } from "react-router-dom";
import withRouter from "../hoc/with_router";

export class Home extends PureComponent {
  navigateTo(path) {
    const { navigate } = this.props.router;
    navigate(path);
  }

  render() {
    return (
      <div>
        <h2>Home</h2>
        <Link to="/home/recommend">推荐</Link>
        <Link to="/home/ranking">排行榜</Link>
        <button onClick={(e) => this.navigateTo("/home/songmenu")}>歌单</button>

        {/* 占位 */}
        <Outlet />
      </div>
    );
  }
}

export default withRouter(Home);

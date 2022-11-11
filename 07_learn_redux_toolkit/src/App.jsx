import React, { PureComponent } from "react";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import "./style.css";
import { connect } from "react-redux";

export class App extends PureComponent {
  render() {
    const { counter } = this.props;

    return (
      <div>
        <h2>App:{counter}</h2>
        <div className="pages">
          <Home />
          <Profile />
          <About />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter,
});

export default connect(mapStateToProps)(App);

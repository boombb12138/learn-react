import React, { Component } from "react";
import Main from "./c-cpns/main";
import Header from "./c-cpns/header";
import Footer from "./c-cpns/Footer.jsx";

import "./style.css";

export class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;

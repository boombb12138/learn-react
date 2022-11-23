import React from "react";
import ReactDOM from "react-dom/client";
import App from "./13_redux中的hooks/App";
// import { ThemeContext, UserContext } from "./05_useContext的使用/context";
import { UserContext, TokenContext } from "./12_自定义hooks/Context";
import { Provider } from "react-redux";
import store from "./13_redux中的hooks/store/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  // <UserContext.Provider value={{ name: "why", level: 100 }}>
  //   <ThemeContext.Provider value={{ color: "red" }}>
  //     <App />
  //   </ThemeContext.Provider>
  // </UserContext.Provider>
  <UserContext.Provider value={{ name: "why", level: 100 }}>
    <TokenContext.Provider value={"coderwhy"}>
      <Provider store={store}>
        <App />
      </Provider>
    </TokenContext.Provider>
  </UserContext.Provider>
  //</React.StrictMode>
);

import React, { memo } from "react";
import { useRoutes } from "react-router-dom";
// import { Button } from "antd";

import routes from "./router";
import AppHeader from "./components/app-header";
import AppFooter from "./components/app-footer";

const App = memo(() => {
  return (
    <div className="app">
      <AppHeader />
      {/* <Button type="primary">Button</Button> */}
      <div className="page">{useRoutes(routes)}</div>
      <AppFooter />
    </div>
  );
});

export default App;

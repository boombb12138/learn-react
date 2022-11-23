import React, { memo } from "react";
import "./style.css";
import useScrollPosition from "./hooks/useScrollPosition";

const Home = memo(() => {
  const [scrollX, scrollY] = useScrollPosition();
  return (
    <div>
      Home:{scrollX} -{scrollY}
    </div>
  );
});
const About = memo(() => {
  return <h1>About</h1>;
});

const App = memo(() => {
  return (
    <div className="page">
      <h1>App</h1>
      <Home />
      <About />
    </div>
  );
});

export default App;

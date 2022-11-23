import React, { memo, useState, useEffect } from "react";
import useUserToken from "./hooks/useUserToken";
const Home = memo(() => {
  const [user, token] = useUserToken();
  return (
    <div>
      <h1>
        Home:name{user.name}-level:{user.level}
      </h1>
      <h2>token:{token}</h2>
    </div>
  );
});
const About = memo(() => {
  return <h1>About</h1>;
});

const App = memo(() => {
  const [isShow, setIsShow] = useState(true);
  return (
    <div>
      <h1>App</h1>
      <button onClick={(e) => setIsShow(!isShow)}>切换</button>
      {isShow && <Home />}
      {isShow && <About />}
    </div>
  );
});

export default App;

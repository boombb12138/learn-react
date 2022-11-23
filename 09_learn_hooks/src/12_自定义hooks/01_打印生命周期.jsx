import React, { memo, useState, useEffect } from "react";

const Home = memo(() => {
  useLogLife("Home");
  return <h1>Home</h1>;
});
const About = memo(() => {
  useLogLife("About");
  return <h1>About</h1>;
});

function useLogLife(cName) {
  useEffect(() => {
    // todo  useEffect生命周期
    console.log(cName + "组件被创建");
    return () => {
      console.log(cName + "组件被销毁");
    };
    // todo useEffect如果不依赖任何值 是一个空数组？
  }, [cName]);
}

const App = memo(() => {
  const [isShow, setIsShow] = useState(true);
  useLogLife("App");
  //   useEffect(() => {
  //     // todo  useEffect生命周期
  //     console.log("组件被创建");
  //     return () => {
  //       console.log("组件被销毁");
  //     };
  //   });
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

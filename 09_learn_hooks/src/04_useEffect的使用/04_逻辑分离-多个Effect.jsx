import React, { memo, useEffect, useState } from "react";

const App = memo(() => {
  const [count, setCount] = useState(0);
  //   在组件渲染之后要执行的副作用函数
  useEffect(() => {
    console.log("修改title");
  });

  useEffect(() => {
    console.log("监听redux中数据的变化");

    // 返回值：回调函数 => 组件被重新渲染或者组件卸载后执行
    return () => {
      console.log("取消监听redux中数据变化");
    };
  });

  useEffect(() => {
    console.log("监听EventBus中的why事件");

    return () => {
      console.log("取消监听EventBus中的why事件");
    };
  });

  return <button onClick={(e) => setCount(count + 1)}>+1</button>;
});

export default App;

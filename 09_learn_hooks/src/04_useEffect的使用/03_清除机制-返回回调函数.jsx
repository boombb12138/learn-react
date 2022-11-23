import React, { memo, useEffect, useState } from "react";

const App = memo(() => {
  const [count, setCount] = useState(0);
  //   在组件渲染之后要执行的副作用函数
  useEffect(() => {
    console.log("监听redux中数据的变化，监听EventBus中的why事件");

    // 返回值：回调函数 => 组件被重新渲染或者组件卸载的时候执行
    return () => {
      console.log("取消监听redux中数据变化，取消监听eventBus中数据变化");
    };
  });

  return <button onClick={(e) => setCount(count + 1)}>+1</button>;
});

export default App;

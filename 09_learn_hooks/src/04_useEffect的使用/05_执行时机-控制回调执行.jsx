import React, { memo, useEffect, useState } from "react";

const App = memo(() => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Hello world");

  //   在组件渲染之后要执行的副作用函数
  useEffect(() => {
    console.log("修改title", count);
  }, [count]);

  useEffect(() => {
    console.log("监听redux中数据的变化");

    return () => {};
  }, []);

  useEffect(() => {
    console.log("监听EventBus中的why事件");

    return () => {};
  }, []);
  useEffect(() => {
    console.log("发送网络请求，从服务器中获取数据");

    return () => {
      console.log("会在组件被卸载时，才会执行一次");
    };
  }, []);

  return (
    <div>
      <button onClick={(e) => setCount(count + 1)}>+1 {count}</button>
      <button onClick={(e) => setMessage("你好啊")}>
        {/*{{}} 和 {} 有什么区别 */}
        {/* style才需要用{{color:red}} 里层的是一个对象 */}
        修改message{message}
      </button>
    </div>
  );
});

export default App;

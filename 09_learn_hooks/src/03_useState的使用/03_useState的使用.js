import React, { memo, useState } from "react";

const App = memo(() => {
  const [message, setMessage] = useState("Hello world");
  const [count, setCount] = useState("0");

  function changeMessage() {
    setMessage("你好啊"); //setMessage函数会保存变量 再监听数据改变
  }

  return (
    <div>
      <h2>App:{message}</h2>
      <button onClick={changeMessage()}>修改信息</button>
    </div>
  );
});

export default App;

import React, { memo, useEffect, useState } from "react";

const App = memo(() => {
  const [count, setCount] = useState(200);

  useEffect(() => {
    // useEffect的回调会在组件被渲染完成后，自动调用
    document.title = count;
  });

  return (
    <div>
      <h2>{count}</h2>
      {/* 通过箭头函数来调用setCount 改变数据：通过参数 */}
      <button onClick={(e) => setCount(count + 1)}>+1</button>
    </div>
  );
});

export default App;

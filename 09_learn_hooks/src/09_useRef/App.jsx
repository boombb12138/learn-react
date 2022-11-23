import React, { memo, useCallback, useRef, useState } from "react";

let obj = null;

const App = memo(() => {
  const [count, setCount] = useState(0);
  const nameRef = useRef();
  // useRef在每次组件渲染后返回的都是一样的值
  console.log(obj === nameRef);
  obj = nameRef;

  //useRef解决闭包陷阱
  const countRef = useRef();
  countRef.current = count;
  const increment = useCallback(() => {
    setCount(countRef.current + 1);
  }, []);

  return (
    <div>
      <h2>Hello World:{count}</h2>
      <button onClick={(e) => setCount(count + 1)}>+1</button>
      <button onClick={increment}>+1</button>
    </div>
  );
});

export default App;

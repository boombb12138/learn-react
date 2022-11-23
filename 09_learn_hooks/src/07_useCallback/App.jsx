import React, { memo, useCallback, useState, useRef } from "react";

// props中的属性发生改变时，组件本身会被重新渲染
const HYHome = memo(function (props) {
  const { increment } = props;
  console.log("HYhome被渲染");
  return (
    <div>
      <button onClick={increment}>increment+1 </button>
    </div>
  );
});

const App = memo(() => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("hello world");

  // 闭包陷阱useCallback
  // const increment = useCallback(
  //   function () {
  //     console.log("increment");
  //     setCount(count + 1);
  //   },
  //   [count]
  // );

  //   const increment = useCallback(function () {
  //     console.log("increment");
  //     setCount(count + 1);
  //   });

  //   普通函数
  // const increment = () => {
  //   console.log("increment");
  //   setCount(count + 1);
  // };

  //   进一步优化：当count改变的时候，也useCallback的参数也使用同一个函数
  //   useRef在组件多次渲染时返回的对象是同一个值 也就是说 countRef是不变的
  //   countRef里的current在变
  const countRef = useRef();
  countRef.current = count;
  const increment = useCallback(function () {
    console.log("increment");
    setCount(countRef.current + 1);
  }, []);

  return (
    <div>
      <h2>计数:{count}</h2>
      <button onClick={increment}>+1</button>

      <HYHome increment={increment}></HYHome>

      <h2>message:{message}</h2>
      <button onClick={(e) => setMessage(Math.random())}>修改信息</button>
    </div>
  );
});

export default App;

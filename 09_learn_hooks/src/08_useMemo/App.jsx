import React, { memo, useCallback, useMemo, useState } from "react";

const HelloWorld = memo(function (props) {
  console.log("Helloworld被渲染");
  return <h2>Hello World</h2>;
});

function calcNumTotal(num) {
  let total = 0;
  console.log("calcNumTotal被调用");
  for (let i = 1; i <= num; i++) {
    total += i;
  }
  return total;
}

const App = memo(() => {
  const [count, setCount] = useState(0);

  //   这种方法 是因为setCount被调用，就重新渲染memo组件。然后result就被重新定义 calcNumTotal被调用
  // const result = calcNumTotal(50);

  //   需要setCount被调用的时候 calcNumTotal不执行 就要用useMemo,作用类似与useCallBack
  //   1.不依赖任何值
  const result = useMemo(() => {
    return calcNumTotal(50);
  }, []);

  // 2.依赖count
  //   const result = useMemo(() => {
  //     return calcNumTotal(count * 2);
  //   }, [count]);

  // 3.  useMemo和useCallBack的对比
  //   const increment = useCallback(fn, []);
  //   等同于
  //   const increment2 = useMemo(() => fn, []);

  //   4.使用useMemo对子组件渲染进行优化
  //   const info = { name: "why", age: 18 };
  const info = useMemo(() => {
    return { name: "why", age: 18 };
  }, []);
  return (
    <div>
      <h2>计算结果：{result}</h2>
      <h2>计算器：{count}</h2>
      <button onClick={(e) => setCount(count + 1)}>+1</button>

      <HelloWorld result={result} info={info}></HelloWorld>
    </div>
  );
});

export default App;

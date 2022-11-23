import React, { memo } from "react";
import {
  addNumberAction,
  subNumberAction,
  changeMessageAction,
} from "./store/modules/counter";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

const Home = memo((props) => {
  const { message } = useSelector(
    (state) => ({
      message: state.counter.message,
    }),
    shallowEqual
  );
  console.log("message组件被渲染");
  return (
    <div>
      <h2>Home:{message}</h2>
    </div>
  );
});

const App = memo((props) => {
  // 1. useSelector可以拿到redux中store的数据
  const { count } = useSelector(
    (state) => ({
      count: state.counter.count,
    }),
    shallowEqual
  );

  // 2.useDispatch可以拿到redux中的action
  const dispatch = useDispatch();

  function addNumberHandle(num, isAdd = true) {
    if (isAdd) {
      dispatch(addNumberAction(num));
    } else {
      dispatch(subNumberAction(num));
    }
  }

  function changeMessage(message) {
    dispatch(changeMessageAction(message));
  }
  console.log("App render");

  return (
    <div>
      <h2>当前计数:{count}</h2>
      <button onClick={(e) => addNumberHandle(1)}>+1</button>
      <button onClick={(e) => addNumberHandle(6)}>+6</button>
      <button onClick={(e) => addNumberHandle(6, false)}>-6</button>
      <button onClick={(e) => changeMessage("nihao")}>修改信息</button>
      <Home />
    </div>
  );
});

export default App;

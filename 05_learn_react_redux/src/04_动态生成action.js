const store = require("./store");
const { changeNameAction, addNumberAction } = require("./store/actionCreators");

const unsubscribe = store.subscribe(() => {
  console.log("订阅数据的变化", store.getState());
});

// 修改store中的数据必须action
store.dispatch(changeNameAction("kobe"));
store.dispatch(changeNameAction("lilei"));
store.dispatch(changeNameAction("james"));

store.dispatch(addNumberAction(10));
store.dispatch(addNumberAction(20));
store.dispatch(addNumberAction(30));

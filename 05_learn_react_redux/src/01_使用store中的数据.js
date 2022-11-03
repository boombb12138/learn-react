const store = require("./store");

console.log(store.getState());

// 修改store中的数据必须action
const nameAction = { type: "change_name", name: "kobe" };
store.dispatch(nameAction);

console.log(store.getState());

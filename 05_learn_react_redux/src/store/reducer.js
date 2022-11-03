const { CHANGE_NAME, ADD_NUMBER } = require("./Constants");

const initialState = {
  name: "why",
  counter: 100,
};

// 定义reducer函数
// 2个参数
// 参数一 store中目前保存的state
// 参数二 本次需要更新的action
// 返回值会作为store之后存储的state
function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.name };
    case ADD_NUMBER:
      return { ...state, counter: state.counter + 10 };
    default:
      return state;
  }
}
module.exports = reducer;

import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  // - name 就是模块的名字
  name: "counter",
  initialState: {
    counter: 100,
  },
  // - reducers 就相當於reducer函数 里面的方法相当于case语句
  reducers: {
    addNumber(state, action) {
      state.counter = state.counter + action.payload;
    },
    subNumber(state, action) {
      state.counter = state.counter - action.payload;
    },
  },
});

// action就在counterSlice对象里的actions属性中
// reducer在counterSlice对象里的reducer属性中
// - reducer里面的函数会被放到createSlice .action里面
export const { addNumber, subNumber } = counterSlice.actions;
// - 返回一个对象，真正要用的是reducer
export default counterSlice.reducer;

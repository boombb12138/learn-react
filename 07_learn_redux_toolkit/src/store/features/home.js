import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchHomeMultidataAction = createAsyncThunk(
  "fetch/homemultidata",
  async (extraInfo, { dispatch, getState }) => {
    console.log(
      "extraInfo, { dispatch, getState }",
      extraInfo,
      dispatch,
      getState
    );
    // 1.发送网络请求 记得要用await 否则同步渲染的时候没有数据
    const res = await axios.get("http://123.207.32.32:8000/home/multidata");

    // 法2
    // // 2取出数据
    // const banners = res.data.data.banner.list;
    // const recommends = res.data.data.recommend.list;
    // // 3 dispatch 操作
    // dispatch(changeBanners(banners));
    // dispatch(changeRecommends(recommends));

    // 返回结果  action的状态会变成fulfilled
    return res.data;
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    banners: [],
    recommends: [],
  },
  reducers: {
    changeBanners(state, { payload }) {
      state.banners = payload;
    },
    changeRecommends(state, { payload }) {
      state.recommends = payload;
    },
  },

  //// 法2 这里监听并拿到异步请求来的数据
  extraReducers: {
    [fetchHomeMultidataAction.pending](state, action) {
      console.log(action);
      console.log("fetchHomeMultidataAction pendeing");
    },
    [fetchHomeMultidataAction.fulfilled](state, action) {
      console.log(action);

      console.log("fetchHomeMultidataAction fulfilled");
      state.banners = action.payload.data.banner.list;
      state.recommends = action.payload.data.recommend.list;
    },
    [fetchHomeMultidataAction.rejected](state, action) {
      console.log("fetchHomeMultidataAction rejected");
    },
  },
});

export const { changeBanners, changeRecommends } = homeSlice.actions;
export default homeSlice.reducer;

import * as actionTypes from "./constants";
import axios from "axios";
export const addNumberAction = (num) => {
  return {
    type: actionTypes.ADD_NUMBER,
    num,
  };
};

export const subNumberAction = (num) => {
  return {
    type: actionTypes.SUB_NUMBER,
    num,
  };
};

export const changeBannersAction = (banners) => ({
  type: actionTypes.CHANGE_BANNERS,
  banners,
});
export const changeRecommendsAction = (recommends) => ({
  type: actionTypes.CHANGE_RECOMMENDS,
  recommends,
});
export const fetchHomeMultidataAction = () => {
  return function (dispatch) {
    axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
      const banners = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list;
      console.log("banners", banners);
      console.log("recommends", recommends);
      dispatch(changeBannersAction(banners));
      dispatch(changeRecommendsAction(recommends));
    });
  };
};

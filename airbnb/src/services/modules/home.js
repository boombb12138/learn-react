import QnRequest from "../index";

export function getHomeGoodPriceData() {
  return QnRequest.get({
    url: "/home/goodprice",
  });
}

export function getHomeHighScoreData() {
  return QnRequest.get({
    url: "/home/highscore",
  });
}

export function getHomeDiscountData() {
  return QnRequest.get({
    url: "/home/discount",
  });
}

export function getHomeLongforData() {
  return QnRequest.get({ url: "/home/longfor" });
}

export function getHomePlusData() {
  return QnRequest.get({ url: "/home/plus" });
}

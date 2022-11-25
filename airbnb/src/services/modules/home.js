import QnRequest from "../index";

export function getHomeGoodPriceData() {
  return QnRequest.get({
    url: "/home/goodprice",
  });
}

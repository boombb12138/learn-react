import styled from "styled-components";

export const ItemWrapper = styled.div`
  /* flex-shrink 属性指定了 flex 元素的收缩规则。flex 元素仅在默认宽度之和大于容器的时候才会发生收缩，其收缩的大小是依据 flex-shrink 的值。 */
  flex-shrink: 0;
  box-sizing: border-box;
  width: ${(props) => props.itemWidth};
  padding: 8px;

  .inner {
    width: 100%;
  }

  /* 服务器给的图片的比例不一样解决方案 */
  .cover {
    position: relative;
    box-sizing: border-box;
    padding: 66.6% 8px 0;
    border-radius: 3px;
    overflow: hidden;

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
  .desc {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    color: ${(props) => props.verifyColor};
  }

  .name {
    font-size: 16px;
    font-weight: 700;

    overflow: hidden;
    text-overflow: ellipsis; //以...表示省略的文本
    display: -webkit-box;
    -webkit-line-clamp: 2; //可以把 块容器 中的内容限制为指定的行数
    -webkit-box-orient: vertical; //垂直布局
  }

  .price {
    margin: 8px 0;
  }

  .bottom {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    color: ${(props) => props.theme.text.primaryColor};

    .count {
      margin: 0 2px 0 4px;
    }

    .MuiRating-decimal {
      margin-right: -2px;
    }
  }
`;

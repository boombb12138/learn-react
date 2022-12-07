import styled from "styled-components";

export const ViewWrapper = styled.div`
  position: relative;

  .scroll {
    overflow: hidden;
    .scroll-content {
      display: flex;
      /* 滚动动画 */
      transition: transform 250ms ease;
    }
  }

  .control {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26px;
    height: 26px;
    text-align: center;
    border-radius: 50%;
    border: 1px solid #fff;
    background-color: #fff;
    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.14);

    &.left {
      top: 50%;
      left: 0;
      transform: translate(-50%, -50%);
    }

    &.right {
      top: 50%;
      right: 0;
      transform: translate(50%, -50%);
    }
  }
`;

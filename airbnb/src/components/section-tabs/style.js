import styled from "styled-components";

export const TabsWrapper = styled.div`
  .item {
    box-sizing: border-box;
    flex-basis: 120px;
    flex-shrink: 0;
    white-space: nowrap;
    padding: 14px 16px;
    margin-right: 16px;

    border: 0.5px solid #d8d8d8;
    border-radius: 3px;
    font-size: 17px;
    cursor: pointer;

    ${(props) => props.theme.mixin.boxShadow};

    &:last-child {
      margin-right: 0;
    }

    /* todo &是子元素吗 */
    &.active {
      color: #fff;
      background-color: ${(props) => props.theme.color.secondaryColor};
    }
  }
`;

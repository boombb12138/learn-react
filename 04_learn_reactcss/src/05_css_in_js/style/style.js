import styled from "styled-components";
import { primaryColor, largeSize } from "./variables";
// AppWrapper是一个div
export const AppWrapper = styled.div`
  .footer {
    border: 1px solid orange;
  }
`;

export const SectionWrapper = styled.div.attrs((props) => ({
  tColor: props.color || "blue",
}))`
  border: 1px solid red;

  .title {
    font-size: ${(props) => props.size}px;
    color: ${(props) => props.tColor};

    &:hover {
      background-color: purple;
    }
  }

  .content {
    font-size: ${largeSize};
    color: ${primaryColor};
  }
`;

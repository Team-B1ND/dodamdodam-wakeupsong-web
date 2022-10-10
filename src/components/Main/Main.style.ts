import { palette } from "style/palette";
import styled from "styled-components";

export const MainContainer = styled.div`
  width: 75%;
  height: 100%;
  overflow: auto;
  background-color: ${palette.gray[50]};
  &::-webkit-scrollbar {
    display: none;
  }
`;

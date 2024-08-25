import { palette } from "style/palette";
import styled from "styled-components";

export const MainContainer = styled.div`
  width: 73%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: ${palette.gray[50]};
  &::-webkit-scrollbar {
    display: none;
  }
`;

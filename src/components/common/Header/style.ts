import { palette } from "style/palette";
import styled from "styled-components";

export const Container = styled.header`
  width: 130px;
  height: 100%;
  padding-top: 170px;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 5px 15px ${palette.gray[200]};
  background-color: #fff;
  z-index: 1;
`;

export const LinkWrap = styled.button<{ linkName: string; pathName: string }>`
  width: 100%;
  font-size: 1rem;
  border: none;
  border-left: 5px solid
    ${({ linkName, pathName }) =>
      linkName !== pathName ? "#fff" : `${palette.main}`};
  padding: 8px 0;
  margin: 5px 0;
  padding-left: 15px;
  display: flex;
  cursor: pointer;
  background-color: #fff;

  p {
    color: ${({ linkName, pathName }) =>
      linkName !== pathName ? "#333" : `${palette.main}`};
    font-weight: ${({ linkName, pathName }) =>
      linkName !== pathName ? "none" : "bold"};

    &:hover {
      color: ${palette.main};
    }
  }
`;

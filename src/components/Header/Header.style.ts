import { palette } from "style/palette";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 7%;
  height: 100%;
  padding-top: 170px;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 5px 15px ${palette.gray[200]};
  z-index: 1;
`;

export const LinkWrap = styled.button<{ linkName: string; pathName: string }>`
  width: 100%;
  font-size: 1rem;
  border: none;
  border-left: 5px solid
    ${({ linkName, pathName }) =>
      linkName === pathName ? `${palette.main}` : "#fff"};
  padding: 8px;
  margin: 7px;
  padding-left: 20px;
  display: flex;
  cursor: pointer;
  background-color: #fff;

  .Link {
    color: ${({ linkName, pathName }) =>
      linkName === pathName ? `${palette.main}` : "#333"};
    font-weight: ${({ linkName, pathName }) =>
      linkName === pathName ? "bold" : "none"};
  }

  .Link:hover {
    color: ${palette.main};
  }
`;

import { palette } from "style/palette";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 8%;
  height: 100%;
  padding-top: 170px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const LinkWrap = styled.button<{ linkName: string; pathName: string }>`
  width: 100%;
  font-size: 1rem;
  border: none;
  border-left: 5px solid
    ${({ linkName, pathName }) =>
      linkName === pathName ? `${palette.main}` : "#fff"};
  padding: 8px;
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

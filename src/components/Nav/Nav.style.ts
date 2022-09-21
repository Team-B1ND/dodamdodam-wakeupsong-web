import { palette } from "style/palette";
import styled from "styled-components";

export const NavBarContainer = styled.div`
  min-width: 20%;
  height: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  background-color: ${palette.mainDark};
  color: #fff;
`;

export const DodamLogo = styled.img`
  width: 200px;
`;

import { palette } from "style/palette";
import styled from "styled-components";

export const NavBarContainer = styled.div`
  min-width: 18%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: -5px 0 15px ${palette.gray[200]};
  @media screen and (max-width: 1450px) {
    display: none;
  }
`;

export const DodamLogo = styled.img`
  width: 200px;
  margin-top: 20px;
`;

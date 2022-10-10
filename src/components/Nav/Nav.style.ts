import { palette } from "style/palette";
import styled from "styled-components";

export const NavBarContainer = styled.div`
  min-width: 18%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: -5px 0 15px ${palette.gray[200]};
`;

export const DodamLogo = styled.img`
  width: 200px;
  margin-top: 20px;
`;

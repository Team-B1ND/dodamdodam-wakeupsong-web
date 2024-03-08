import { palette } from "style/palette";
import styled from "styled-components";

export const NavBarContainer = styled.div`
  width: 384px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: -5px 0 15px ${palette.gray[200]};
  background-color: #fff;
`;

export const DodamLogo = styled.img`
  width: 200px;
  margin-top: 20px;
  cursor: pointer;
`;

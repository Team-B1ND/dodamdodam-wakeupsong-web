import { April_Fools_Day_Theme } from "style/theme";
import styled from "styled-components";

export const PageTemplateContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  background-color: ${({ theme }) => theme.backgroundNeutral};

  @media (max-width: 797px) {
    height: min-content;
  }

  & > div > div {
    // 로고 색 바꾸기
    & > div:nth-child(1) > svg > path {
      fill: ${April_Fools_Day_Theme.primaryNormal};
    }

    // 기상송 배경색 변경
    & > div:nth-child(2) > div > a:nth-child(4) {
      background-color: ${April_Fools_Day_Theme.primaryNormal};
    }
  }
`;

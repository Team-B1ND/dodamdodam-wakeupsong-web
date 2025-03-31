import { DodamShape, DodamTypography, hexToRgba } from "@b1nd/dds-web";
import { April_Fools_Day_Theme } from "style/theme";
import styled from "styled-components";

export const Container = styled.div<{ isAtv: boolean; isBroadCast: boolean }>`
  width: 100%;

  display: flex;
  align-items: center;

  ${DodamShape.Medium}
  /* background-color: ${({ isAtv, isBroadCast, theme }) =>
    isAtv
      ? isBroadCast
        ? theme.primaryNormal
        : theme.backgroundNeutral
      : "transparent"}; */

  background-color: ${({ isAtv, isBroadCast, theme }) =>
    isAtv
      ? isBroadCast
        ? April_Fools_Day_Theme.primaryNormal
        : theme.backgroundNeutral
      : "transparent"};

  padding: 12px 10px;
  gap: 16px;
  cursor: pointer;
  user-select: none;

  &:hover {
    /* background-color: ${({ isAtv, isBroadCast, theme }) =>
      isAtv && isBroadCast
        ? hexToRgba(theme.primaryNormal, 0.75)
        : theme.fillNeutral}; */

    background-color: ${({ isAtv, isBroadCast, theme }) =>
      isAtv && isBroadCast
        ? hexToRgba(April_Fools_Day_Theme.primaryNormal, 0.75)
        : theme.fillNeutral};
  }
`;

export const VideoRank = styled.p<{ isAtv: boolean; isBroadCast: boolean }>`
  /* color: ${({ isAtv, isBroadCast, theme }) =>
    isAtv && isBroadCast ? theme.staticWhite : theme.primaryNormal}; */

  color: ${({ isAtv, isBroadCast, theme }) =>
    isAtv && isBroadCast
      ? theme.staticWhite
      : April_Fools_Day_Theme.primaryNormal};
  ${DodamTypography.Label.Bold};
`;

export const Wrap = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;

  gap: 16px;
`;

export const VideoImg = styled.img`
  width: 120px;
  height: 67px;

  ${DodamShape.ExtraSmall}

  &:hover {
    + div > p:nth-child(1) {
      text-decoration: underline;
    }
  }
`;

export const VideoInfo = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export const VideoTitle = styled.p<{ isAtv: boolean; isBroadCast: boolean }>`
  color: ${({ isAtv, isBroadCast, theme }) =>
    isAtv && isBroadCast ? theme.staticWhite : theme.labelNormal};
  ${DodamTypography.Body2.Bold}
`;

export const VideoLabel = styled.p<{ isAtv: boolean; isBroadCast: boolean }>`
  color: ${({ isAtv, isBroadCast, theme }) =>
    isAtv && isBroadCast ? theme.staticWhite : theme.labelAlternative};
  ${DodamTypography.Caption2.Medium}
`;

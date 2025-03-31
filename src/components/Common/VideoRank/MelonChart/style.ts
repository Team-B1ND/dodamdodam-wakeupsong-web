import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import { April_Fools_Day_Theme } from "style/theme";
import styled from "styled-components";

export const Container = styled.div<{ isAtv: boolean }>`
  width: 100%;

  display: flex;
  align-items: center;

  ${DodamShape.Medium}
  background-color: ${({ isAtv, theme }) =>
    isAtv ? theme.backgroundNeutral : "transparent"};

  padding: 12px 10px;
  gap: 16px;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: ${({ theme }) => theme.fillNeutral};
  }
`;

export const VideoRank = styled.p`
  /* color: ${({ theme }) => theme.primaryNormal}; */
  color: ${April_Fools_Day_Theme.primaryNormal};
  ${DodamTypography.Label.Bold}
`;

export const Wrap = styled.div`
  width: 100%;
  height: 100%;

  display: flex;

  gap: 16px;
`;

export const VideoImg = styled.img`
  width: 120px;
  height: 67px;

  ${DodamShape.ExtraSmall}
`;

export const VideoInfo = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export const VideoTitle = styled.p`
  color: ${({ theme }) => theme.labelNormal};
  ${DodamTypography.Body2.Bold}
`;

export const VideoLabel = styled.p`
  color: ${({ theme }) => theme.labelAlternative};
  ${DodamTypography.Caption2.Medium}
`;

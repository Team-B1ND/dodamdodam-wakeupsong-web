import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  padding: 12px 0;
  gap: 16px;
  cursor: pointer;
  user-select: none;
`;

export const VideoNum = styled.p`
  color: ${({ theme }) => theme.primaryNormal};
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
  height: 100%;

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

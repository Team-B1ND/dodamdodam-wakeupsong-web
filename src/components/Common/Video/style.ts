import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 287px;
  height: 207px;

  display: flex;
  flex-direction: column;

  gap: 4px;
  cursor: pointer;
`;

export const VideoImg = styled.img`
  width: 100%;
  height: 100%;

  ${DodamShape.ExtraSmall}
`;

export const VideoInfo = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 2px;
`;

export const VideoTitle = styled.p`
  color: ${({ theme }) => theme.labelNormal};
  ${DodamTypography.Body1.Bold}
`;

export const VideoLabel = styled.p`
  color: ${({ theme }) => theme.labelAlternative};
  ${DodamTypography.Caption1.Medium}
`;

export const VideoDate = styled.p`
  color: ${({ theme }) => theme.labelAlternative};
  ${DodamTypography.Caption2.Regular}
`;

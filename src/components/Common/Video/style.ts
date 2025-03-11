import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 300px;
  width: 33%;
  height: auto;

  display: flex;
  flex-direction: column;

  gap: 4px;
  user-select: none;
`;

export const VideoImg = styled.img`
  width: 100%;
  max-height: 200px;

  ${DodamShape.ExtraSmall}

  cursor: pointer;

  &:hover {
    + div > p {
      text-decoration: underline;
    }
  }
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

export const Wrap = styled.div`
  width: auto;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Box = styled.div`
  width: auto;

  display: flex;
  flex-direction: column;
`;

export const VideoLabel = styled.p`
  color: ${({ theme }) => theme.labelAlternative};
  ${DodamTypography.Caption1.Medium}
`;

export const VideoDate = styled.p`
  color: ${({ theme }) => theme.labelAlternative};
  ${DodamTypography.Caption2.Regular}
`;

export const DeleteIconWrap = styled.div`
  width: auto;
  height: auto;
`;

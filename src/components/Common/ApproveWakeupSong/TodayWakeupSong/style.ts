import { DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 16px;
  padding: 0 24px;
`;

export const ContentTitle = styled.p`
  color: ${({ theme }) => theme.labelNormal};
  ${DodamTypography.Headline.Bold}
`;

export const VideoWrap = styled.div`
  width: 100%;
  height: 100%;

  display: flex;

  gap: 12px;
`;

export const NullVideo = styled.div`
  width: 100%;
  height: 270px;

  color: ${({ theme }) => theme.labelAlternative};
  ${DodamTypography.Body1.Medium}

  display: flex;
  justify-content: center;
  align-items: center;
`;

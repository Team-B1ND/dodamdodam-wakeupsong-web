import { DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 8px;
`;

export const Info = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 2px;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.labelNormal};
  ${DodamTypography.Heading2.Bold}
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.labelNormal};
  ${DodamTypography.Label.Medium}
`;

export const VideoWrap = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

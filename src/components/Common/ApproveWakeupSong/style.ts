import { DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.labelNormal};
  ${DodamTypography.Heading1.Bold}

  margin-bottom: 30px;
`;

export const ContentWrap = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 16px;
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

import { DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 16px;
  margin-bottom: 16px;

  @media (max-width: 797px) {
    width: 50%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.labelNormal};
  ${DodamTypography.Headline.Bold}
`;

export const VideoWrap = styled.div`
  width: 100%;
  max-height: 330px;

  display: flex;
  flex-direction: column;

  overflow-y: auto;
  gap: 28px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const NullVideo = styled.div`
  width: 100%;
  aspect-ratio: 16 / 7;

  color: ${({ theme }) => theme.labelAlternative};
  ${DodamTypography.Body1.Medium}

  display: flex;
  justify-content: center;
  align-items: center;
`;

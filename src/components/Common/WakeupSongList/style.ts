import { DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 8px;
`;

export const Wrap = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
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

export const ButtonWrap = styled.div`
  display: flex;

  gap: 5px;
`;

export const VideoWrap = styled.div`
  width: 100%;
  max-height: 500px;

  display: flex;
  flex-direction: column;

  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

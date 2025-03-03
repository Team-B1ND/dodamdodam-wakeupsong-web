import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 16px;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.labelNormal};
  ${DodamTypography.Headline.Bold}
`;

export const Input = styled.input`
  color: ${({ theme }) => theme.labelNormal};
  ${DodamTypography.Headline.Medium}

  width: 100%;
  height: 56px;

  border: 1px solid ${({ theme }) => theme.lineAlternative};
  ${DodamShape.Medium}
  background-color: ${({ theme }) => theme.backgroundNormal};

  outline: none;
  padding: 0 16px;

  &::placeholder {
    color: ${({ theme }) => theme.labelAlternative};
  }
`;

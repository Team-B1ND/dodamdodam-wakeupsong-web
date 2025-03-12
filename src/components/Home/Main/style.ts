import { DodamShape } from "@b1nd/dds-web";
import styled from "styled-components";

export const Container = styled.div`
  width: 72%;

  display: flex;
  flex-direction: column;

  ${DodamShape.Large}
  background-color: ${({ theme }) => theme.backgroundNormal};

  overflow-y: auto;

  padding: 24px;
  gap: 32px;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1068px) {
    margin-bottom: 24px;
  }

  @media (max-width: 797px) {
    width: 100%;
  }
`;

export const Wrap = styled.div`
  width: 100%;

  display: flex;

  gap: 32px;

  @media (max-width: 600px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

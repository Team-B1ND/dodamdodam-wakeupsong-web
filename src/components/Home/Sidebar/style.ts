import { DodamShape } from "@b1nd/dds-web";
import styled from "styled-components";

export const Container = styled.div`
  width: 28%;
  height: min-content;

  display: flex;
  flex-direction: column;

  ${DodamShape.Large}
  background-color: ${({ theme }) => theme.backgroundNormal};

  padding: 16px;
  gap: 16px;

  @media (max-width: 797px) {
    width: 100%;
    margin-bottom: 24px;
  }
`;

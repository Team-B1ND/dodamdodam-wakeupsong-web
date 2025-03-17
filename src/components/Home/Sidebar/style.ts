import { DodamShape } from "@b1nd/dds-web";
import styled from "styled-components";

export const Container = styled.div`
  width: calc(28% - 32px);
  height: min-content;

  display: flex;
  flex-direction: column;

  ${DodamShape.Large}
  background-color: ${({ theme }) => theme.backgroundNormal};

  padding: 16px;
  gap: 16px;

  @media (max-width: 797px) {
    width: 100%;
    height: 220px;

    display: flex;
    flex-direction: row;

    & > :nth-child(2) {
      width: 1px;
      min-width: 0;
      height: 100%;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;

    & > :nth-child(2) {
      width: 100%;
      height: 1px;
    }
  }
`;

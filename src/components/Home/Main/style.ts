import { DodamShape } from "@b1nd/dds-web";
import styled from "styled-components";

export const Container = styled.div`
  width: 792px;

  display: flex;
  flex-direction: column;

  ${DodamShape.Large}
  background-color: ${({ theme }) => theme.backgroundNormal};

  overflow-y: auto;

  padding: 24px;
  margin: 58px 0 59px 22px;
  gap: 32px;
`;

export const Wrap = styled.div`
  width: 100%;

  display: flex;

  gap: 32px;
`;

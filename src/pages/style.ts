import styled from "styled-components";

export const PageContainer = styled.div`
  width: calc(100% - 250px);
  height: 100%;

  display: flex;

  gap: 32px;
  padding: 58px 32px 59px 0;

  @media (max-width: 1068px) {
    width: 100%;

    padding: 28px 32px 59px;
  }

  @media (max-width: 797px) {
    display: flex;
    flex-direction: column;

    overflow-y: auto;
  }
`;

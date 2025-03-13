import { DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  .slick-initialized {
    width: 100%;
    position: relative;
  }

  .slick-list {
    overflow: hidden;
  }

  .slick-track {
    display: flex;
  }
`;

export const Wrap = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  padding: 0 24px;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.labelNormal};
  ${DodamTypography.Heading1.Bold}

  margin-bottom: 30px;
`;

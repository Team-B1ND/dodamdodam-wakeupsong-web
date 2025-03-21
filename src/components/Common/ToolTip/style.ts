import { DodamShadow, DodamShape, DodamTypography } from "@b1nd/dds-web";
import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  35% {
    transform: translateY(-10px);
  }
`;

export const Container = styled.div<{ isHideToolTip: boolean }>`
  width: auto;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  ${DodamShape.ExtraSmall}
  background-color: transparent;

  position: absolute;
  right: 5%;
  top: -30%;

  animation: ${bounce} 1.2s ease-in-out infinite;

  transition: opacity 0.5s ease-in-out;
  opacity: ${({ isHideToolTip }) => (isHideToolTip ? 0 : 1)};
`;

export const ToolTipWrap = styled.div`
  ${DodamShape.ExtraSmall}
  background-color: ${({ theme }) => theme.backgroundNormal};
  ${DodamShadow.Heavy}

  padding: 5px 8px;
`;

export const ToolTip = styled.span`
  color: ${({ theme }) => theme.labelNormal};
  ${DodamTypography.Headline.Medium}

  strong {
    ${DodamTypography.Headline.Bold}
  }
`;

export const ToolTipArrow = styled.div`
  width: 0;
  height: 0;
  border-top: 18px solid ${({ theme }) => theme.backgroundNormal};
  border-right: 10px solid transparent;
  border-left: 10px solid transparent;
`;

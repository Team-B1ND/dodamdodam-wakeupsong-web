import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";
import { TypeProps } from "./index";

export const Container = styled.div<{ type: TypeProps }>`
  width: ${({ type }) => (type === "All" ? "33%" : "100%")};
  max-width: ${({ type }) => type === "All" && "300px"};

  display: flex;
  flex-direction: column;

  gap: 4px;
  user-select: none;

  @media (max-width: 797px) {
    ${({ type }) =>
      type === "My" && `flex-direction: row; gap: 10px; align-items: center;`}
  }

  @media (max-width: 600px) {
    ${({ type }) =>
      type === "My" &&
      `flex-direction: column; gap: 4px; align-items: flex-start;`}
  }
`;

export const VideoImg = styled.img<{ type: TypeProps }>`
  width: 100%;
  max-height: 200px;

  ${DodamShape.ExtraSmall}

  cursor: pointer;

  &:hover {
    + div > p {
      text-decoration: underline;
    }
  }

  @media (max-width: 797px) {
    ${({ type }) => type === "My" && `width: 30%;`}
  }

  @media (max-width: 600px) {
    ${({ type }) => type === "My" && `width: 100%; max-height: 300px;`}
  }
`;

export const VideoInfo = styled.div<{ type: TypeProps }>`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 2px;

  @media (max-width: 797px) {
    ${({ type }) => type === "My" && `width: calc(70% - 24px);`}
  }

  @media (max-width: 600px) {
    ${({ type }) => type === "My" && `width: 100%;`}
  }
`;

export const VideoTitle = styled.p`
  color: ${({ theme }) => theme.labelNormal};
  ${DodamTypography.Body1.Bold}
`;

export const Wrap = styled.div`
  width: auto;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Box = styled.div`
  width: auto;

  display: flex;
  flex-direction: column;
`;

export const VideoLabel = styled.p`
  color: ${({ theme }) => theme.labelAlternative};
  ${DodamTypography.Caption1.Medium}
`;

export const VideoDate = styled.p`
  color: ${({ theme }) => theme.labelAlternative};
  ${DodamTypography.Caption2.Regular}
`;

export const DeleteIconWrap = styled.div`
  width: auto;
  height: auto;
`;

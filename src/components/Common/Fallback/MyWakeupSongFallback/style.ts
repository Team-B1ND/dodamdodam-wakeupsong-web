import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";
import { TypeProps } from "./index";
import { skeletonAnimtaion } from "@b1nd/b1nd-styled-components-util";

export const Container = styled.div<{ type: TypeProps }>`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 16px;
  margin-bottom: 16px;
  padding: ${({ type }) => type === "All" && "0 24px"};

  @media (max-width: 797px) {
    width: 50%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.labelNormal};
  ${DodamTypography.Headline.Bold}
`;

export const Wrap = styled.div<{ type: TypeProps }>`
  width: 100%;
  max-height: 330px;

  display: flex;
  flex-direction: ${({ type }) => (type === "All" ? "row" : "column")};

  overflow-y: auto;
  gap: 28px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Box = styled.div<{ type: TypeProps }>`
  width: ${({ type }) => (type === "All" ? "33%" : "100%")};
  max-width: ${({ type }) => type === "All" && "300px"};
  height: min-content;

  display: flex;
  flex-direction: column;

  gap: 5px;
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

export const Img = styled.div<{ type: TypeProps }>`
  width: 100%;
  aspect-ratio: 16 / 11;

  ${DodamShape.ExtraSmall}
  background-color: ${({ theme }) => theme.fillNeutral};

  ${skeletonAnimtaion}
  cursor: pointer;

  @media (max-width: 797px) {
    ${({ type }) => type === "My" && `width: 30%;`}
  }

  @media (max-width: 600px) {
    ${({ type }) => type === "My" && `width: 100%; max-height: 300px;`}
  }
`;

export const Info = styled.div<{ type: TypeProps }>`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 3px;

  @media (max-width: 797px) {
    ${({ type }) => type === "My" && `width: calc(70% - 24px);`}
  }

  @media (max-width: 600px) {
    ${({ type }) => type === "My" && `width: 100%;`}
  }
`;

export const VideoTitle = styled.p`
  width: 80%;
  height: 20px;

  ${DodamShape.ExtraSmall}
  background-color: ${({ theme }) => theme.fillNeutral};

  ${skeletonAnimtaion}
`;

export const Artist = styled.div`
  width: 45%;
  height: 16px;

  ${DodamShape.ExtraSmall}
  background-color: ${({ theme }) => theme.fillNeutral};

  ${skeletonAnimtaion}
`;

export const Date = styled.div`
  width: 30%;
  height: 15px;

  ${DodamShape.ExtraSmall}
  background-color: ${({ theme }) => theme.fillNeutral};

  ${skeletonAnimtaion}
`;

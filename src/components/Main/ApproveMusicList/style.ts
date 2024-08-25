import styled, { css } from "styled-components";
import { palette } from "style/palette";

export const ApproveMusicListContainer = styled.div`
  width: 100%;
  margin: 50px 0 0 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 40px;
  overflow: hidden;

  .slick-initialized {
    width: 100%;
    position: relative;
  }

  .slick-track {
    display: flex;
  }
`;

export const ApproveChangeButton = styled.button<{ nowDate: string }>`
  width: 95px;
  height: 32px;
  font-size: 14px;
  font-weight: 700;
  border: 1px solid ${palette.main};
  border-radius: 10px;
  margin: 0 27px 30px 0;
  cursor: pointer;

  ${({ nowDate }) =>
    nowDate === "today"
      ? css`
          color: white;
          background-color: ${palette.main};
        `
      : css`
          color: ${palette.main};
          background-color: white;
        `}
`;

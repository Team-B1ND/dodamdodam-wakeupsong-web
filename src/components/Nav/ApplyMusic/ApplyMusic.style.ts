import { palette } from "style/palette";
import styled from "styled-components";

export const ApplyMusicContainer = styled.div`
  display: flex;
  margin-top: 70px;
  gap: 10px;
  flex-direction: column;
`;

export const ApplyContainer = styled.form`
  display: grid;
  gap: 10px;
`;

export const ApplyUrlInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 8px;
  outline: none;
  border: 1px solid ${palette.inputBorderColor};
`;

export const ApplyUrlSubmitBtn = styled.button`
  width: 100%;
  height: 40px;
  padding: 24px;
  outline: none;
  cursor: pointer;
  border: none;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${palette.rightGradient};
`;

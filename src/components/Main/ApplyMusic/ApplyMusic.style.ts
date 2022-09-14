import { palette } from "style/palette";
import styled from "styled-components";

export const ApplyMusicContainer = styled.div`
  margin-top: 40px;
  padding: 30px 170px;
  display: grid;
  gap: 20px;
`;

export const ApplyContainer = styled.form`
  display: grid;
  gap: 10px;
`;

export const ApplyUrlInput = styled.input`
  width: 300px;
  height: 40px;
  padding: 8px;
  outline: none;
  border: 1px solid ${palette.inputBorderColor};
`;

export const ApplyUrlSubmitBtn = styled.button`
  width: 300px;
  height: 40px;
  padding: 24px;
  outline: none;
  cursor: pointer;
  border: none;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${palette.main};
`;

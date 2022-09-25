import { palette } from "style/palette";
import styled from "styled-components";

export const MusicListContainer = styled.div`
  margin-top: 80px;
  display: grid;
  gap: 20px;
`;

export const MusicListWrapper = styled.div`
  width: 100%;
  max-height: 250px;
  display: grid;
  grid-template-columns: repeat(4, 320px);
  grid-gap: 18px;
  overflow: hidden;
`;

export const MusicContainer = styled.button`
  display: flex;
  gap: 13px;
  border: none;
  background-color: #fff;
  outline: none;
  &:focus {
    background-color: ${palette.gray[100]};
  }
  &:hover {
    background-color: ${palette.gray[100]};
  }
`;

export const MusicTumbnailImg = styled.div<{ src: string }>`
  width: 150px;
  height: 43px;
  border-radius: 3px;
  background-size: cover;
  background-position: center center;
  background-image: url(${({ src }) => src});
  cursor: pointer;
`;

export const ApplyRanking = styled.div`
  font-size: 0.9rem;
  font-weight: bold;
`;

export const TitleWrap = styled.div`
  display: grid;
  gap: 8px;
  align-items: center;
  overflow: auto;
`;

export const videoTitle = styled.div`
  font-size: 0.9rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const CreatedDateContainer = styled.div`
  font-size: 0.85rem;
  display: flex;
  gap: 7px;
`;

export const MusicNull = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

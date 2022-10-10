import { palette } from "style/palette";
import styled from "styled-components";

export const MusicListContainer = styled.div`
  margin-top: 50px;
  display: grid;
  gap: 20px;
  padding-left: 60px;
`;

export const MusicListWrapper = styled.div`
  width: 98.5%;
  max-height: 280px;
  display: grid;
  grid-template-columns: repeat(4, 320px);
  grid-gap: 18px;
  overflow: hidden;
`;

export const MusicContainer = styled.button`
  display: flex;
  align-items: center;
  gap: 15px;
  border: none;
  background-color: ${palette.gray[50]};
  outline: none;
  border-radius: 5px;
  &:focus {
    background-color: ${palette.gray[200]};
  }
  &:hover {
    background-color: ${palette.gray[200]};
  }
`;

export const MusicTumbnailImg = styled.div<{ src: string }>`
  min-width: 100px;
  min-height: 55px;
  border-radius: 3px;
  background-size: cover;
  background-position: center center;
  background-image: url(${({ src }) => src});
  display: grid;
  align-items: center;
  &:hover {
    &::before {
      content: "▶️";
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  cursor: pointer;
`;

export const ApplyRanking = styled.div`
  text-align: left;
  font-weight: bold;
`;

export const TitleWrap = styled.div`
  width: 100%;
  display: flex;
  gap: 3px;
  flex-direction: column;
  overflow: auto;
`;

export const TitleTopContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const videoTitle = styled.div`
  font-size: 0.9rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: left;
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

import { palette } from "style/palette";
import styled from "styled-components";

export const MusicListContainer = styled.div`
  display: grid;
  gap: 20px;
`;

export const MusicListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 320px);
  grid-gap: 20px;
  max-height: 340px;
  overflow: hidden;
`;

export const MusicContainer = styled.div`
  display: flex;
  gap: 13px;
  cursor: pointer;
  &:hover {
    background-color: ${palette.gray[100]};
  }
`;

export const MusicTumbnailImg = styled.img`
  width: 60px;
  border-radius: 5px;
`;

export const ApplyRanking = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  font-weight: bold;
`;

export const TitleWrap = styled.div`
  display: grid;
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

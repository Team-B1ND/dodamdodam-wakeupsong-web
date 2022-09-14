import styled from "styled-components";

export const MusicListContainer = styled.div`
  padding: 30px 170px;
  display: grid;
  gap: 10px;
`;

export const MusicListWrapper = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  max-height: 350px;
  overflow: auto;
`;

export const MusicContainer = styled.div`
  width: 320px;
  display: flex;
  gap: 7px;
`;

export const MusicTumbnailImg = styled.img`
  width: 90px;
  cursor: pointer;
  border-radius: 5px;
`;

export const TitleWrap = styled.div`
  display: grid;
  align-items: center;
  overflow: auto;
`;

export const videoTitle = styled.div`
  font-size: 0.95rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const channelTitle = styled.div`
  font-size: 0.9rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const createdDateContainer = styled.div`
  font-size: 0.85rem;
  display: flex;
  gap: 7px;
`;

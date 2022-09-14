import styled from "styled-components";

export const TodayMusicListContainer = styled.div`
  padding: 30px 170px;
  display: grid;
  gap: 10px;
`;

export const TodayMusicListTitle = styled.div`
  display: grid;
  gap: 5px;
`;

export const TodayMusicListContents = styled.div`
  display: flex;
  gap: 15px;
`;

export const TitleMent = styled.div`
  font-weight: bold;
  font-size: 1.3rem;
`;

export const SubTitleMent = styled.div`
  font-size: 0.9rem;
`;

export const MusicContainer = styled.div`
  width: 300px;
  cursor: pointer;
`;

export const MusicThumbnailImg = styled.img`
  width: 100%;
  border-radius: 5px;
`;

export const MusicThumbnailTitle = styled.div`
  color: #fff;
  width: 300px;
  overflow: hidden;
  padding: 15px 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
  backdrop-filter: blur(4px);
  transform: translateY(-47px);
  border-radius: 0 0 5px 5px;
  background-color: rgba(0, 0, 0, 0.6);
`;

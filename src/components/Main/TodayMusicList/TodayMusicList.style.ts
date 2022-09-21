import styled from "styled-components";

export const TodayMusicListContainer = styled.div`
  margin-top: 30px;
  display: grid;
  gap: 20px;
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
  width: 360px;
  height: 201px;
  cursor: pointer;
`;

export const MusicThumbnailImg = styled.div<{ src: string }>`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  background-image: url(${({ src }) => src});
`;

export const MusicThumbnailTitle = styled.div`
  color: #fff;
  width: 100%;
  font-size: 0.95rem;
  overflow: hidden;
  padding: 10px 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
  backdrop-filter: blur(4px);
  transform: translateY(-35px);
  /* border-radius: 0 0 5px 5px; */
  background-color: rgba(0, 0, 0, 0.4);
`;

export const MusicNull = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

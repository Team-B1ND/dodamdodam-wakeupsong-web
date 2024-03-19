import { palette } from "style/palette";
import styled from "styled-components";

export const TodayMusicListContainer = styled.div`
  margin-top: 90px;
  display: grid;
  gap: 15px;
  padding-left: 40px;
`;

export const TitleContainer = styled.div`
  width: 96.3%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .seeMoreDetails {
    font-size: 0.9rem;
    color: ${palette.gray[500]};
  }
  .seeMoreDetails:hover {
    text-decoration: underline;
  }
`;

export const TodayMusicListTitle = styled.div`
  display: grid;
  gap: 5px;
`;

export const TodayMusicListContents = styled.div`
  width: 97.5%;
  overflow: auto;
  display: flex;
  gap: 5px;
`;

export const TitleMent = styled.div`
  font-weight: bold;
  font-size: 1.3rem;
`;

export const SubTitleMent = styled.div`
  font-size: 0.9rem;
`;

export const MusicContainer = styled.div`
  width: 323px;
  height: 178px;
  cursor: pointer;
`;

export const MusicThumbnailImg = styled.div<{ src: string }>`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  background-image: url(${({ src }) => src});
  display: grid;
  align-items: flex-end;
  &:hover {
    &::before {
      content: "▶️";
      position: relative;
      margin-top: 35px;
      font-size: 1.5rem;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const MusicThumbnailTitle = styled.div`
  color: #fff;
  width: 100%;
  font-size: 0.95rem;
  padding: 10px 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  backdrop-filter: blur(4px);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const MusicNull = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${palette.gray[400]};
`;
